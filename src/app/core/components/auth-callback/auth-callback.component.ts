import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/common/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.completeAuthentication().then(() => {
      const redirectUrl = sessionStorage.getItem('auth:redirect');
      if (redirectUrl) {
        sessionStorage.removeItem('auth:redirect');
        this.router.navigate([redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}

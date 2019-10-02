import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/common/auth.service';

@Component({
  selector: 'app-auth-silent-refresh',
  templateUrl: './auth-silent-refresh.component.html',
  styleUrls: ['./auth-silent-refresh.component.scss']
})
export class AuthSilentRefreshComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.authService.getUserManager().signinSilentCallback()
        .catch((err) => {
          console.log(err);
        });
    }
  }

}

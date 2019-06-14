import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {

  constructor(
    private router: Router
  ) { }

  goBack() {
    const currentUrl = this.router.url;

    this.router.navigateByUrl(currentUrl.substring(0, currentUrl.lastIndexOf('/')));
  }
}

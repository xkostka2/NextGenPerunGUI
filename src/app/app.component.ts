import {Component, HostListener} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidebarMode = 'side';
  lastScreenWidth: number;

  minWidth = 768;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {

    if (window.innerWidth > this.minWidth) {
      this.sidebarMode = 'side';
    }

    if (window.innerWidth <= this.minWidth) {
      this.sidebarMode = 'over';
    }

    this.lastScreenWidth = window.innerWidth;
  }

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}

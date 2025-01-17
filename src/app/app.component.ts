import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthzService} from './core/services/api/authz.service';
import {PerunPrincipal} from './core/models/PerunPrincipal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    translate: TranslateService,
    private authzService: AuthzService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.getScreenSize(null);
  }

  public static minWidth = 768;

  sidebarMode = 'side';
  lastScreenWidth: number;

  principal: PerunPrincipal;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {

    if (window.innerWidth > AppComponent.minWidth) {
      this.sidebarMode = 'side';
    }

    if (window.innerWidth <= AppComponent.minWidth) {
      this.sidebarMode = 'over';
    }

    this.lastScreenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.authzService.getPerunPrincipal().subscribe(perunPrincipal => this.principal = perunPrincipal);
  }
}

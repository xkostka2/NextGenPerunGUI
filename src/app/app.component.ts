import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthzService} from './core/services/api/authz.service';
import {PerunPrincipal} from './core/models/PerunPrincipal';
import {AuthResolverService} from './core/services/common/auth-resolver.service';
import {AuthService} from './core/services/common/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    translate: TranslateService,
    private authzService: AuthzService,
    private authResolver: AuthResolverService,
    private authService: AuthService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.getScreenSize(null);
  }

  public static minWidth = 768;

  sidebarMode: 'over' | 'push' | 'side' = 'side';
  lastScreenWidth: number;
  loading = true;

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
    this.authService.getUserManager().getUser().then(user => {
      if (user) {
        this.loadPrincipal();
        this.loading = false;
      } else {
        this.authService.userSet.subscribe(() => {
          this.loadPrincipal();
          this.loading = false;
        });
      }
    });
  }

  private loadPrincipal(): void {
    this.authzService.getPerunPrincipal().subscribe(perunPrincipal => {
      this.authResolver.setPerunPrincipal(perunPrincipal);
      this.principal = perunPrincipal;
    });
  }
}

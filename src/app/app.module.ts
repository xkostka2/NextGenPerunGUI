import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {AuthService} from './core/services/common/auth.service';
import {Router} from '@angular/router';
import {RouteReuseStrategy} from '@angular/router';
import {CacheRouteReuseStrategy} from './core/services/common/cache-route-reuse-strategy';
import {MatIconModule} from '@angular/material';
import {CustomIconService} from './core/services/api/custom-icon.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainMenuPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    MatIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CacheRouteReuseStrategy
    },
    CustomIconService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private authService: AuthService,
    private router: Router,
    private customIconService: CustomIconService
  ) {
    this.customIconService.registerPerunRefreshIcon();
    const currentPathname = window.location.pathname;

    if (currentPathname === '/api-callback') {
      this.handleAuthCallback();
    } else {
      this.verifyAuthentication(currentPathname);
    }
  }

  /**
   * Check if the user is logged in and if not,
   * save current path and start authentication;
   *
   * @param path current url path
   */
  private verifyAuthentication(path: string): void {
    this.authService.isLoggedInPromise().subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        sessionStorage.setItem('auth:redirect', path);
        this.authService.startAuthentication().then(r => console.log('R:' + r));
      }
    });
  }

  /**
   * This method is used to handle oauth callbacks.
   *
   * First, it finishes the authentication and then redirects user to the url
   * he wanted to visit.
   *
   */
  private handleAuthCallback(): void {
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

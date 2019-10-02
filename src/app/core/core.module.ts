import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './services/common/auth.service';
import {AuthCallbackComponent} from './components/auth-callback/auth-callback.component';
import { AuthSilentRefreshComponent } from './components/auth-silent-refresh/auth-silent-refresh.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
  ],
  exports: [
    AuthCallbackComponent,
    AuthSilentRefreshComponent,
  ],
  declarations: [AuthCallbackComponent, AuthSilentRefreshComponent],
})
export class CoreModule { }

import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainMenuPageComponent} from './main-menu-page/main-menu-page.component';
import {DebuggerPageComponent} from './shared/debugger-page/debugger-page.component';
import {AuthCallbackComponent} from './core/components/auth-callback/auth-callback.component';
import {AuthSilentRefreshComponent} from './core/components/auth-silent-refresh/auth-silent-refresh.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPageComponent,
  },
  {
    path: 'api-callback',
    component: AuthCallbackComponent,
  },
  {
    path: 'silent-refresh',
    component: AuthSilentRefreshComponent,
  },
  {
    path: 'organizations',
    loadChildren: () => import('./vos/vos.module').then(m => m.VosModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then(m => m.FacilitiesModule),
  },
  {
    path: 'debug',
    component: DebuggerPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

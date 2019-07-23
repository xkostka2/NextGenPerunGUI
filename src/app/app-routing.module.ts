import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component';
import {DebuggerPageComponent} from './shared/debugger-page/debugger-page.component';
import {AuthGuardService} from './core/services/common/auth-guard.service';
import {AuthCallbackComponent} from './core/components/auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'api-callback',
    component: AuthCallbackComponent,
  },
  {
    path: 'organizations',
    loadChildren: () => import('./vos/vos.module').then(m => m.VosModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then(m => m.FacilitiesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'debug',
    component: DebuggerPageComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

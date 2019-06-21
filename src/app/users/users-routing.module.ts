import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserSelectPageComponent} from './pages/user-select-page/user-select-page.component';
import {UserDetailPageComponent} from './pages/user-detail-page/user-detail-page.component';
import {UserOverviewComponent} from './pages/user-detail-page/user-overview/user-overview.component';

const routes: Routes = [
  {
    path: '',
    component: UserSelectPageComponent
  },
  {
    path: ':userId',
    component: UserDetailPageComponent,
    children: [
      {
        path: '',
        component: UserOverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

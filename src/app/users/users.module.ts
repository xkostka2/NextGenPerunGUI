import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {SharedModule} from '../shared/shared.module';
import { UserSelectPageComponent } from './pages/user-select-page/user-select-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { UserOverviewComponent } from './pages/user-detail-page/user-overview/user-overview.component';

@NgModule({
  declarations: [UserSelectPageComponent, UserDetailPageComponent, UserOverviewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }

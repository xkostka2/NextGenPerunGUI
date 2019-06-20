import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {SharedModule} from '../shared/shared.module';
import { UserSelectPageComponent } from './pages/user-select-page/user-select-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';

@NgModule({
  declarations: [UserSelectPageComponent, UserDetailPageComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }

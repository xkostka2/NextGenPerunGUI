import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoSelectPageComponent } from './vo-select-page/vo-select-page.component';
import {VosRoutingModule} from './vos-routing.module';
import {SharedModule} from '../shared/shared.module';
import { VoDetailPageComponent } from './vo-detail-page/vo-detail-page.component';
import { GroupDetailPageComponent } from './group-detail-page/group-detail-page.component';
import { VoGroupsPageComponent } from './vo-groups-page/vo-groups-page.component';

@NgModule({
  imports: [
    CommonModule,
    VosRoutingModule,
    SharedModule
  ],
  declarations: [VoSelectPageComponent, VoDetailPageComponent, GroupDetailPageComponent, VoGroupsPageComponent]
})
export class VosModule { }

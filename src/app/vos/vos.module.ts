import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoSelectPageComponent} from './vo-select-page/vo-select-page.component';
import {VosRoutingModule} from './vos-routing.module';
import {SharedModule} from '../shared/shared.module';
import {VoDetailPageComponent} from './vo-detail-page/vo-detail-page.component';
import {GroupDetailPageComponent} from './group-detail-page/group-detail-page.component';
import {GroupsTreeComponent} from './groups-tree/groups-tree.component';
import {GroupsListComponent} from './groups-list/groups-list.component';
import {VoOverviewTabComponent} from './vo-detail-page/vo-overview-tab/vo-overview-tab.component';
import {VoGroupsTabComponent} from './vo-detail-page/vo-groups-tab/vo-groups-tab.component';
import { VoMembersTabComponent } from './vo-detail-page/vo-members-tab/vo-members-tab.component';
import { MembersListComponent } from './members-list/members-list.component';
import { MemberDetailPageComponent } from './member-detail-page/member-detail-page.component';
import { MemberOverviewTabComponent } from './member-detail-page/member-overview-tab/member-overview-tab.component';
import { MemberGroupsTabComponent } from './member-detail-page/member-groups-tab/member-groups-tab.component';

@NgModule({
  imports: [
    CommonModule,
    VosRoutingModule,
    SharedModule
  ],
  declarations: [
    VoSelectPageComponent,
    VoDetailPageComponent,
    GroupDetailPageComponent,
    GroupsTreeComponent,
    GroupsListComponent,
    VoOverviewTabComponent,
    VoGroupsTabComponent,
    VoMembersTabComponent,
    MembersListComponent,
    MemberDetailPageComponent,
    MemberOverviewTabComponent,
    MemberGroupsTabComponent
  ]
})
export class VosModule {
}

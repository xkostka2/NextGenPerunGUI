import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoSelectPageComponent} from './vo-select-page/vo-select-page.component';
import {VosRoutingModule} from './vos-routing.module';
import {SharedModule} from '../shared/shared.module';
import {VoDetailPageComponent} from './vo-detail-page/vo-detail-page.component';
import {GroupDetailPageComponent} from './group-detail-page/group-detail-page.component';
import {GroupsTreeComponent} from './groups-tree/groups-tree.component';
import {GroupsListComponent} from './groups-list/groups-list.component';
import {VoOverviewComponent} from './vo-detail-page/vo-overview/vo-overview.component';
import {VoGroupsComponent} from './vo-detail-page/vo-groups/vo-groups.component';
import {VoMembersComponent} from './vo-detail-page/vo-members/vo-members.component';
import {MembersListComponent} from './members-list/members-list.component';
import {MemberDetailPageComponent} from './member-detail-page/member-detail-page.component';
import {MemberOverviewComponent} from './member-detail-page/member-overview/member-overview.component';
import {MemberGroupsComponent} from './member-detail-page/member-groups/member-groups.component';
import {GroupOverviewComponent} from './group-detail-page/group-overview/group-overview.component';
import {GroupSubgroupsComponent} from './group-detail-page/group-subgroups/group-subgroups.component';

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
    VoOverviewComponent,
    VoGroupsComponent,
    VoMembersComponent,
    MembersListComponent,
    MemberDetailPageComponent,
    MemberOverviewComponent,
    MemberGroupsComponent,
    GroupOverviewComponent,
    GroupSubgroupsComponent
  ]
})
export class VosModule {
}

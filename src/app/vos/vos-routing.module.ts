import {RouterModule, Routes} from '@angular/router';
import {VoSelectPageComponent} from './pages/vo-select-page/vo-select-page.component';
import {NgModule} from '@angular/core';
import {GroupDetailPageComponent} from './pages/group-detail-page/group-detail-page.component';
import {MemberDetailPageComponent} from './pages/member-detail-page/member-detail-page.component';
import {VoOverviewComponent} from './pages/vo-detail-page/vo-overview/vo-overview.component';
import {VoGroupsComponent} from './pages/vo-detail-page/vo-groups/vo-groups.component';
import {VoMembersComponent} from './pages/vo-detail-page/vo-members/vo-members.component';
import {VoDetailPageComponent} from './pages/vo-detail-page/vo-detail-page.component';
import {MemberOverviewComponent} from './pages/member-detail-page/member-overview/member-overview.component';
import {MemberGroupsComponent} from './pages/member-detail-page/member-groups/member-groups.component';
import {GroupOverviewComponent} from './pages/group-detail-page/group-overview/group-overview.component';
import {GroupSubgroupsComponent} from './pages/group-detail-page/group-subgroups/group-subgroups.component';
import {VoResourcesComponent} from './pages/vo-detail-page/vo-resources/vo-resources.component';
import {VoApplicationsComponent} from './pages/vo-detail-page/vo-applications/vo-applications.component';
import {VoSettingsComponent} from './pages/vo-detail-page/vo-settings/vo-settings.component';
import {VoSettingsAttributesComponent} from './pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component';
import {VoSettingsOverviewComponent} from './pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component';
import {VoSettingsExpirationComponent} from './pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component';
import {GroupApplicationsComponent} from './pages/group-detail-page/group-applications/group-applications.component';
import {VoSettingsManagersComponent} from './pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component';
import {ApplicationDetailComponent} from './components/application-detail/application-detail.component';
import {GroupMembersComponent} from './pages/group-detail-page/group-members/group-members.component';
import {GroupResourcesComponent} from './pages/group-detail-page/group-resources/group-resources.component';
import {GroupSettingsComponent} from './pages/group-detail-page/group-settings/group-settings.component';
import {
  GroupSettingsAttributesComponent
} from './pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component';
import {GroupSettingsOverviewComponent
} from './pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component';

const routes: Routes = [
  {
    path: '',
    component: VoSelectPageComponent
  },
  {
    path: ':voId',
    component: VoDetailPageComponent,
    children: [
      {
        path: '',
        component: VoOverviewComponent,
        data: {animation: 'VoOverviewPage'}
      },
      {
        path: 'groups',
        component: VoGroupsComponent,
        data: {animation: 'VoGroupsPage'}
      },
      {
        path: 'members',
        component: VoMembersComponent,
        data: {animation: 'VoMembersPage'}
      },
      {
        path: 'resources',
        component: VoResourcesComponent,
        data: {animation: 'VoResourcesPage'}
      },
      {
        path: 'applications',
        component: VoApplicationsComponent,
        data: {animation: 'VoApplicationsPage'}
      },
      {
        path: 'applications/:applicationId',
        component: ApplicationDetailComponent,
        data: {animation: 'VoApplicationDetailPage'}
      },
      {
        path: 'settings',
        component: VoSettingsComponent,
        children: [
          {
            path: '',
            component: VoSettingsOverviewComponent,
            data: {animation: 'VoSettingsOverviewPage'}
          },
          {
            path: 'attributes',
            component: VoSettingsAttributesComponent,
            data: {animation: 'VoSettingsAttributesPage'}
          },
          {
            path: 'expiration',
            component: VoSettingsExpirationComponent,
            data: {animation: 'VoSettingsExpirationPage'}
          },
          {
            path: 'managers',
            component: VoSettingsManagersComponent,
            data: {animation: 'VoSettingsManagersPage'}
          }
        ]
      }
    ]
  },
  {
    path: ':voId/members/:memberId',
    component: MemberDetailPageComponent,
    children: [
      {
        path: '',
        component: MemberOverviewComponent,
        data: {animation: 'MemberOverviewPage'}
      },
      {
        path: 'groups',
        component: MemberGroupsComponent,
        data: {animation: 'MemberGroupsPage'}
      },
    ]
  },
  {
    path: ':voId/groups/:groupId',
    component: GroupDetailPageComponent,
    children: [
      {
        path: '',
        component: GroupOverviewComponent,
        data: {animation: 'GroupOverviewPage'}
      },
      {
        path: 'members',
        component: GroupMembersComponent,
        data: {animation: 'GroupMembersPage'}
      },
      {
        path: 'subgroups',
        component: GroupSubgroupsComponent,
        data: {animation: 'GroupSubgroupsPage'}
      },
      {
        path: 'applications',
        component: GroupApplicationsComponent,
        data: {animation: 'GroupApplicationsPage'}
      },
      {
        path: 'resources',
        component: GroupResourcesComponent,
        data: {animation: 'GroupResourcesPage'}
      },
      {
        path: 'settings',
        component: GroupSettingsComponent,
        children: [
          {
            path: '',
            component: GroupSettingsOverviewComponent,
            data: {animation: 'GroupSettingsOverviewPage'}
          },
          {
            path: 'attributes',
            component: GroupSettingsAttributesComponent,
            data: {animation: 'GroupSettingsAttributesPage'}
          }
        ]
      },
      {
        path: 'applications/:applicationId',
        component: ApplicationDetailComponent,
        data: {animation: 'GroupApplicationDetailPage'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VosRoutingModule { }

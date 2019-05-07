import {RouterModule, Routes} from '@angular/router';
import {VoSelectPageComponent} from './vo-select-page/vo-select-page.component';
import {NgModule} from '@angular/core';
import {VoDetailPageComponent} from './vo-detail-page/vo-detail-page.component';
import {GroupDetailPageComponent} from './group-detail-page/group-detail-page.component';
import {MemberDetailPageComponent} from './member-detail-page/member-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: VoSelectPageComponent
  },
  {
    path: ':voId',
    component: VoDetailPageComponent
  },
  {
    path: ':voId/groups',
    component: VoDetailPageComponent
  },
  {
    path: ':voId/groups/:groupId',
    component: GroupDetailPageComponent
  },
  {
    path: ':voId/members/:memberId',
    component: MemberDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VosRoutingModule { }

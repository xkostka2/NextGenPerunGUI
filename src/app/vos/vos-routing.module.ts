import {RouterModule, Routes} from '@angular/router';
import {VoSelectPageComponent} from './vo-select-page/vo-select-page.component';
import {NgModule} from '@angular/core';
import {VoDetailPageComponent} from './vo-detail-page/vo-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: VoSelectPageComponent
  },
  {
    path: ':id',
    component: VoDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VosRoutingModule { }

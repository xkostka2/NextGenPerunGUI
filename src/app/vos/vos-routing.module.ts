import {RouterModule, Routes} from '@angular/router';
import {VoSelectPageComponent} from './vo-select-page/vo-select-page.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: VoSelectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VosRoutingModule { }

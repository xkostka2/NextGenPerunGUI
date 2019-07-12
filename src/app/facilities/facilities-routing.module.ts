import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilitySelectPageComponent} from './pages/facility-select-page/facility-select-page.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitySelectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }

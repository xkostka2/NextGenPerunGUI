import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilitySelectPageComponent} from './pages/facility-select-page/facility-select-page.component';
import {FacilityDetailPageComponent} from './pages/facility-detail-page/facility-detail-page.component';
import {FacilityOverviewComponent} from './pages/facility-detail-page/facility-overview/facility-overview.component';
import {FacilityResourcesComponent} from './pages/facility-detail-page/facility-resources/facility-resources.component';
import {ResourceDetailPageComponent} from './pages/resource-detail-page/resource-detail-page.component';
import {ResourceOverviewComponent} from './pages/resource-detail-page/resource-overview/resource-overview.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitySelectPageComponent
  },
  {
    path: ':facilityId',
    component: FacilityDetailPageComponent,
    children: [
      {
        path: '',
        component: FacilityOverviewComponent,
        data: {animation: 'FacilityOverviewPage'}
      },
      {
        path: 'resources',
        component: FacilityResourcesComponent,
        data: {animation: 'FacilityResourcesPage'}
      }
    ]
  },
  {
    path: ':facilityId/resources/:resourceId',
    component: ResourceDetailPageComponent,
    children: [
      {
        path: '',
        component: ResourceOverviewComponent,
        data: {animation: 'ResourceOverviewPage'}
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }

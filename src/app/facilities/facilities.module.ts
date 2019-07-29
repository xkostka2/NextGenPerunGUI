import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitySelectPageComponent } from './pages/facility-select-page/facility-select-page.component';
import {SharedModule} from '../shared/shared.module';
import { FacilitySelectTableComponent } from './components/facility-select-table/facility-select-table.component';
import { FacilityDetailPageComponent } from './pages/facility-detail-page/facility-detail-page.component';
import { FacilityOverviewComponent } from './pages/facility-detail-page/facility-overview/facility-overview.component';
import { FacilityResourcesComponent } from './pages/facility-detail-page/facility-resources/facility-resources.component';
import {FacilityAllowedGroupsComponent} from './pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component';
import { ResourceDetailPageComponent } from './pages/resource-detail-page/resource-detail-page.component';
import { ResourceOverviewComponent } from './pages/resource-detail-page/resource-overview/resource-overview.component';

@NgModule({
  declarations: [
    FacilitySelectPageComponent,
    FacilitySelectTableComponent,
    FacilityDetailPageComponent,
    FacilityOverviewComponent,
    FacilityResourcesComponent,
    FacilityAllowedGroupsComponent,
    ResourceDetailPageComponent,
    ResourceOverviewComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule
  ]
})
export class FacilitiesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitySelectPageComponent } from './pages/facility-select-page/facility-select-page.component';
import {SharedModule} from '../shared/shared.module';
import { FacilitySelectTableComponent } from './components/facility-select-table/facility-select-table.component';

@NgModule({
  declarations: [FacilitySelectPageComponent, FacilitySelectTableComponent],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule
  ]
})
export class FacilitiesModule { }

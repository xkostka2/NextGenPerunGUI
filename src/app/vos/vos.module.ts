import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoSelectPageComponent } from './vo-select-page/vo-select-page.component';
import {VosRoutingModule} from './vos-routing.module';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import { VoDetailPageComponent } from './vo-detail-page/vo-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    VosRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [VoSelectPageComponent, VoDetailPageComponent]
})
export class VosModule { }

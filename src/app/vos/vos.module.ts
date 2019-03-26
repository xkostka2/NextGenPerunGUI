import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoSelectPageComponent } from './vo-select-page/vo-select-page.component';
import {VosRoutingModule} from './vos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VosRoutingModule
  ],
  declarations: [VoSelectPageComponent]
})
export class VosModule { }

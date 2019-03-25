import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    BrowserAnimationsModule,
    SideMenuComponent,
    RouterModule
  ],
  declarations: [SideMenuComponent]
})
export class SharedModule { }

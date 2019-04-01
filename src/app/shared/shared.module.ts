import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerunNavComponent } from './perun-nav/perun-nav.component';
import {RouterModule} from '@angular/router';
import {MatAutocompleteModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu/side-menu-item/side-menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    PerunNavComponent,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    SideMenuComponent,
    MatSidenavModule
  ],
  declarations: [PerunNavComponent, SideMenuComponent, SideMenuItemComponent]
})
export class SharedModule { }

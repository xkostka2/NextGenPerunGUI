import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerunNavComponent } from './perun-nav/perun-nav.component';
import {RouterModule} from '@angular/router';
import {
  MatAutocompleteModule, MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule, MatSortModule, MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu/side-menu-item/side-menu-item.component';
import { MenuButtonsFieldComponent } from './components/menu-buttons-field/menu-buttons-field.component';
import {TranslateModule} from '@ngx-translate/core';

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
    MatSidenavModule,
    MatExpansionModule,
    TranslateModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule
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
    MatSidenavModule,
    TranslateModule,
    MenuButtonsFieldComponent,
    MatSortModule,
    MatTableModule
  ],
  declarations: [PerunNavComponent, SideMenuComponent, SideMenuItemComponent, MenuButtonsFieldComponent]
})
export class SharedModule { }

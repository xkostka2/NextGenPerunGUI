import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerunNavComponent } from './perun-nav/perun-nav.component';
import {RouterModule} from '@angular/router';
import {
  MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu/side-menu-item/side-menu-item.component';
import { MenuButtonsFieldComponent } from './components/menu-buttons-field/menu-buttons-field.component';
import {TranslateModule} from '@ngx-translate/core';
import { CreateGroupDialogComponent } from './components/dialogs/create-group-dialog/create-group-dialog.component';
import { InviteMemberDialogComponent } from './components/dialogs/invite-member-dialog/invite-member-dialog.component';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';
import {TabComponent} from './components/tab.component';
import {TabPage} from './TabPage';

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
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule
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
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    UserFullNamePipe,
    MatProgressSpinnerModule,
    TabComponent,
    TabPage,
    MatProgressBarModule,
    MatTooltipModule
  ],
  entryComponents: [
    CreateGroupDialogComponent,
    InviteMemberDialogComponent
  ],
  declarations: [
    PerunNavComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    MenuButtonsFieldComponent,
    CreateGroupDialogComponent,
    InviteMemberDialogComponent,
    UserFullNamePipe,
    TabComponent,
    TabPage
  ]
})
export class SharedModule { }

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AuthzService} from '../../../core/services/api/authz.service';
import {Group} from '../../../core/models/Group';
import {RichUser} from '../../../core/models/RichUser';
import {SelectionModel} from '@angular/cdk/collections';
import {Role} from '../../../core/models/PerunPrincipal';
import {Urns} from '../../urns';
import {AddManagerDialogComponent} from '../dialogs/add-manager-dialog/add-manager-dialog.component';
import {RemoveManagerDialogComponent} from '../dialogs/remove-manager-dialog/remove-manager-dialog.component';
import {RemoveGroupManagerDialogComponent} from '../dialogs/remove-group-manager-dialog/remove-group-manager-dialog.component';
import {AddGroupManagerDialogComponent} from '../dialogs/add-group-manager-dialog/add-group-manager-dialog.component';
import {Vo} from '../../../core/models/Vo';
import {Facility} from '../../../core/models/Facility';

@Component({
  selector: 'app-managers-page',
  templateUrl: './managers-page.component.html',
  styleUrls: ['./managers-page.component.scss']
})
export class ManagersPageComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private dialog: MatDialog,
    private authzService: AuthzService
  ) {
  }


  groups: Group[] = null;
  managers: RichUser[] = null;

  @Input()
  complementaryObject: Group | Vo | Facility;

  @Input()
  availableRoles: Role[];

  @Input()
  complementaryObjectType: string;

  @Input()
  theme: string;

  selectionUsers = new SelectionModel<RichUser>(true, []);
  selectionGroups = new SelectionModel<Group>(true, []);

  selected = 'user';
  selectedRole: Role;

  loading = false;

  ngOnInit() {
    this.selectedRole = this.availableRoles[0];
    this.changeUser();
  }

  changeUser() {
    this.loading = true;
    if (this.selected === 'user') {
      this.authzService.getRichAdmins(this.selectedRole, this.complementaryObject.id, this.complementaryObjectType,
        [Urns.USER_DEF_ORGANIZATION, Urns.USER_DEF_PREFERRED_MAIL]).subscribe(managers => {
        this.managers = managers;
        this.selectionUsers.clear();
        this.selectionGroups.clear();
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    }
    if (this.selected === 'group') {
      this.authzService.getManagerGroups(this.selectedRole, this.complementaryObject.id, this.complementaryObjectType).subscribe(groups => {
        this.groups = groups;
        this.selectionUsers.clear();
        this.selectionGroups.clear();
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    }
  }

  addManager() {
    const dialogRef = this.dialog.open(AddManagerDialogComponent, {
      width: '1000px',
      data: {
        complementaryObject: this.complementaryObject,
        theme: this.theme,
        availableRoles: this.availableRoles,
        selectedRole: this.selectedRole
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.changeUser();
    });
  }

  removeManager() {
    const dialogRef = this.dialog.open(RemoveManagerDialogComponent, {
      width: '450px',
      data: {
        managers: this.selectionUsers.selected,
        complementaryObject: this.complementaryObject,
        role: this.selectedRole,
        theme: this.theme
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.changeUser();
      }
    });
  }

  removeGroup() {
    const dialogRef = this.dialog.open(RemoveGroupManagerDialogComponent, {
      width: '450px',
      data: {
        groups: this.selectionGroups.selected,
        complementaryObject: this.complementaryObject,
        role: this.selectedRole,
        theme: this.theme
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.changeUser();
      }
    });
  }

  addGroup() {
    const dialogRef = this.dialog.open(AddGroupManagerDialogComponent, {
      width: '1000px',
      data: {
        complementaryObject: this.complementaryObject,
        availableRoles: this.availableRoles,
        theme: this.theme,
        selectedRole: this.selectedRole
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.changeUser();
    });
  }

}

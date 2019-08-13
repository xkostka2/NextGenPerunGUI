import {Component, HostBinding, OnInit} from '@angular/core';
import {VoService} from '../../../../../core/services/api/vo.service';
import {ActivatedRoute} from '@angular/router';
import {Urns} from '../../../../../shared/urns';
import {RichUser} from '../../../../../core/models/RichUser';
import {SelectionModel} from '@angular/cdk/collections';
import {RemoveManagerDialogComponent} from '../../../../../shared/components/dialogs/remove-manager-dialog/remove-manager-dialog.component';
import {MatDialog} from '@angular/material';
import {Vo} from '../../../../../core/models/Vo';
import {AddManagerDialogComponent} from '../../../../../shared/components/dialogs/add-manager-dialog/add-manager-dialog.component';
import {Group} from '../../../../../core/models/Group';
import {
  RemoveGroupManagerDialogComponent
} from '../../../../../shared/components/dialogs/remove-group-manager-dialog/remove-group-manager-dialog.component';
import {
  AddGroupManagerDialogComponent
} from '../../../../../shared/components/dialogs/add-group-manager-dialog/add-group-manager-dialog.component';
import {AuthzService} from '../../../../../core/services/api/authz.service';

@Component({
  selector: 'app-vo-settings-managers',
  templateUrl: './vo-settings-managers.component.html',
  styleUrls: ['./vo-settings-managers.component.scss']
})
export class VoSettingsManagersComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private dialog: MatDialog,
    private voService: VoService,
    private authzService: AuthzService,
    private route: ActivatedRoute
  ) { }

  managers: RichUser[] = null;
  groups: Group[] = null;

  vo: Vo;

  selectionUsers = new SelectionModel<RichUser>(false, []);
  selectionGroups = new SelectionModel<Group>(false, []);

  selected = 'user';
  selectedRole = 'VOADMIN';

  loading = false;

  ngOnInit() {
    this.loading = true;
    this.route.parent.parent.params.subscribe(parentParentParams => {
      const voId = parentParentParams ['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        this.authzService.getManagerGroups( this.selectedRole, this.vo.id, 'Vo').subscribe(groups => {
          this.groups = groups;
        });

        this.authzService.getRichAdmins( this.selectedRole, this.vo.id, 'Vo',
          [Urns.USER_DEF_ORGANIZATION, Urns.USER_DEF_PREFERRED_MAIL]).subscribe(managers => {
          this.managers = managers;

          this.loading = false;
        });
      });
    });
  }

  changeUser() {
    this.loading = true;
    if (this.selected === 'user') {
      this.authzService.getRichAdmins(this.selectedRole, this.vo.id, 'Vo',
        [Urns.USER_DEF_ORGANIZATION, Urns.USER_DEF_PREFERRED_MAIL]).subscribe(managers => {
        this.managers = managers;
        this.selectionUsers.clear();
        this.selectionGroups.clear();
        this.loading = false;
      });
    }
    if (this.selected === 'group') {
      this.authzService.getManagerGroups( this.selectedRole, this.vo.id, 'Vo').subscribe(groups => {
        this.groups = groups;
        this.selectionUsers.clear();
        this.selectionGroups.clear();
        this.loading = false;
      });
    }
  }

  addManager() {
    const dialogRef = this.dialog.open(AddManagerDialogComponent, {
      width: '1000px',
      data: {vo: this.vo, theme: 'vo-theme'}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  removeManager() {
    const dialogRef = this.dialog.open(RemoveManagerDialogComponent, {
      width: '450px',
      data: { managers: this.selectionUsers.selected, vo: this.vo, role: this.selectedRole, theme: 'vo-theme' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.authzService.getRichAdmins(this.selectedRole, this.vo.id, 'Vo',
          [Urns.USER_DEF_ORGANIZATION, Urns.USER_DEF_PREFERRED_MAIL]).subscribe(managers => {
            this.managers = managers;
            this.selectionUsers.clear();
            this.loading = false;
          });
      }
    });
  }

  removeGroup() {
    const dialogRef = this.dialog.open(RemoveGroupManagerDialogComponent, {
      width: '450px',
      data: { groups: this.selectionGroups.selected, vo: this.vo, role: this.selectedRole, theme: 'vo-theme' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.authzService.getManagerGroups(this.selectedRole, this.vo.id, 'Vo').subscribe(groups => {
          this.groups = groups;
          this.selectionGroups.clear();
          this.loading = false;
        });
      }
    });
  }

  addGroup() {
    const dialogRef = this.dialog.open(AddGroupManagerDialogComponent, {
      width: '1000px',
      data: {vo: this.vo, groups: this.selectionGroups.selected, role: this.selectedRole, theme: 'vo-theme'}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}

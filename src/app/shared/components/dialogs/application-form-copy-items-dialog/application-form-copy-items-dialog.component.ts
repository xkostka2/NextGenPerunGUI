import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatOptionSelectionChange} from '@angular/material';
import {VoService} from '../../../../core/services/api/vo.service';
import {GroupService} from '../../../../core/services/api/group.service';
import {Vo} from '../../../../core/models/Vo';
import {Group} from '../../../../core/models/Group';
import {TranslateService} from '@ngx-translate/core';
import {RegistrarService} from '../../../../core/services/api/registrar.service';

export interface ApplicationFormCopyItemsDialogData {
  voId: number;
  forCopyMails: boolean;
}

@Component({
  selector: 'app-application-form-copy-items-dialog',
  templateUrl: './application-form-copy-items-dialog.component.html',
  styleUrls: ['./application-form-copy-items-dialog.component.scss']
})
export class ApplicationFormCopyItemsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ApplicationFormCopyItemsDialogComponent>,
              private voService: VoService,
              private groupService: GroupService,
              private translateService: TranslateService,
              private registrarService: RegistrarService,
              @Inject(MAT_DIALOG_DATA) public data: ApplicationFormCopyItemsDialogData) { }

  vos: Vo[] = [];
  selectedVo: Vo;
  groups: Group[] = [];
  fakeGroup: Group;
  selectedGroup: Group;

  ngOnInit() {
    this.translateService.get('DIALOGS.APPLICATION_FORM_COPY_ITEMS.NO_GROUP_SELECTED').subscribe( text => {
      this.fakeGroup = {
        id: -1,
        name: text,
        voId: 0,
        parentGroupId: 0,
        shortName: '',
        description: ''
      };
      this.groups = [this.fakeGroup];
      this.selectedGroup = this.fakeGroup;
      this.voService.getAllVos().subscribe(vos => {
        this.vos = vos;
        this.selectedVo = this.vos[0];
        this.groupService.getAllGroups(this.selectedVo.id).subscribe( groups => {
          for (const group of groups) {
            this.groups.push(group);
          }
        });
        this.vos = vos.sort(((vo1, vo2) => {
          if (vo1.name > vo2.name) {
            return 1;
          }

          if (vo1.name < vo2.name) {
            return -1;
          }

          return 0;
        }));
      });
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }

  submit() {
    if (this.data.forCopyMails) {
      if (this.selectedGroup.id === -1) {
        this.registrarService.copyMailsFromVoToVo(this.selectedVo.id, this.data.voId).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.registrarService.copyMailsFromGroupToVo(this.selectedGroup.id, this.data.voId).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    } else {
      if (this.selectedGroup.id === -1) {
        this.registrarService.copyFormFromVoToVo(this.selectedVo.id, this.data.voId).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.registrarService.copyFormFromGroupToVo(this.selectedGroup.id, this.data.voId).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }

  }

  voSelected($event: MatOptionSelectionChange) {
    if ($event) {
      if ($event.isUserInput) {
        this.groupService.getAllGroups($event.source.value.id).subscribe( groups => {
          const temporaryGroups = [this.fakeGroup];
          this.groups = temporaryGroups.concat(groups);
          this.selectedGroup = this.fakeGroup;
        });
      }
    }
  }
}

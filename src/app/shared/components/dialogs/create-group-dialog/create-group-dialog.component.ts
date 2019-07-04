import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Group} from '../../../../core/models/Group';
import {GroupService} from '../../../../core/services/api/group.service';
import {TranslateService} from '@ngx-translate/core';

export interface CreateGroupDialogData {
  parentGroup: Group;
  voId: number;
}

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.scss']
})
export class CreateGroupDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<CreateGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: CreateGroupDialogData,
    private groupService: GroupService,
    private translate: TranslateService,
  ) {
    this.isNotSubGroup = (this.data.parentGroup === null);
    if (this.isNotSubGroup) {
      translate.get('DIALOGS.CREATE_GROUP.TITLE').subscribe(value => this.title = value);
    } else {
      translate.get('DIALOGS.CREATE_GROUP.TITLE_SUB_GROUP').subscribe(value => {
        this.title = value + this.data.parentGroup.name;
      });
    }
  }

  isNotSubGroup: boolean;

  name = '';
  description = '';

  title: string;

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.isNotSubGroup) {
      this.groupService.createGroup(this.data.voId, this.name, this.description).subscribe(group => {
        this.dialogRef.close();
      });
    } else {
      this.groupService.createSubGroup(this.data.parentGroup.id, this.name, this.description).subscribe(group => {
        this.dialogRef.close();
      });
    }
  }
}



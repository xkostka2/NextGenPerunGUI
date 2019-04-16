import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Group} from '../../../../core/models/Group';
import {GroupService} from '../../../../core/services/group.service';

export interface CreateGroupDialogData {
  parentGroup: Group[];
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
    private groupService: GroupService
  ) { }

  name = '';
  description = '';

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.data);
    if (this.data.parentGroup === null || this.data.parentGroup === undefined) {
      this.groupService.createGroup(this.data.voId, this.name, this.description).subscribe(group => {
        console.log(group);

        this.dialogRef.close();
      });
    }
  }
}



import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ResourcesService} from '../../../../core/services/api/resources.service';

export interface CreateResourceTagDialogDialogData {
  voId: number;
}

@Component({
  selector: 'app-create-resource-tag-dialog',
  templateUrl: './create-resource-tag-dialog.component.html',
  styleUrls: ['./create-resource-tag-dialog.component.scss']
})
export class CreateResourceTagDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateResourceTagDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: CreateResourceTagDialogDialogData,
              private resourceService: ResourcesService) { }

  name = '';

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    if (this.name !== '') {
      this.resourceService.createResourceTag(this.name, this.data.voId).subscribe( () => {
        this.dialogRef.close(true);
      });
    }

  }
}

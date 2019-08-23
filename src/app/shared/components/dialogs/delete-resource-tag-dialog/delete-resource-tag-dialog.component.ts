import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {ResourcesService} from '../../../../core/services/api/resources.service';
import {ResourceTag} from '../../../../core/models/ResourceTag';

export interface DeleteResourceTagDialogDialogData {
  voId: number;
  tagsForDelete: ResourceTag[];
}

@Component({
  selector: 'app-delete-resource-tag-dialog',
  templateUrl: './delete-resource-tag-dialog.component.html',
  styleUrls: ['./delete-resource-tag-dialog.component.scss']
})
export class DeleteResourceTagDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteResourceTagDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: DeleteResourceTagDialogDialogData,
              private resourceService: ResourcesService) { }

  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<ResourceTag>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data.tagsForDelete);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    for (const resourceTag of this.data.tagsForDelete) {
      this.resourceService.deleteResourceTag(resourceTag).subscribe( () => {
        this.dialogRef.close(true);
      }, error => this.dialogRef.close(true));
    }
  }

}

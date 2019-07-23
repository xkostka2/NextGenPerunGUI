import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';
import {ResourcesService} from '../../../../core/services/api/resources.service';
import {RichResource} from '../../../../core/models/RichResource';

export interface RemoveResourceDialogData {
  facilityId: number;
  resources: RichResource[];
}

@Component({
  selector: 'app-remove-resource-dialog',
  templateUrl: './remove-resource-dialog.component.html',
  styleUrls: ['./remove-resource-dialog.component.scss']
})
export class RemoveResourceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveResourceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: RemoveResourceDialogData,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private resourcesService: ResourcesService) { }

  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<RichResource>;
  loading = false;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<RichResource>(this.data.resources);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    // TODO Removes only one resource at the time. In future there would be need to remove more than one resource.
    this.loading = true;
    this.resourcesService.removeResource(this.data.resources[0].id).subscribe( () => {
      this.translate.get('DIALOGS.REMOVE_RESOURCES.SUCCESS').subscribe(successMessage => {
        this.loading = false;
        this.notificator.showSuccess(successMessage);
        this.dialogRef.close(true);
      });
    });
  }

}

import {Component, Inject, OnInit} from '@angular/core';
import {ApplicationMail} from '../../../../core/models/ApplicationMail';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';
import {RegistrarService} from '../../../../core/services/api/registrar.service';

export interface DeleteApplicationFormMailDialogData {
  voId: number;
  groupId: number;
  mails: ApplicationMail[];
}

@Component({
  selector: 'app-delete-notification-dialog',
  templateUrl: './delete-notification-dialog.component.html',
  styleUrls: ['./delete-notification-dialog.component.scss']
})
export class DeleteNotificationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteNotificationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DeleteApplicationFormMailDialogData,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private registrarService: RegistrarService) { }

  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<ApplicationMail>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ApplicationMail>(this.data.mails);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    if (this.data.groupId) {
      for (const mail of this.data.mails) {
        this.registrarService.deleteApplicationMailForGroup(this.data.groupId, mail.id).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    } else {
      for (const mail of this.data.mails) {
        this.registrarService.deleteApplicationMailForVo(this.data.voId, mail.id).subscribe( () => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  getMailType(applicationMail: ApplicationMail): string {
    let value = '';
    if (applicationMail.mailType === undefined || applicationMail.mailType === null || applicationMail.mailType === '') {
      value = '';
    } else {
      this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.MAIL_TYPE_' + applicationMail.mailType).subscribe( text => {
        value = text;
      });
    }
    return value;
  }
}

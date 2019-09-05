import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VoService} from '../../../../../core/services/api/vo.service';
import {Vo} from '../../../../../core/models/Vo';
import {RegistrarService} from '../../../../../core/services/api/registrar.service';
import {ApplicationForm} from '../../../../../core/models/ApplicationForm';
import {ApplicationMail} from '../../../../../core/models/ApplicationMail';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {TranslateService} from '@ngx-translate/core';
import {
  DeleteNotificationDialogComponent
} from '../../../../../shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component';
import {NotificatorService} from '../../../../../core/services/common/notificator.service';
import {
  EditEmailFooterDialogComponent
} from '../../../../../shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component';
import {
  AddEditNotificationDialogComponent
} from '../../../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component';
import {
  NotificationsCopyMailsDialogComponent
} from '../../../../../shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component';

@Component({
  selector: 'app-vo-settings-notifications',
  templateUrl: './vo-settings-notifications.component.html',
  styleUrls: ['./vo-settings-notifications.component.scss']
})
export class VoSettingsNotificationsComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(private route: ActivatedRoute,
              private vosService: VoService,
              private registrarService: RegistrarService,
              private translate: TranslateService,
              private dialog: MatDialog,
              private notificator: NotificatorService) { }

  loading = false;
  vo: Vo;
  applicationForm: ApplicationForm;
  applicationMails: ApplicationMail[] = [];
  selection = new SelectionModel<ApplicationMail>(true, []);

  displayedColumns: string[] = ['select', 'id', 'mailType', 'appType', 'send'];
  dataSource: MatTableDataSource<ApplicationMail>;

  ngOnInit() {
    this.loading = true;
    this.route.parent.parent.params.subscribe(params => {
      const voId = params['voId'];
      this.vosService.getVoById(voId).subscribe( vo => {
        this.vo = vo;
        this.registrarService.getApplicationForm(voId).subscribe( form => {
          this.applicationForm = form;
          this.registrarService.getApplicationMails(voId).subscribe( mails => {
            this.applicationMails = mails;
            this.dataSource = new MatTableDataSource<ApplicationMail>(this.applicationMails);
            this.loading = false;
          });
        });
      });
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: ApplicationMail): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  openApplicationMailDetail(applicationMail: ApplicationMail) {
    const dialog = this.dialog.open(AddEditNotificationDialogComponent, {
      width: '1400px',
      height: '700px',
      data: {voId: this.vo.id, createMailNotification: false, applicationMail: applicationMail}
    });
    dialog.afterClosed().subscribe( success => {
      if (success) {
        this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.EDIT_SUCCESS').subscribe( text => {
          this.notificator.showSuccess(text);
        });
        this.selection.clear();
        this.updateTable();
      }
    });
  }

  add() {
    const applicationMail: ApplicationMail = new ApplicationMail();
    applicationMail.formId = this.applicationForm.id;
    const dialog = this.dialog.open(AddEditNotificationDialogComponent, {
      width: '1400px',
      height: '700px',
      data: {voId: this.vo.id, createMailNotification: true, applicationMail: applicationMail, applicationMails: this.applicationMails}
    });
    dialog.afterClosed().subscribe( success => {
      if (success) {
        this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.ADD_SUCCESS').subscribe( text => {
          this.notificator.showSuccess(text);
        });
        this.selection.clear();
        this.updateTable();
      }
    });
  }

  remove() {
    const dialog = this.dialog.open(DeleteNotificationDialogComponent, {
      width: '500px',
      data: {voId: this.vo.id, mails: this.selection.selected}
    });
    dialog.afterClosed().subscribe( success => {
      if (success) {
        this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.DELETE_SUCCESS').subscribe( text => {
          this.notificator.showSuccess(text);
        });
        this.selection.clear();
        this.updateTable();
      }
    });
  }

  copy() {
    const dialog = this.dialog.open(NotificationsCopyMailsDialogComponent, {
      width: '500px',
      data: {voId: this.vo.id}
    });
    dialog.afterClosed().subscribe( copyFrom => {
      if (copyFrom) {
        this.updateTable();
      }
    });
  }

  changeSending(applicationMail: ApplicationMail) {
    if (applicationMail.send) {
      this.registrarService.setSendingEnabled(0, [applicationMail]).subscribe( () => {
        applicationMail.send = false;
      });
    } else {
      this.registrarService.setSendingEnabled(1, [applicationMail]).subscribe( () => {
        applicationMail.send = true;
      });
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

  updateTable() {
    this.loading = true;
    this.registrarService.getApplicationMails(this.vo.id).subscribe( mails => {
      this.applicationMails = mails;
      this.dataSource = new MatTableDataSource<ApplicationMail>(this.applicationMails);
      this.loading = false;
    });
  }

  changeEmailFooter() {
    this.dialog.open(EditEmailFooterDialogComponent, {
      width: '500px',
      data: {voId: this.vo.id}
    });
  }
}

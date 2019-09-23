import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AttributesService} from '../../../../core/services/api/attributes.service';
import {Attribute} from '../../../../core/models/Attribute';
import {TranslateService} from '@ngx-translate/core';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {Urns} from '../../../urns';

export interface ApplicationFormEmailFooterDialogData {
  voId: number;
  groupId: number;
}

@Component({
  selector: 'app-edit-email-footer-dialog',
  templateUrl: './edit-email-footer-dialog.component.html',
  styleUrls: ['./edit-email-footer-dialog.component.scss']
})
export class EditEmailFooterDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditEmailFooterDialogComponent>,
              private attributesService: AttributesService,
              private translateService: TranslateService,
              private notificator: NotificatorService,
              @Inject(MAT_DIALOG_DATA) public data: ApplicationFormEmailFooterDialogData) { }

  mailFooter = '';
  mailAttribute: Attribute;

  ngOnInit() {
    this.data.groupId ? this.getFooterForGroup() : this.getFooterForVo();
  }

  submit() {
    this.mailAttribute.value = this.mailFooter;
    if (this.data.groupId) {
      this.attributesService.setAttributes(this.data.groupId, 'group', [this.mailAttribute]).subscribe( () => {
        this.notificateSuccess();
      });
    } else {
      this.attributesService.setAttributes(this.data.voId, 'vo', [this.mailAttribute]).subscribe( () => {
        this.notificateSuccess();
      });
    }
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

  getFooterForVo() {
    this.attributesService.getAttributes(this.data.voId,
      'vo',
      [Urns.VO_DEF_MAIL_FOOTER]).subscribe( footer => {
      this.mailAttribute = footer[0];
      if (footer[0].value) {
        this.mailFooter = footer[0].value;
      } else {
        this.mailFooter = '';
      }
    });
  }

  getFooterForGroup() {
    this.attributesService.getAttributes(this.data.groupId,
      'group',
      [Urns.GROUP_DEF_MAIL_FOOTER]).subscribe( footer => {

      this.mailAttribute = footer[0];
      if (footer[0].value) {
        this.mailFooter = footer[0].value;
      } else {
        this.mailFooter = '';
      }

    });
  }

  notificateSuccess() {
    this.translateService.get('DIALOGS.NOTIFICATIONS_EDIT_FOOTER.SUCCESS').subscribe( text => {
      this.notificator.showSuccess(text);
    });
  }
}

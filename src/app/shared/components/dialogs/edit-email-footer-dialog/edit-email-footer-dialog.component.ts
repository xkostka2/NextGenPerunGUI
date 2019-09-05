import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AttributesService} from '../../../../core/services/api/attributes.service';
import {Attribute} from '../../../../core/models/Attribute';
import {TranslateService} from '@ngx-translate/core';
import {NotificatorService} from '../../../../core/services/common/notificator.service';

export interface ApplicationFormEmailFooterDialogData {
  voId: number;
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
    this.attributesService.getAttributes(this.data.voId, ['urn:perun:vo:attribute-def:def:mailFooter']).subscribe( footer => {
      this.mailAttribute = footer[0];
      if (footer[0].value) {
        this.mailFooter = footer[0].value;
      } else {
        this.mailFooter = '';
      }
    });
  }

  submit() {
    this.mailAttribute.value = this.mailFooter;
    this.attributesService.setAttributesToVo(this.data.voId, [this.mailAttribute]).subscribe( () => {
      this.translateService.get('DIALOGS.NOTIFICATIONS_EDIT_FOOTER.SUCCESS').subscribe( text => {
        this.notificator.showSuccess(text);
      });
    });
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}

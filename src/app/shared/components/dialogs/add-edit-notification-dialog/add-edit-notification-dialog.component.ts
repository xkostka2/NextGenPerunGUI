import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ApplicationMail} from '../../../../core/models/ApplicationMail';
import {openClose, tagsOpenClose} from '../../../animations/Animations';
import {RegistrarService} from '../../../../core/services/api/registrar.service';

export interface ApplicationFormAddEditMailDialogData {
  voId: number;
  groupId: number;
  createMailNotification: boolean;
  applicationMail: ApplicationMail;
  applicationMails: ApplicationMail[];
}

@Component({
  selector: 'app-add-edit-notification-dialog',
  templateUrl: './add-edit-notification-dialog.component.html',
  styleUrls: ['./add-edit-notification-dialog.component.scss'],
  animations: [
    tagsOpenClose,
    openClose
  ]
})
export class AddEditNotificationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddEditNotificationDialogComponent>,
              private registrarService: RegistrarService,
              @Inject(MAT_DIALOG_DATA) public data: ApplicationFormAddEditMailDialogData) { }

  applicationMail: ApplicationMail;
  tagsAvailable = false;
  isTextFocused = true;
  invalidNotification = false;
  language = 'en';

  ngOnInit() {
    this.applicationMail = this.data.applicationMail;
  }

  cancel() {
    this.dialogRef.close();
  }

  create(enInput, enTextarea, csInput, csTextarea) {
    this.notificationExist();
    if (this.invalidNotification) {
      return;
    }
    this.copyTexts(enInput, enTextarea, csInput, csTextarea);
    if (this.data.groupId) {
      this.registrarService.addApplicationMailForGroup(this.data.groupId, this.applicationMail).subscribe( () => {
        this.dialogRef.close(true);
      });
    } else {
      this.registrarService.addApplicationMailForVo(this.data.voId, this.applicationMail).subscribe( () => {
        this.dialogRef.close(true);
      });
    }
  }

  save(enInput, enTextarea, csInput, csTextarea) {
    this.copyTexts(enInput, enTextarea, csInput, csTextarea);
    this.registrarService.updateApplicationMail(this.applicationMail).subscribe( () => {
      this.dialogRef.close(true);
    });
  }

  changeTagsAvailability() {
    this.tagsAvailable = !this.tagsAvailable;
  }

  addTag(input: HTMLInputElement, textarea: HTMLTextAreaElement, tag: string) {
    let place: any;
    if (!this.isTextFocused) {
      place = input;
    } else {
      place = textarea;
    }
    const position: number = place.selectionStart;
    place.setRangeText(tag);
    place.focus();
    place.setSelectionRange(position + tag.length, position + tag.length);
  }

  notificationExist() {
    for (const mail of this.data.applicationMails) {
      if (mail.mailType === this.applicationMail.mailType && mail.appType === this.applicationMail.appType) {
        this.invalidNotification =  true;
        return;
      }
    }
    this.invalidNotification =  false;
  }

  copyTexts(enInput: any, enTextarea: any, csInput: any, csTextarea: any) {
    this.applicationMail.message['en'].subject = enInput.value;
    this.applicationMail.message['en'].text = enTextarea.value;
    this.applicationMail.message['cs'].subject = csInput.value;
    this.applicationMail.message['cs'].text = csTextarea.value;
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrarService} from '../../../../core/services/api/registrar.service';
import {TranslateService} from '@ngx-translate/core';


export interface InviteMemberDialogData {
  voId: number;
}

@Component({
  selector: 'app-invite-member-dialog',
  templateUrl: './invite-member-dialog.component.html',
  styleUrls: ['./invite-member-dialog.component.scss']
})
export class InviteMemberDialogComponent implements OnInit {

  emailForm = new FormControl('', [Validators.required, Validators.email]);
  language = 'en';
  name = '';

  constructor(public dialogRef: MatDialogRef<InviteMemberDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: InviteMemberDialogData,
              private registrarService: RegistrarService,
              private snackBar: MatSnackBar,
              private translate: TranslateService) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.emailForm.invalid || this.name === '') {
      return;
    } else {
      this.registrarService.sendInvitation(this.data.voId, this.name, this.emailForm.value, this.language).subscribe(() => {
        this.translate.get('DIALOGS.INVITE_MEMBER.SUCCESS').subscribe(successMessage => {
          this.snackBar.open(successMessage, null, {duration: 5000});
          this.dialogRef.close();
        });
      });
    }
  }

}

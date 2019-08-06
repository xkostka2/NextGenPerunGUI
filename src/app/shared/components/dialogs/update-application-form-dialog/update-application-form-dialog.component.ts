import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RegistrarService} from '../../../../core/services/api/registrar.service';
import {ApplicationForm} from '../../../../core/models/ApplicationForm';

@Component({
  selector: 'app-update-application-form-dialog',
  templateUrl: './update-application-form-dialog.component.html',
  styleUrls: ['./update-application-form-dialog.component.scss']
})
export class UpdateApplicationFormDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UpdateApplicationFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data,
              private registrarService: RegistrarService) { }

  applicationForm: ApplicationForm;
  moduleName: string;
  initialState: string;
  extensionState: string;

  ngOnInit() {
    this.applicationForm = this.data.applicationForm;
    this.moduleName = this.applicationForm.moduleClassName;
    this.initialState = this.applicationForm.automaticApproval ? 'auto' : 'manual';
    this.extensionState = this.applicationForm.automaticApprovalExtension ? 'auto' : 'manual';
  }

  onCancel() {
    this.dialogRef.close();
  }

  submit() {
    this.applicationForm.moduleClassName = this.moduleName;
    this.applicationForm.automaticApproval = this.initialState === 'auto';
    this.applicationForm.automaticApprovalExtension = this.extensionState === 'auto';
    this.registrarService.updateForm(this.applicationForm).subscribe( updatedForm => {
      this.dialogRef.close(updatedForm);
    });
  }
}

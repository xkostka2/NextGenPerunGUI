import {Component, Inject, OnInit} from '@angular/core';
import {RichMember} from '../../../../core/models/RichMember';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {MembersService} from '../../../../core/services/api/members.service';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';

export interface RemoveMembersDialogData {
  members: RichMember[];
}
@Component({
  selector: 'app-remove-members-dialog',
  templateUrl: './remove-members-dialog.component.html',
  styleUrls: ['./remove-members-dialog.component.scss']
})
export class RemoveMembersDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveMembersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RemoveMembersDialogData,
    private membersService: MembersService,
    private notificator: NotificatorService,
    private translate: TranslateService
  ) { }

  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<RichMember>;

  loading: boolean;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<RichMember>(this.data.members);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    this.loading = true;
    this.membersService.deleteMembers(this.data.members.map(m => m.id)).subscribe(() => {
      this.translate.get('DIALOGS.REMOVE_MEMBERS.SUCCESS').subscribe(successMessage => {
        this.notificator.showSuccess(successMessage);
        this.dialogRef.close(true);
        this.loading = false;
      });
    }, () => {
      this.loading = false;
    });
  }
}

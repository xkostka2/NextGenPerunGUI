import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MembersService} from '../../../../core/services/api/members.service';
import {VoService} from '../../../../core/services/api/vo.service';
import {MemberCandidate} from '../../../../core/models/MemberCandidate';
import {RegistrarService} from '../../../../core/services/api/registrar.service';

export interface AddMemberDialogData {
  voId: number;
  theme: string;
}

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AddMemberDialogData,
    private memberService: MembersService,
    private voService: VoService,
    private registrarService: RegistrarService,
    private translate: TranslateService,
    private notificator: NotificatorService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    translate.get('DIALOGS.ADD_MEMBERS.TITLE').subscribe(value => this.title = value);
    translate.get('DIALOGS.ADD_MEMBERS.SUCCESS').subscribe(value => this.successMessage = value);
    translate.get('DIALOGS.ADD_MEMBERS.SUCCESS_INVITE').subscribe(value => this.successInviteMessage = value);

  }

  title: string;
  searchString = '';
  successMessage: string;
  successInviteMessage: string;

  selection = new SelectionModel<MemberCandidate>(false, []);
  loading: boolean;
  processing: boolean;
  members: MemberCandidate[] = [];

  firstSearchDone = false;

  theme: string;

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.processing = true;
    // TODO Adds only one member at the time. In the future there would be need to add more
    this.memberService.addMember(this.data.voId, this.selection.selected[0].richUser.id).subscribe(() => {
      this.translate.get('DIALOGS.ADD_MEMBERS.SUCCESS').subscribe(() => {
        this.notificator.showSuccess(this.successMessage);
        this.dialogRef.close();
        this.processing = false;
      });
    });
  }

  onInvite(): void {
    // TODO Was not tested properly. Need to be tested on devel.
   this.registrarService.sendInvitationToExistingUser(this.selection.selected[0].richUser.id, this.data.voId).subscribe(() => {
      this.translate.get('DIALOGS.ADD_MEMBERS.SUCCESS_INVITE').subscribe(() => {
        this.notificator.showSuccess(this.successInviteMessage);
        this.dialogRef.close();
     });
    });
  }

  onSearchByString() {
    this.loading = true;

    this.selection.clear();

    // TODO properly test it on devel when possible.
    this.voService.getCompleteCandidates(this.data.voId, ['name'], this.searchString).subscribe(
      members => {
        this.members = members;
        this.loading = false;
        this.firstSearchDone = true;
      },
      () => this.loading = false
    );
  }

  ngOnInit(): void {
    this.theme = this.data.theme;
  }

}

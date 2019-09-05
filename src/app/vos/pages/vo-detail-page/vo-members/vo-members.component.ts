import {Component, HostBinding, OnInit} from '@angular/core';
import {Vo} from '../../../../core/models/Vo';
import {RichMember} from '../../../../core/models/RichMember';
import {MembersService} from '../../../../core/services/api/members.service';
import {SideMenuService} from '../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../core/services/api/vo.service';
import {ActivatedRoute} from '@angular/router';
import {Urns} from '../../../../shared/urns';
import {SelectionModel} from '@angular/cdk/collections';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from '@angular/material';
import {RemoveMembersDialogComponent} from '../../../../shared/components/dialogs/remove-members-dialog/remove-members-dialog.component';
import {AddMemberDialogComponent} from '../../../../shared/components/dialogs/add-member-dialog/add-member-dialog.component';

@Component({
  selector: 'app-vo-members',
  templateUrl: './vo-members.component.html',
  styleUrls: ['./vo-members.component.scss']
})
export class VoMembersComponent implements OnInit {

  static id = 'VoMembersComponent';

  @HostBinding('class.router-component') true;

  constructor(
    private membersService: MembersService,
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private route: ActivatedRoute,
    private notificator: NotificatorService,
    private translate: TranslateService,
    private dialog: MatDialog
  ) { }

  vo: Vo;

  members: RichMember[] = null;

  selection = new SelectionModel<RichMember>(true, []);
  searchString = '';
  firstSearchDone = false;

  loading = false;

  private attrNames = [
    Urns.MEMBER_DEF_ORGANIZATION,
    Urns.MEMBER_DEF_MAIL,
    Urns.USER_DEF_ORGANIZATION,
    Urns.USER_DEF_PREFERRED_MAIL
  ];

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;
      });
    });
  }

  onSearchByString() {
    this.loading = true;
    this.firstSearchDone = true;

    this.selection.clear();

    this.membersService.findCompleteRichMembers(this.vo.id, this.searchString, this.attrNames).subscribe(
      members => {
        this.members = members;
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  onListAll() {
    this.loading = true;
    this.firstSearchDone = true;

    this.selection.clear();

    this.membersService.getCompleteRichMembers(this.vo.id, this.attrNames).subscribe(
      members => {
        this.members = members;
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  onAddMember() {
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      width: '1000px',
      data: {voId: this.vo.id, theme: 'vo-theme'}
    });

    dialogRef.afterClosed().subscribe(() => {
      if (this.firstSearchDone) {
        this.refreshTable();
      }
    });
  }

  onKeyInput(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.searchString.length > 0) {
      this.onSearchByString();
    }
  }

  onRemoveMembers() {
    const dialogRef = this.dialog.open(RemoveMembersDialogComponent, {
      width: '450px',
      data: {members: this.selection.selected}
    });

    dialogRef.afterClosed().subscribe(wereMembersDeleted => {
      if (wereMembersDeleted) {
        this.refreshTable();
      }
    });
  }

  refreshTable() {
    if (this.searchString.trim().length > 0) {
      this.onSearchByString();
    } else {
      this.onListAll();
    }
  }
}

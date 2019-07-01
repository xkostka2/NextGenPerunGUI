import {Component, OnInit} from '@angular/core';
import {RichMember} from '../../../core/models/RichMember';
import {MembersService} from '../../../core/services/api/members.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../../core/services/api/group.service';
import {Group} from '../../../core/models/Group';
import {Urns} from '../../../shared/urns';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.scss']
})
export class GroupMembersComponent implements OnInit {

  constructor(private membersService: MembersService,
              private groupService: GroupService,
              protected route: ActivatedRoute,
              protected router: Router,
              private dialog: MatDialog) { }

  group: Group;

  members: RichMember[] = null;
  selection: SelectionModel<RichMember>;

  searchString = '';
  firstSearchDone = false;

  loading = false;

  ngOnInit() {
    this.selection = new SelectionModel<RichMember>(true, []);
    this.route.parent.params.subscribe(parentParams => {
      const groupId = parentParams['groupId'];

      this.groupService.getGroupById(groupId).subscribe(group => {
        this.group = group;
      });
    });
  }

  onSearchByString() {
    this.loading = true;
    this.firstSearchDone = true;

    this.selection.clear();

    const attrNames = [
      Urns.MEMBER_DEF_ORGANIZATION,
      Urns.MEMBER_DEF_MAIL,
      Urns.USER_DEF_ORGANIZATION,
      Urns.USER_DEF_PREFERRED_MAIL
    ];

    this.membersService.findCompleteRichMembersForGroup(this.group.id, this.searchString, attrNames).subscribe(
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

    const attrNames = [
      Urns.MEMBER_DEF_ORGANIZATION,
      Urns.USER_DEF_ORGANIZATION,
      Urns.USER_DEF_PREFERRED_MAIL,
      Urns.MEMBER_DEF_MAIL
    ];

    this.membersService.getCompleteRichMembersForGroup(this.group.id, attrNames).subscribe(
      members => {
        this.members = members;
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  onAddMember() {

  }

  onKeyInput(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.searchString.length > 0) {
      this.onSearchByString();
    }
  }

  onRemoveMembers() {
  }
}

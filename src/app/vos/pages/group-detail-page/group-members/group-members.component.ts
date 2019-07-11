import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MembersService} from '../../../../core/services/api/members.service';
import {GroupService} from '../../../../core/services/api/group.service';
import {Group} from '../../../../core/models/Group';
import {RichMember} from '../../../../core/models/RichMember';
import {Urns} from '../../../../shared/urns';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.scss']
})
export class GroupMembersComponent implements OnInit {

  // used for router animation
  @HostBinding('class.router-component') true;

  constructor(private membersService: MembersService,
              private groupService: GroupService,
              protected route: ActivatedRoute,
              protected router: Router) { }

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

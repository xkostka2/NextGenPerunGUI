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

  static id = 'GroupMembersComponent';

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
  data: 'search' | 'all';

  private attrNames = [
    Urns.MEMBER_DEF_ORGANIZATION,
    Urns.MEMBER_DEF_MAIL,
    Urns.USER_DEF_ORGANIZATION,
    Urns.USER_DEF_PREFERRED_MAIL
  ];

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
    this.data = 'search';
    this.firstSearchDone = true;

    this.refreshTable();
  }

  onListAll() {
    this.data = 'all';
    this.firstSearchDone = true;

   this.refreshTable();
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

  refreshTable() {
    this.loading = true;
    this.selection.clear();
    switch (this.data) {
      case 'all': {
        this.membersService.getCompleteRichMembersForGroup(this.group.id, this.attrNames).subscribe(
          members => {
            this.members = members;
            this.loading = false;
          },
          () => this.loading = false
        );
        break;
      }
      case 'search': {
        this.membersService.findCompleteRichMembersForGroup(this.group.id, this.searchString, this.attrNames).subscribe(
          members => {
            this.members = members;
            this.loading = false;
          },
          () => this.loading = false
        );
        break;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {RichMember} from '../../../core/models/RichMember';
import {MembersService} from '../../../core/services/api/members.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../../core/services/api/group.service';
import {Group} from '../../../core/models/Group';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.scss']
})
export class GroupMembersComponent implements OnInit {

  constructor(private membersService: MembersService,
              private groupService: GroupService,
              protected route: ActivatedRoute,
              protected router: Router) { }

  group: Group;

  members: RichMember[] = null;

  searchString = '';
  firstSearchDone = false;

  loading = false;

  ngOnInit() {
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

    this.membersService.findCompleteRichMembersForGroup(this.group.id, this.searchString).subscribe(
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

    this.membersService.getCompleteRichMembersForGroup(this.group.id).subscribe(
      members => {
        this.members = members;
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  onAddMember() {

  }

  foo(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.searchString.length > 0) {
      this.onSearchByString();
    }
  }

}

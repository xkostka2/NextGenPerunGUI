import {Component, Input, OnInit} from '@angular/core';
import {RichMember} from '../../../core/models/RichMember';
import {GroupService} from '../../../core/services/group.service';
import {Group} from '../../../core/models/Group';

@Component({
  selector: 'app-member-groups-tab',
  templateUrl: './member-groups-tab.component.html',
  styleUrls: ['./member-groups-tab.component.scss']
})
export class MemberGroupsTabComponent implements OnInit {

  constructor(
    private groupsService: GroupService
  ) { }

  @Input()
  member: RichMember;

  groups: Group[];

  ngOnInit() {
    this.groupsService.getMemberGroups(this.member.id).subscribe(groups => {
      this.groups = groups;
      console.log(groups);
    });
  }
}

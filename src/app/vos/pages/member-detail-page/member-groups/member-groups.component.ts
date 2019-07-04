import {Component, Input, OnInit} from '@angular/core';
import {RichMember} from '../../../../core/models/RichMember';
import {GroupService} from '../../../../core/services/api/group.service';
import {Group} from '../../../../core/models/Group';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member-groups',
  templateUrl: './member-groups.component.html',
  styleUrls: ['./member-groups.component.scss']
})
export class MemberGroupsComponent implements OnInit {

  constructor(
    private groupsService: GroupService,
    private route: ActivatedRoute
  ) { }

  groups: Group[];

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const memberId = parentParams['memberId'];

      this.groupsService.getMemberGroups(memberId).subscribe(groups => {
        this.groups = groups;
      });
    });
  }
}

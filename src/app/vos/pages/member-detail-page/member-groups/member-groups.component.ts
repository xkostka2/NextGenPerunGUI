import {Component, HostBinding, OnInit} from '@angular/core';
import {GroupService} from '../../../../core/services/api/group.service';
import {Group} from '../../../../core/models/Group';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member-groups',
  templateUrl: './member-groups.component.html',
  styleUrls: ['./member-groups.component.scss']
})
export class MemberGroupsComponent implements OnInit {

  // used for router animation
  @HostBinding('class.router-component') true;

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

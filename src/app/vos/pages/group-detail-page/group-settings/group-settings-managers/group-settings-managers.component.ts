import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../../../../../core/models/Group';
import {Role} from '../../../../../core/models/PerunPrincipal';
import {GroupService} from '../../../../../core/services/api/group.service';

@Component({
  selector: 'app-group-settings-managers',
  templateUrl: './group-settings-managers.component.html',
  styleUrls: ['./group-settings-managers.component.scss']
})
export class GroupSettingsManagersComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) { }

  group: Group;

  availableRoles: Role[] = [ Role.GROUPADMIN ];

  selected = 'user';

  type = 'Group';

  theme = 'group-theme';

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParentParams => {
      const groupId = parentParentParams ['groupId'];

      this.groupService.getGroupById(groupId).subscribe(group => {
        this.group = group;
      });
    });
  }
}

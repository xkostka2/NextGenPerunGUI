import {Component, Input, OnInit} from '@angular/core';
import {Vo} from '../../../core/models/Vo';
import {GroupSelectChange} from '../../groups-list/groups-list.component';
import {Group} from '../../../core/models/Group';
import {MatDialog} from '@angular/material';
import {CreateGroupDialogComponent} from '../../../shared/components/dialogs/create-group-dialog/create-group-dialog.component';
import {GroupService} from '../../../core/services/group.service';

@Component({
  selector: 'app-vo-groups-tab',
  templateUrl: './vo-groups-tab.component.html',
  styleUrls: ['./vo-groups-tab.component.scss']
})
export class VoGroupsTabComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private groupService: GroupService
  ) { }

  @Input()
  vo: Vo;

  groups: Group[] = [];

  selectedGroups: Set<Group> = new Set<Group>();

  showTreeStructure = false;

  onCreateGroup() {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
      width: '350px',
      data: {voId: this.vo.id}
    });

    dialogRef.afterClosed().subscribe(value => {
      console.log(value);
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.groupService.getAllGroups(this.vo.id).subscribe(groups => {
      this.groups = groups;
    });
  }

  onGroupSelectChange(event: GroupSelectChange) {
    if (event.checked) {
      this.selectedGroups.add(event.group);
    } else {
      this.selectedGroups.delete(event.group);
    }
    console.log(this.selectedGroups);
  }
}

import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatCheckboxChange, MatSort, MatTableDataSource} from '@angular/material';
import {Group} from '../../core/models/Group';
import {GroupService} from '../../core/services/group.service';

export declare class GroupSelectChange {
  group: Group;
  checked: boolean;
}

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  constructor(
    private groupService: GroupService
  ) { }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  voId: number;

  @Output()
  groupSelectChange: EventEmitter<GroupSelectChange> = new EventEmitter<GroupSelectChange>();

  private sort: MatSort;

  displayedColumns: string[] = ['checkbox', 'id', 'name'];
  dataSource: MatTableDataSource<Group>;
  groups: Group[] = [];

  ngOnInit() {
    this.groupService.getAllGroups(this.voId).subscribe(groups => {
      this.groups = groups;
      this.dataSource = new MatTableDataSource<Group>(groups);
    });
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  onGroupSelected(event: MatCheckboxChange, group: Group) {
    console.log('Emitted');
    this.groupSelectChange.emit({group: group, checked: event.checked});
  }
}


import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Group} from '../../core/models/Group';
import {GroupService} from '../../core/services/group.service';

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

  private sort: MatSort;

  displayedColumns: string[] = ['id', 'name'];
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
}

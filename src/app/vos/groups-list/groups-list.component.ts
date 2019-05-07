import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatCheckboxChange, MatSort, MatTableDataSource} from '@angular/material';
import {Group} from '../../core/models/Group';

export declare class GroupSelectChange {
  group: Group;
  checked: boolean;
}

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnChanges {

  constructor() { }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  groups: Group[] = [];

  @Output()
  groupSelectChange: EventEmitter<GroupSelectChange> = new EventEmitter<GroupSelectChange>();

  private sort: MatSort;

  @Input()
  hideColumns: string[] = [];

  displayedColumns: string[] = ['checkbox', 'id', 'name'];
  dataSource: MatTableDataSource<Group>;

  ngOnChanges(changes: SimpleChanges) {
    this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
    this.dataSource = new MatTableDataSource<Group>(this.groups);
    this.setDataSource();
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  onGroupSelected(event: MatCheckboxChange, group: Group) {
    this.groupSelectChange.emit({group: group, checked: event.checked});
  }
}


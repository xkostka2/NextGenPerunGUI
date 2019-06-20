import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {RichUser} from '../../../core/models/RichUser';
import {MatSort, MatTableDataSource} from '@angular/material';
import {getRichUserAttribute, parseFullName} from '../../../shared/utils';
import {Urns} from '../../../shared/urns';
import {SelectionModel} from '@angular/cdk/collections';

export interface ManagerSelectChange {
  manager: RichUser;
  checked: boolean;
}

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.scss']
})
export class ManagersListComponent implements OnChanges {

  constructor() { }

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  managers: RichUser[];

  private sort: MatSort;

  @Input()
  searchString: string;

  @Input()
  selection = new SelectionModel<RichUser>(true, []);

  @Output()
  managerSelectChange: EventEmitter<ManagerSelectChange> = new EventEmitter<ManagerSelectChange>();

  displayedColumns: string[] = ['select', 'id', 'name', 'organization', 'email'];

  dataSource: MatTableDataSource<RichUser>;

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'name':
            return this.parseFullName(item);
          case 'email':
            return this.getPreferredMail(item);
          case 'organization':
            return this.getManagerOrganization(item);
          default:
            return item[property];
        }
      };
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<RichUser>(this.managers);
    this.setDataSource();
  }

  parseFullName(manager: RichUser): string {
    return parseFullName(manager);
  }

  getManagerOrganization(manager: RichUser): string {
    return getRichUserAttribute(manager, Urns.USER_DEF_ORGANIZATION).value;
  }

  getPreferredMail(manager: RichUser) {
    return getRichUserAttribute(manager, Urns.USER_DEF_PREFERRED_MAIL).value;
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: RichUser): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

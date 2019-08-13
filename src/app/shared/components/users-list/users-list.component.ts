import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {RichUser} from '../../../core/models/RichUser';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {getRichUserAttribute, parseFullName} from '../../utils';
import {Urns} from '../../urns';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnChanges {

  constructor() { }

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @Input()
  users: RichUser[];

  private sort: MatSort;

  @Input()
  searchString: string;

  @Input()
  hideColumns: string[] = [];

  @Input()
  selection = new SelectionModel<RichUser>(true, []);

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
            return this.getUserOrganization(item);
          default:
            return item[property];
        }
      };
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
    this.dataSource = new MatTableDataSource<RichUser>(this.users);
    this.dataSource.paginator = this.paginator;
    this.setDataSource();
  }

  parseFullName(user: RichUser): string {
    return parseFullName(user);
  }

  getUserOrganization(user: RichUser): string {
    const res = getRichUserAttribute(user, Urns.USER_DEF_ORGANIZATION);
    return res === null ? '' : res.value;
  }

  getPreferredMail(user: RichUser) {
    return getRichUserAttribute(user, Urns.USER_DEF_PREFERRED_MAIL).value;
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

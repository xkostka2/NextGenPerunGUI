import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {RichMember} from '../../../core/models/RichMember';
import {parseEmail, parseFullName} from '../../../shared/utils';
import {MatPaginator} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnChanges, AfterViewInit {

  constructor(
  ) { }

  private sort: MatSort;

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @Input()
  members: RichMember[];

  @Input()
  searchString: string;

  @Input()
  selection: SelectionModel<RichMember>;

  @Input()
  hideColumns: string[] = [];

  displayedColumns: string[] = ['checkbox', 'id', 'fullName', 'status', 'groupStatus', 'email'];
  dataSource: MatTableDataSource<RichMember>;

  setDataSource() {
    this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;

      this.dataSource.sortingDataAccessor = (richMember, property) => {
        switch (property) {
          case 'fullName':
            return parseFullName(richMember.user);
          case 'email':
            return parseEmail(richMember);
          default:
            return richMember[property];
        }
      };

      this.dataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
    this.dataSource = new MatTableDataSource<RichMember>(this.members);
    this.setDataSource();
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

  checkboxLabel(row?: RichMember): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

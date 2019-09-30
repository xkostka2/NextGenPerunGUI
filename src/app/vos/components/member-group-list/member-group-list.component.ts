import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Group} from '../../../core/models/Group';
import {SelectionModel} from '@angular/cdk/collections';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member-group-list',
  templateUrl: './member-group-list.component.html',
  styleUrls: ['./member-group-list.component.scss']
})
export class MemberGroupListComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  memberId: number;

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @Input()
  groups: Group[] = [];

  @Input()
  filterValue: string;

  @Input()
  selection = new SelectionModel<Group>(true, []);

  private sort: MatSort;

  displayedColumns: string[] = ['select', 'id', 'name'];
  dataSource: MatTableDataSource<Group>;


  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Group>(this.groups);
    this.setDataSource();
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter = this.filterValue;
    }
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

  checkboxLabel(row?: Group): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  ngOnInit(): void {
    this.route.parent.params.subscribe(parentParams => this.memberId = parentParams['memberId']);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}

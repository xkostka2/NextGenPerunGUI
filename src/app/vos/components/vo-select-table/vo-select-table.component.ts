import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {Vo} from '../../../core/models/Vo';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-vo-select-table',
  templateUrl: './vo-select-table.component.html',
  styleUrls: ['./vo-select-table.component.scss']
})
export class VoSelectTableComponent implements OnChanges, AfterViewInit {

  constructor() { }

  @Input()
  vos: Vo[] = [];

  @Input()
  recentIds: number[];

  @Input()
  filterValue: string;

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  private sort: MatSort;

  displayedColumns: string[] = ['id', 'recent', 'name'];
  dataSource: MatTableDataSource<Vo>;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Vo>(this.vos);
    this.setDataSource();
    this.dataSource.filter = this.filterValue;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }
}

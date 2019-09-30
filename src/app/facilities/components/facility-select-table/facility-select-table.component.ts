import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RichFacility} from '../../../core/models/RichFacility';
import {parseTechnicalOwnersNames} from '../../../shared/utils';

@Component({
  selector: 'app-facility-select-table',
  templateUrl: './facility-select-table.component.html',
  styleUrls: ['./facility-select-table.component.scss']
})
export class FacilitySelectTableComponent implements AfterViewInit, OnChanges {
  constructor() { }

  @Input()
  facilities: RichFacility[];

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

  displayedColumns: string[] = ['id', 'recent', 'name', 'description', 'technicalOwners'];
  dataSource: MatTableDataSource<RichFacility>;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<RichFacility>(this.facilities);
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
      this.dataSource.filterPredicate = ((data, filter) => {
        const lowerCaseFilter = filter.trim().toLowerCase();
        if (data.name.trim().toLowerCase().indexOf(lowerCaseFilter) !== -1) {
          return true;
        }
        if (data.description !== null && data.description.trim().toLowerCase().indexOf(lowerCaseFilter) !== -1) {
          return true;
        }
        if (data.id.toString(10).startsWith(filter)) {
          return true;
        }
        return parseTechnicalOwnersNames(data.facilityOwners).toLowerCase().indexOf(lowerCaseFilter) !== -1;
      });
    }
  }
}

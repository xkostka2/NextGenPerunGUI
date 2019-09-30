import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../../core/services/api/facility.service';
import {RichFacility} from '../../../core/models/RichFacility';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import {getRecentlyVisited, getRecentlyVisitedIds} from '../../../shared/utils';

@Component({
  selector: 'app-facility-select-page',
  templateUrl: './facility-select-page.component.html',
  styleUrls: ['./facility-select-page.component.scss']
})
export class FacilitySelectPageComponent implements OnInit {

  constructor(
    private facilityService: FacilityService,
    private sideMenuService: SideMenuService
  ) { }

  facilities: RichFacility[] = [];
  recentIds: number[] = [];
  loading: boolean;
  filterValue = '';

  ngOnInit() {
    this.sideMenuService.setFacilityMenuItems([]);

    this.refreshTable();
  }

  refreshTable() {
    this.loading = true;
    this.facilityService.getRichFacilities().subscribe(facilities => {
      this.facilities = getRecentlyVisited('facilities', facilities);
      this.recentIds = getRecentlyVisitedIds('facilities');
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }
}

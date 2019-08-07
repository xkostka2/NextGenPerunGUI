import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../../core/services/api/facility.service';
import {RichFacility} from '../../../core/models/RichFacility';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import {getRecentlyVisited} from '../../../shared/utils';

@Component({
  selector: 'app-facility-select-page',
  templateUrl: './facility-select-page.component.html',
  styleUrls: ['./facility-select-page.component.scss']
})
export class FacilitySelectPageComponent implements OnInit {

  constructor(
    private facilityService: FacilityService,
    private sideMenuService: SideMenuService,
  ) { }

  facilities: RichFacility[] = [];

  ngOnInit() {
    this.sideMenuService.setFacilityMenuItems([]);

    this.facilityService.getRichFacilities().subscribe(facilities => {
      this.facilities = getRecentlyVisited('facilities', facilities);
    });
  }
}

import {Component, HostBinding, OnInit} from '@angular/core';
import {FacilityService} from '../../../../core/services/api/facility.service';
import {ActivatedRoute} from '@angular/router';
import {MenuItem} from '../../../../shared/models/MenuItem';
import {Facility} from '../../../../core/models/Facility';

@Component({
  selector: 'app-facility-overview',
  templateUrl: './facility-overview.component.html',
  styleUrls: ['./facility-overview.component.scss']
})
export class FacilityOverviewComponent implements OnInit {

  // class used for animation
  @HostBinding('class.router-component') true;

  constructor(
    private facilityService: FacilityService,
    private route: ActivatedRoute,
  ) { }

  navItems: MenuItem[] = [];
  facility: Facility;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const facilityId = params['facilityId'];

      this.facilityService.getFacilityById(facilityId).subscribe(facility => {
        this.facility = facility;

        this.initItems();
      });
    });
  }

  private initItems() {
    this.navItems = [
      {
        icon: 'manage_facility_white.svg',
        url: `/facilities/${this.facility.id}/resources`,
        label: 'MENU_ITEMS.FACILITY.RESOURCES',
        style: 'facility-btn'
      },
      {
        icon: 'group-white.svg',
        url: `/facilities/${this.facility.id}/allowed-groups`,
        label: 'MENU_ITEMS.FACILITY.ALLOWED_GROUPS',
        style: 'facility-btn'
      },
      {
        icon: 'settings2-white.svg',
        url: `/facilities/${this.facility.id}/settings`,
        label: 'MENU_ITEMS.FACILITY.SETTINGS',
        style: 'facility-btn'
      }
    ];
  }
}

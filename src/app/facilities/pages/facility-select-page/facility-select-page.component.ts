import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../../core/services/api/facility.service';
import {RichFacility} from '../../../core/models/RichFacility';

@Component({
  selector: 'app-facility-select-page',
  templateUrl: './facility-select-page.component.html',
  styleUrls: ['./facility-select-page.component.scss']
})
export class FacilitySelectPageComponent implements OnInit {

  constructor(
    private facilityService: FacilityService
  ) { }

  facilities: RichFacility[] = [];

  ngOnInit() {
    this.facilityService.getRichFacilities().subscribe(facilities => this.facilities = facilities);
  }
}

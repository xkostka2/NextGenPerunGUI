import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Facility} from '../../models/Facility';
import {Resource} from '../../models/Resource';
import {Group} from '../../models/Group';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(
    private apiService: ApiService
  ) { }

  getFacilitiesByDestination (destination: string): Observable<Facility[]> {
    return this.apiService.post('json/facilitiesManager/getFacilitiesByDestination', {
      'destination': destination
    });
  }

  getAssignedResources(facility: number): Observable<Resource[]> {
    return this.apiService.post('json/facilitiesManager/getAssignedResources', {
      'facility': facility
    });
  }

  getAllowedGroups(facility: number, vo: number): Observable<Group[]> {
    return this.apiService.post('json/facilitiesManager/getAllowedGroups', {
      'facility': facility,
      'vo': vo
    });
  }
}

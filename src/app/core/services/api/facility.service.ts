import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Facility} from '../../models/Facility';
import {Resource} from '../../models/Resource';
import {Group} from '../../models/Group';
import {RichFacility} from '../../models/RichFacility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(
    private apiService: ApiService
  ) { }

  getFacilityById(id: number): Observable<Facility> {
    return this.apiService.post('json/facilitiesManager/getFacilityById', {
      'id': id
    });
  }

  getFacilitiesByDestination(destination: string): Observable<Facility[]> {
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

  getFacilities(): Observable<Facility[]> {
    return this.apiService.get('json/facilitiesManager/getFacilities');
  }

  getRichFacilities(): Observable<RichFacility[]> {
    return this.apiService.get('json/facilitiesManager/getRichFacilities');
  }
}

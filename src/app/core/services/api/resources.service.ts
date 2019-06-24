import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RichResource} from '../../models/RichResource';
import {ApiService} from './api.service';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getResourcesByVo(id: number, showNotificationOnError = true): Observable<RichResource[]> {
    return this.apiService.get(`json/resourcesManager/getRichResources?vo=${id}`, new HttpParams(), showNotificationOnError);
  }

  getResourcesByGroup(id: number, showNotificationOnError = true): Observable<RichResource[]> {
    return this.apiService.get(`json/resourcesManager/getAssignedRichResources?group=${id}`, new HttpParams(), showNotificationOnError);
  }
}

import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {ResourceState} from '../../models/ResourceState';

@Injectable({
  providedIn: 'root'
})
export class PropagationStatsReaderService {

  constructor(
    private apiService: ApiService
  ) {}

  getAllResourcesState(voId: number, showNotificationOnError = true): Observable<ResourceState[]> {
    return this.apiService.post('json/propagationStatsReader/getAllResourcesState',
      {
        'voId': voId
      }, showNotificationOnError);
  }
}

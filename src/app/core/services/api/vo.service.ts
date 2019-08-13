import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Vo} from '../../models/Vo';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllVos(showNotificationOnError = true): Observable<Vo[]> {
    return this.apiService.get('json/vosManager/getAllVos', new HttpParams(), showNotificationOnError);
  }

  getVos(showNotificationOnError = true): Observable<Vo[]> {
    return this.apiService.get('json/vosManager/getVos', new HttpParams(), showNotificationOnError);
  }

  getVoById(id: number, showNotificationOnError = true): Observable<Vo> {
    return this.apiService.get(`json/vosManager/getVoById?id=${id}`, new HttpParams(), showNotificationOnError);
  }
}

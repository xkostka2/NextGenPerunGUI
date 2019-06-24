import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {PerunPrincipal} from '../../models/PerunPrincipal';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthzService {

  constructor(
    private apiService: ApiService
  ) { }

  getPerunPrincipal(showNotificationOnError = true): Observable<PerunPrincipal> {
    return this.apiService.get('json/authzResolver/getPerunPrincipal', new HttpParams(), showNotificationOnError);
  }
}

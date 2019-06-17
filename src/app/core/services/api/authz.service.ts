import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {PerunPrincipal} from '../../models/PerunPrincipal';

@Injectable({
  providedIn: 'root'
})
export class AuthzService {

  constructor(
    private apiService: ApiService
  ) { }

  getPerunPrincipal(): Observable<PerunPrincipal> {
    return this.apiService.get('json/authzResolver/getPerunPrincipal');
  }
}

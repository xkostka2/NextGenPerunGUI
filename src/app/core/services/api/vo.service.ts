import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Vo} from '../../models/Vo';

@Injectable({
  providedIn: 'root'
})
export class VoService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllVos(): Observable<Vo[]> {
    return this.apiService.get('json/vosManager/getAllVos');
  }

  getVoById(id: number): Observable<Vo> {
    return this.apiService.get(`json/vosManager/getVoById?id=${id}`);
  }
}

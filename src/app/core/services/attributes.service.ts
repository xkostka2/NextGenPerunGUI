import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Attribute} from '../models/Attribute';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(
    private apiService: ApiService
  ) { }

  getMemberAttribute(memberId: number, urn: string): Observable<Attribute> {
    return this.apiService.get(`json/attributesManager/getAttribute?member=${memberId}&attributeName=${urn}`);
  }

  getVoAttribute(voId: number, urn: string): Observable<Attribute> {
    return this.apiService.get(`json/attributesManager/getAttribute?vo=${voId}&attributeName=${urn}`);
  }
}

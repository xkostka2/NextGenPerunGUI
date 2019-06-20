import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Vo} from '../../models/Vo';
import {RichUser} from '../../models/RichUser';
import {parseUrnsToUrlParam} from '../../../shared/utils';

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

  getDirectRichAdminsWithSpecificAttributes(voId: number, attributes: string[]): Observable<RichUser[]> {
    const attributesParam = parseUrnsToUrlParam('specificAttributes', attributes);
    return this.apiService.get(`json/vosManager/getDirectRichAdminsWithSpecificAttributes?vo=${voId}${attributesParam}`);
  }
}

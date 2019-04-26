import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private apiService: ApiService) { }

  sendInvitation(voId: number, name: string, email: string, language: string ): Observable<void> {
    return this.apiService.post('json/registrarManager/sendInvitation', {
      'voId': voId,
      'name': name,
      'email': email,
      'language': language});
  }
}

import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Application} from '../../models/Application';
import {ApplicationFormItemData} from '../../models/ApplicationFormItemData';

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

  getApplicationsForVo(voId: number): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForVo', {
      'vo': voId
    });
  }

  getApplicationsForVoWithState(voId: number, state: string[]): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForVo', {
      'vo': voId,
      'state': state
    });
  }

  getApplicationsForGroup(groupId: number): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
      'group': groupId
    });
  }

  getApplicationsForGroupWithState(groupId: number, state: string[]): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
      'group': groupId,
      'state': state
    });
  }

  getApplicationById(applicationId: number): Observable<Application> {
    return this.apiService.post('json/registrarManager/getApplicationById', {
      'id': applicationId
    });
  }

  getApplicationDataById(applicationId: number): Observable<ApplicationFormItemData[]> {
    return this.apiService.post('json/registrarManager/getApplicationDataById', {
      'id': applicationId
    });
  }

  verifyApplication(applicationId: number): Observable<Application> {
    return this.apiService.post('json/registrarManager/verifyApplication', {
      'id': applicationId
    });
  }

  approveApplication(applicationId: number): Observable<Application> {
    return this.apiService.post('json/registrarManager/approveApplication', {
      'id': applicationId
    });
  }

  rejectApplication(applicationId: number, reason: string): Observable<Application> {
    return this.apiService.post('json/registrarManager/rejectApplication', {
      'id': applicationId,
      'reason': reason
    });
  }

  deleteApplication(applicationId: number): Observable<Application> {
    return this.apiService.post('json/registrarManager/deleteApplication', {
      'id': applicationId
    });
  }

  sendMessage(applicationId: number, mailType: string) {
    return this.apiService.post('json/registrarManager/sendMessage', {
      'appId': applicationId,
      'mailType': mailType
    });
  }

  sendMessageWithReason(applicationId: number, mailType: string, reason: string) {
    return this.apiService.post('json/registrarManager/sendMessage', {
      'appId': applicationId,
      'mailType': mailType,
      'reason': reason
    });
  }
}

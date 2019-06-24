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

  sendInvitation(voId: number, name: string, email: string, language: string, showNotificationOnError = true): Observable<void> {
    return this.apiService.post('json/registrarManager/sendInvitation', {
      'voId': voId,
      'name': name,
      'email': email,
      'language': language}, showNotificationOnError);
  }

  getApplicationsForVo(voId: number, showNotificationOnError = true): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForVo', {
      'vo': voId
    }, showNotificationOnError);
  }

  getApplicationsForVoWithState(voId: number, state: string[], showNotificationOnError = true): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForVo', {
      'vo': voId,
      'state': state
    }, showNotificationOnError);
  }

  getApplicationsForGroup(groupId: number, showNotificationOnError = true): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
      'group': groupId
    }, showNotificationOnError);
  }

  getApplicationsForGroupWithState(groupId: number, state: string[], showNotificationOnError = true): Observable<Application[]> {
    return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
      'group': groupId,
      'state': state
    }, showNotificationOnError);
  }

  getApplicationById(applicationId: number, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/getApplicationById', {
      'id': applicationId
    }, showNotificationOnError);
  }

  getApplicationDataById(applicationId: number, showNotificationOnError = true): Observable<ApplicationFormItemData[]> {
    return this.apiService.post('json/registrarManager/getApplicationDataById', {
      'id': applicationId
    }, showNotificationOnError);
  }

  verifyApplication(applicationId: number, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/verifyApplication', {
      'id': applicationId
    }, showNotificationOnError);
  }

  approveApplication(applicationId: number, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/approveApplication', {
      'id': applicationId
    }, showNotificationOnError);
  }

  rejectApplication(applicationId: number, reason: string, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/rejectApplication', {
      'id': applicationId,
      'reason': reason
    }, showNotificationOnError);
  }

  deleteApplication(applicationId: number, showNotificationOnError = true): Observable<Application> {
    return this.apiService.post('json/registrarManager/deleteApplication', {
      'id': applicationId
    }, showNotificationOnError);
  }

  sendMessage(applicationId: number, mailType: string, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/sendMessage', {
      'appId': applicationId,
      'mailType': mailType
    }, showNotificationOnError);
  }

  sendMessageWithReason(applicationId: number, mailType: string, reason: string, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/sendMessage', {
      'appId': applicationId,
      'mailType': mailType,
      'reason': reason
    }, showNotificationOnError);
  }
}

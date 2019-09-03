import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Application} from '../../models/Application';
import {ApplicationFormItemData} from '../../models/ApplicationFormItemData';
import {ApplicationForm} from '../../models/ApplicationForm';
import {ApplicationFormItem} from '../../models/ApplicationFormItem';
import {ApplicationMail} from '../../models/ApplicationMail';

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

  sendInvitationToExistingUser(userId: number, voId: number, showNotificationOnError = true): Observable<void> {
    return this.apiService.post('json/registrarManager/sendInvitation', {
      voId: voId,
      userId: userId
    }, showNotificationOnError);
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

  getApplicationForm(voId: number, showNotificationOnError = true): Observable<ApplicationForm> {
    return this.apiService.post('json/registrarManager/getApplicationForm', {
      'vo': voId
    }, showNotificationOnError);
  }

  getFormItems(voId: number, showNotificationOnError = true): Observable<ApplicationFormItem[]> {
    return this.apiService.post('json/registrarManager/getFormItems', {
      'vo': voId
    }, showNotificationOnError);
  }

  updateFormItems(voId: number, items: ApplicationFormItem[], showNotificationOnError = true): Observable<number> {
    return this.apiService.post('json/registrarManager/updateFormItems', {
      'items': items,
      'vo': voId
    }, showNotificationOnError);
  }

  updateForm(applicationItem: ApplicationForm, showNotificationOnError = true): Observable<ApplicationForm> {
    return this.apiService.post('json/registrarManager/updateForm', {
      'form': applicationItem
    }, showNotificationOnError);
  }

  copyFormFromVoToVo(fromVo: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyForm', {
      'fromVo': fromVo,
      'toVo': toVo
    }, showNotificationOnError);
  }

  copyFormFromGroupToVo(fromGroup: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyForm', {
      'fromGroup': fromGroup,
      'toVo': toVo
    }, showNotificationOnError);
  }

  getApplicationMails(vo: number, showNotificationOnError = true): Observable<ApplicationMail[]> {
    return this.apiService.post('json/registrarManager/getApplicationMails', {
      'vo': vo
    }, showNotificationOnError);
  }

  setSendingEnabled(enabled: number, applicationMails: ApplicationMail[], showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/setSendingEnabled', {
      'enabled': enabled,
      'mails': applicationMails
    }, showNotificationOnError);
  }

  copyMailsFromGroupToVo(fromGroup: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromGroup': fromGroup,
      'toVo': toVo
    }, showNotificationOnError);
  }

  copyMailsFromVoToVo(fromVo: number, toVo: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/copyMails', {
      'fromVo': fromVo,
      'toVo': toVo
    }, showNotificationOnError);
  }

  deleteApplicationMail(vo: number, id: number, showNotificationOnError = true) {
    return this.apiService.post('json/registrarManager/deleteApplicationMail', {
      'vo': vo,
      'id': id
    }, showNotificationOnError);
  }
}

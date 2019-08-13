import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {PerunPrincipal} from '../../models/PerunPrincipal';
import {HttpParams} from '@angular/common/http';
import {RichUser} from '../../models/RichUser';
import {Group} from '../../models/Group';

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

  getRichAdmins(role: string, complementaryObjectId: number, complementaryObjectName: string, attributes: string[],
                allUserAttributes = false, onlyDirectAdmins = true, showNotificationOnError = true): Observable<RichUser[]> {
    return this.apiService
      .post(`json/authzResolver/getRichAdmins`,
        {
          role: role,
          complementaryObjectId: complementaryObjectId,
          complementaryObjectName: complementaryObjectName,
          specificAttributes: attributes,
          allUserAttributes: allUserAttributes,
          onlyDirectAdmins: onlyDirectAdmins
        }, showNotificationOnError);
  }

  getManagerGroups( role: string, complementaryObjectId: number, complementaryObjectName: string,
                    showNotificationOnError = true): Observable<Group[]> {
    return this.apiService.post(`json/authzResolver/getAdminGroups`, {
      role: role,
      complementaryObjectId: complementaryObjectId,
      complementaryObjectName: complementaryObjectName
    }, showNotificationOnError);
  }

  removeManager(role: string, userId: number, complementaryObject: Object, showNotificationOnError = true): Observable<RichUser[]> {
    return this.apiService.post('json/authzResolver/unsetRole', {
      role: role,
      user: userId,
      complementaryObject: complementaryObject
    }, showNotificationOnError);
  }

  addManager(role: string, userId: number, complementaryObject: Object, showNotificationOnError = true): Observable<RichUser> {
    return this.apiService.post('json/authzResolver/setRole', {
      role: role,
      user: userId,
      complementaryObject: complementaryObject
    }, showNotificationOnError);
  }

  removeGroup(role: string, groupId: number, complementaryObject: Object, showNotificationOnError = true): Observable<RichUser[]> {
    return this.apiService.post('json/authzResolver/unsetRole', {
      role: role,
      authorizedGroup: groupId,
      complementaryObject: complementaryObject
    }, showNotificationOnError);
  }

  addGroup(role: string, groupId: number, complementaryObject: Object, showNotificationOnError = true): Observable<RichUser> {
    return this.apiService.post('json/authzResolver/setRole', {
      role: role,
      authorizedGroup: groupId,
      complementaryObject: complementaryObject
    }, showNotificationOnError);
  }
}

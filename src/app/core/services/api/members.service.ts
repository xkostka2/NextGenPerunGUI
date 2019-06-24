import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {RichMember} from '../../models/RichMember';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private apiService: ApiService
  ) { }

  findCompleteRichMembers(voId: number, searchString: string): Observable<RichMember[]> {
    // TODO consider new API method
    // tslint:disable-next-line:max-line-length
    return this.apiService.get(`json/membersManager/findCompleteRichMembers?vo=${voId}&searchString=${searchString}&attrsNames%5B%5D=urn:perun:member:attribute-def:def:organization&attrsNames%5B%5D=urn:perun:user:attribute-def:def:organization&attrsNames%5B%5D=urn:perun:user:attribute-def:def:preferredMail&attrsNames%5B%5D=urn:perun:member:attribute-def:def:mail&allowedStatuses%5B%5D=VALID&allowedStatuses%5B%5D=INVALID&allowedStatuses%5B%5D=SUSPENDED&allowedStatuses%5B%5D=EXPIRED&allowedStatuses%5B%5D=DISABLED`);
  }

  getCompleteRichMembers(voId: number): Observable<RichMember[]> {
    // TODO consider new API method
    // tslint:disable-next-line:max-line-length
    return this.apiService.get(`json/membersManager/getCompleteRichMembers?vo=${voId}&attrsNames%5B%5D=urn:perun:member:attribute-def:def:organization&attrsNames%5B%5D=urn:perun:user:attribute-def:def:organization&attrsNames%5B%5D=urn:perun:user:attribute-def:def:preferredMail&attrsNames%5B%5D=urn:perun:member:attribute-def:def:mail&allowedStatuses%5B%5D=VALID&allowedStatuses%5B%5D=INVALID&allowedStatuses%5B%5D=SUSPENDED`);
  }

  getRichMemberWithAttributes(memberId: number): Observable<RichMember> {
    return this.apiService.get(`json/membersManager/getRichMemberWithAttributes?id=${memberId}`);
  }

  findCompleteRichMembersForGroup(groupId: number, searchString: string): Observable<RichMember[]> {
    return this.apiService.post('json/membersManager/findCompleteRichMembers', {
      'group' : groupId,
      'attrsNames' : ['urn:perun:member:attribute-def:def:organization', 'urn:perun:user:attribute-def:def:organization',
                        'urn:perun:user:attribute-def:def:preferredMail', 'urn:perun:member:attribute-def:def:mail'] ,
      'allowedStatuses' : ['INVALID', 'SUSPENDED', 'EXPIRED', 'VALID', 'DISABLED'] ,
      'searchString' : searchString,
      'lookingInParentGroup' : false
      }
    );
  }

  getCompleteRichMembersForGroup(groupId: number): Observable<RichMember[]> {
    return this.apiService.post('json/membersManager/getCompleteRichMembers', {
        'group' : groupId,
        'attrsNames' : ['urn:perun:member:attribute-def:def:organization', 'urn:perun:user:attribute-def:def:organization',
          'urn:perun:user:attribute-def:def:preferredMail', 'urn:perun:member:attribute-def:def:mail'] ,
        'allowedStatuses' : ['INVALID', 'SUSPENDED', 'VALID'] ,
        'lookingInParentGroup' : false
      }
    );
  }
}

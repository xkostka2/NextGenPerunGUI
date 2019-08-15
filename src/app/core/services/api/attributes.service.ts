import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Attribute} from '../../models/Attribute';
import {AttributeDefinition} from '../../models/AttributeDefinition';
import {Graph} from '../../models/Graph';
import {HttpParams} from '@angular/common/http';

export type Entity = 'vo' | 'group' | 'user' | 'member' | 'facility' | 'resource';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getMemberAttribute(memberId: number, urn: string, showNotificationOnError = true): Observable<Attribute> {
    return this.apiService.get(`json/attributesManager/getAttribute?member=${memberId}&attributeName=${urn}`,
      new HttpParams(), showNotificationOnError);
  }

  getVoAttribute(voId: number, urn: string, showNotificationOnError = true): Observable<Attribute> {
    return this.apiService.get(`json/attributesManager/getAttribute?vo=${voId}&attributeName=${urn}`,
      new HttpParams(), showNotificationOnError);
  }

  setVoAttribute(voId: number, attribute: Attribute, showNotificationOnError = true): Observable<void> {
    return this.apiService.post(`json/attributesManager/setAttribute`, {
      vo: voId,
      attribute: attribute
    }, showNotificationOnError);
  }

  getAttributeModulesDependenciesGraphText(format: string, showNotificationOnError = true): Observable<Graph> {
    return this.apiService.get(`json/attributesManager/getAttributeModulesDependenciesGraphText?format=${format}`,
      new HttpParams(), showNotificationOnError);
  }

  getAttributesDefinition(showNotificationOnError = true): Observable<AttributeDefinition[]> {
    return this.apiService.get('json/attributesManager/getAttributesDefinition',
      new HttpParams(), showNotificationOnError);
  }

  getAllAttributes(entityId: number, entity: Entity, showNotificationOnError = true): Observable<Attribute[]> {
    return this.apiService.get(`json/attributesManager/getAttributes?${entity}=${entityId}`, new HttpParams(), showNotificationOnError);
  }

  deleteAttributes(entityId: number, entity: Entity, attributeIDs: number[], showNotificationOnError = true) {
    const payload = {};
    payload[entity] = entityId;
    payload['attributes'] = attributeIDs;

    return this.apiService.post('json/attributesManager/removeAttributes', payload, showNotificationOnError);
  }

  getAttributeDefinitions(voId: number, entity: string, showNotificationOnError = true): Observable<AttributeDefinition[]> {
    return this.apiService.get(`json/attributesManager/getAttributesDefinitionWithRights?${entity}=${voId}`,
      new HttpParams(), showNotificationOnError);
  }

  setAttributes(entityId: number, entity: Entity, attributes: Attribute[], showNotificationOnError = true): Observable<number> {
    const payload = {};
    payload[entity] = entityId;
    payload['attributes'] = attributes;

    return this.apiService.post('json/attributesManager/setAttributes', payload);
  }
}


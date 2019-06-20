import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {RichUser} from '../../models/RichUser';
import {parseUrnsToUrlParam} from '../../../shared/utils';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private apiService: ApiService
  ) { }

  findRichUsersWithAttributes(searchString: string, attributes: string[]): Observable<RichUser[]> {
    const attrParam = parseUrnsToUrlParam('attrsNames', attributes);
    return this.apiService.get(`json/usersManager/findRichUsersWithAttributes?searchString=${searchString}${attrParam}`);
  }

  getUserById(userId: number): Observable<User> {
    return this.apiService.get(`json/usersManager/getUserById?id=${userId}`);
  }
}

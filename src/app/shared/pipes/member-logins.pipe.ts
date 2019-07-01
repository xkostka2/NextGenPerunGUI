import { Pipe, PipeTransform } from '@angular/core';
import {parseLogins} from '../utils';

@Pipe({
  name: 'memberLogins'
})
export class MemberLoginsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return parseLogins(value);
  }
}

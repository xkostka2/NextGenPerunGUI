import { Pipe, PipeTransform } from '@angular/core';
import {parseVoOrExtSource} from '../utils';

@Pipe({
  name: 'voOrExtSource'
})
export class VoOrExtSourcePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return parseVoOrExtSource(value);
  }

}

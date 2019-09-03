import { Pipe, PipeTransform } from '@angular/core';
import {parseEmail, parseUserEmail} from '../utils';
import {MemberCandidate} from '../../core/models/MemberCandidate';

@Pipe({
  name: 'memberCandidateEmail'
})
export class MemberCandidateEmailPipe implements PipeTransform {

  transform(value: MemberCandidate): any {
    return value.member ? parseEmail(value.member) : parseUserEmail(value.richUser);
  }

}

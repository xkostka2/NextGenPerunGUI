import {RichUser} from './RichUser';
import {Candidate} from './Candidate';
import {RichMember} from './RichMember';

export interface MemberCandidate {
  beanName: string;
  candidate: Candidate;
  member: RichMember;
  richUser: RichUser;
}

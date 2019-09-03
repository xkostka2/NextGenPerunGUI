import {UserExtSource} from './UserExtSource';

export interface Candidate {
  userExtSource: UserExtSource;
  attributes: Map<string, string>;
  additionalUserExtSource: UserExtSource[];
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  titleBefore: string;
  titleAfter: string;
  fullName: string;
  displayName: string;
  email: string;
  attribute: string;
  logins: string;
  objectType: string;
  status: string;
}

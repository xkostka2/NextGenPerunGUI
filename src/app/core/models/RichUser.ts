import {Attribute} from './Attribute';
import {UserExtSource} from './UserExtSource';

export interface RichUser {
  beanName: string;
  firstName: string;
  id: number;
  lastName: string;
  majorSpecificType: string;
  middleName: string;
  serviceUser: boolean;
  specificUser: boolean;
  sponsoredUser: boolean;
  titleAfter: string;
  titleBefore: string;
  userAttributes: Attribute[];
  userExtSources: UserExtSource[];
  createdAt: string;
  createdBy: string;
  createdByUid: number;
  modifiedAt: string;
  modifiedBy: string;
  modifiedByUid: number;
}

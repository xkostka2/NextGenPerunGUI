import {User} from './User';
import {Attribute} from './Attribute';
import {UserExtSource} from './UserExtSource';

export interface RichMember {
  id: number;
  beanName: string;
  createdAt: string;
  createdBy: string;
  createdByUid: number;
  groupStatus: string;
  memberAttributes: Attribute[];
  membershipType: string;
  modifiedAt: string;
  modifiedBy: string;
  modifiedByUid: number;
  sourceGroupId: number;
  sponsored: boolean;
  status: string;
  voId: number;
  user: User;
  userAttributes: Attribute[];
  userExtSources: UserExtSource[];
}

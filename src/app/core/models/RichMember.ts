import {User} from './User';

export interface RichMember {
  id: number;
  beanName: string;
  createdAt: string;
  createdBy: string;
  createdByUid: number;
  groupStatus: string;
  membershipType: string;
  modifiedAt: string;
  modifiedBy: string;
  modifiedByUid: number;
  sourceGroupId: number;
  sponsored: boolean;
  status: string;
  user: User;
}

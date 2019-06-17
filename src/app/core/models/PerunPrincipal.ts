import {User} from './User';

export interface PerunPrincipal {
  actor: string;
  additionalInformations: any;
  authzInitialized: boolean;
  extSourceLoa: number;
  extSourceName: string;
  extSourceType: string;
  roles: any;
  user: User;
  userId: number;
}

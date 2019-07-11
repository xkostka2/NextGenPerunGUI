import {User} from './User';

export interface PerunPrincipal {
  actor: string;
  additionalInformations: any;
  authzInitialized: boolean;
  extSourceLoa: number;
  extSourceName: string;
  extSourceType: string;
  roles: Map<Role, Map<string, number[]>>;
  user: User;
  userId: number;
}

export enum Role {
  PERUNADMIN = 'PERUNADMIN',
  VOADMIN = 'VOADMIN',
  GROUPADMIN = 'GROUPADMIN',
  SELF = 'SELF',
  FACILITYADMIN = 'FACILITYADMIN',
  RESOURCEADMIN = 'RESOURCEADMIN',
  RESOURCESELFSERVICE = 'RESOURCESELFSERVICE',
  REGISTRAR = 'REGISTRAR',
  ENGINE = 'ENGINE',
  RPC = 'RPC',
  NOTIFICATIONS = 'NOTIFICATIONS',
  SERVICEUSER = 'SERVICEUSER',
  SPONSOR = 'SPONSOR',
  VOOBSERVER = 'VOOBSERVER',
  TOPGROUPCREATOR = 'TOPGROUPCREATOR',
  SECURITYADMIN = 'SECURITYADMIN',
  CABINETADMIN = 'CABINETADMIN',
  UNKNOWNROLENAME = 'UNKNOWNROLENAME',
}

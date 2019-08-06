import {Vo} from './Vo';
import {Group} from './Group';

export interface ApplicationForm {
  automaticApproval: boolean;
  automaticApprovalExtension: boolean;
  beanName: string;
  group: Group;
  id: number;
  moduleClassName: string;
  vo: Vo;
}

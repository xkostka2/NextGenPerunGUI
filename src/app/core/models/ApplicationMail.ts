export interface Message {
  locale: string;
  subject: string;
  text: string;
}

export interface ApplicationMail {
  appType: string;
  beanName: string;
  formId: number;
  id: number;
  mailType: string;
  message: Map<string, Message>;
  locale: string;
  subject: string;
  text: string;
  send: boolean;
}

export class Message {
  locale: string;
  subject: string;
  text: string;

  constructor(locale: string) {
    this.locale = locale;
    this.subject = '';
    this.text = '';
  }
}

export class ApplicationMail {
  appType: string;
  beanName: string;
  formId: number;
  id: number;
  mailType: string;
  message: { [s: string]: Message; };
  locale: string;
  subject: string;
  text: string;
  send: boolean;

  constructor() {
    this.appType = 'INITIAL';
    this.formId = 0;
    this.mailType = 'APP_CREATED_USER';
    this.send = true;
    this.message = {};
    this.message['en'] = new Message('en');
    this.message['cs'] = new Message('cs');
  }
}

export class Language {
  errorMessage: string;
  help: string;
  label: string;
  locale: string;
  options: string;

  constructor() {
    this.errorMessage = '';
    this.help = '';
    this.label = '';
  }
}

export class ApplicationFormItem {
  applicationTypes: string[];
  beanName: string;
  federationAttribute: string;
  forDelete: boolean;
  i18n: Map<string, Language>;
  id: number;
  ordnum: number;
  perunDestinationAttribute: string;
  perunSourceAttribute: string;
  regex: string;
  required: boolean;
  shortname: string;
  type: string;

  constructor() {
    this.applicationTypes = ['INITIAL', 'EXTENSION'];
    this.federationAttribute = '';
    this.i18n = new Map<string, Language>();
    this.i18n.set('cs', new Language());
    this.i18n.set('en', new Language());
    this.id = 0;
    this.ordnum = 0;
    this.perunDestinationAttribute = null;
    this.perunSourceAttribute = null;
    this.regex = '';
    this.required = false;
    this.shortname = '';
    this.type = '';
  }
}

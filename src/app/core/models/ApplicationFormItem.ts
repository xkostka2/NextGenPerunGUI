export interface Language {
  errorMessage: string;
  help: string;
  label: string;
  locale: string;
  options: string;
}

export interface ApplicationFormItem {
  applicationTypes: string[];
  beanName: string;
  federationAttribute: string;
  forDelete: boolean;
  i18n: Map<string, Language>;
  id: number;
  ordnum: number;
  perunDestinationAttribute: string;
  regex: string;
  required: boolean;
  shortname: string;
  type: string;
}

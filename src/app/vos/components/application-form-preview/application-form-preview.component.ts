import {Component, HostBinding, OnInit} from '@angular/core';
import {ApplicationFormItem} from '../../../core/models/ApplicationFormItem';
import {ActivatedRoute} from '@angular/router';
import {RegistrarService} from '../../../core/services/api/registrar.service';

@Component({
  selector: 'app-application-form-preview',
  templateUrl: './application-form-preview.component.html',
  styleUrls: ['./application-form-preview.component.scss']
})
export class ApplicationFormPreviewComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(protected route: ActivatedRoute,
              private registrarService: RegistrarService) { }

  loading = true;
  applicationFormItems: ApplicationFormItem[] = [];
  language = 'en';
  initialPage = true;
  mapForCombobox: Map<number, string> = new Map();

  ngOnInit() {
    this.route.parent.parent.params.subscribe(params => {
      const voId = params['voId'];
      const groupId = params['groupId'];
      if (groupId) {
        this.registrarService.getFormItemsForGroup(groupId).subscribe( formItems => {
          this.applicationFormItems = formItems;
          this.loading = false;
        });
      } else {
        this.registrarService.getFormItemsForVo(voId).subscribe( formItems => {
          this.applicationFormItems = formItems;
          this.loading = false;
        });
      }
    });
  }

  switchToInitial() {
    this.initialPage = true;
  }

  switchToExtension() {
    this.initialPage = false;
  }

  switchToEnglish() {
    this.language = 'en';
  }

  switchToCzech() {
    this.language = 'cs';
  }

  getLocalizedOptions(applicationFormItem: ApplicationFormItem): string[] {
    if (applicationFormItem.i18n[this.language]) {
      const options = applicationFormItem.i18n[this.language].options;
      if (options !== null && options !== '') {
        const labels: string[] = [];
        for (const item of options.split('|')) {
          labels.push(item.split('#')[1]);
        }
        return labels;
      }
    }
    return [];
  }

  isChoosenType(applicationFormItem: ApplicationFormItem) {
    for (const type of applicationFormItem.applicationTypes) {
      if (type === 'INITIAL' && this.initialPage) {
        return true;
      }
      if (type === 'EXTENSION' && !this.initialPage) {
        return true;
      }
    }
    return false;
  }

  getLocalizedLabel(applicationFormItem: ApplicationFormItem): string {
    if (applicationFormItem.i18n[this.language]) {
      return applicationFormItem.i18n[this.language].label;
    }
    return applicationFormItem.shortname;
  }

  getLocalizedHint(applicationFormItem: ApplicationFormItem) {
    if (applicationFormItem.i18n[this.language]) {
      return applicationFormItem.i18n[this.language].help;
    }
    return '';
  }
}

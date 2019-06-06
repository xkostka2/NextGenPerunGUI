import {Component, OnInit} from '@angular/core';
import {openClose} from '../../../../shared/animations/Animations';
import {AttributesService} from '../../../../core/services/attributes.service';
import {ActivatedRoute} from '@angular/router';

export interface ExpirationConfiguration {
  enabled: boolean;
  periodType: 'static' | 'dynamic';
  periodStatic: string;
  periodDynamic: string;
  periodDynamicUnit: 'y' | 'd' | 'm';
  doNotAllowLoasEnabled: boolean;
  doNotAllowLoas: number[];
  doNotExtendLoasEnabled: boolean;
  doNotExtendLoas: number[];
  gracePeriodEnabled: boolean;
  gracePeriod: string;
  gracePeriodUnit: 'y' | 'd' | 'm';
  specialLoaPeriodEnabled: boolean;
  specialLoa: number;
  specialLoaPeriod: string;
  specialLoaPeriodType: 'static' | 'dynamic';
  specialLoaPeriodStatic: string;
  specialLoaPeriodDynamic: string;
  specialLoaPeriodDynamicUnit: 'y' | 'd' | 'm';
  specialLoaPeriodExtendExpiredMembers: boolean;
}

@Component({
  selector: 'app-vo-settings-expiration',
  templateUrl: './vo-settings-expiration.component.html',
  styleUrls: ['./vo-settings-expiration.component.scss'],
  animations: [
    openClose
  ]
})
export class VoSettingsExpirationComponent implements OnInit {

  constructor(
    private attributesService: AttributesService,
    private route: ActivatedRoute
  ) {
  }

  // attributes
  EXPIRATION_ATTR_URN = 'urn:perun:vo:attribute-def:def:membershipExpirationRules';

  initialConfiguration: ExpirationConfiguration;
  currentConfiguration: ExpirationConfiguration;

  LOAS = [0, 1, 2];

  // TODO translation
  amountOptions = [{
    value: 'd',
    text: 'Days'
  }, {
    value: 'm',
    text: 'Months'
  }, {
    value: 'y',
    text: 'Years'
  }];

  ngOnInit() {
    const loaPeriods = new Map();
    this.LOAS.forEach(loa => loaPeriods.set(loa, ''));

    this.route.parent.parent.params.subscribe(params => {
      const voId = params['voId'];

      this.attributesService.getVoAttribute(voId, this.EXPIRATION_ATTR_URN).subscribe(attr => {
        this.initialConfiguration = this.parseAttrValue(<ExpirationAttrValue>attr.value);
        this.currentConfiguration = this.parseAttrValue(<ExpirationAttrValue>attr.value);
      });
    });
  }

  areChangesMade(): boolean {
    if (this.currentConfiguration.enabled !== this.initialConfiguration.enabled) {
      return true;
    }
    if (this.currentConfiguration.doNotAllowLoas !== this.initialConfiguration.doNotAllowLoas) {
      return true;
    }
    if (this.currentConfiguration.doNotExtendLoas !== this.initialConfiguration.doNotExtendLoas) {
      return true;
    }

    // TODO finish
    return false;
  }

  saveChanges(): void {

  }

  createInitConfiguration(): ExpirationConfiguration {
    const loaPeriods = new Map();
    this.LOAS.forEach(loa => loaPeriods.set(loa, ''));

    return {
      enabled: false,
      periodType: null,
      periodStatic: '',
      periodDynamic: '',
      periodDynamicUnit: 'm',
      doNotAllowLoasEnabled: false,
      doNotAllowLoas: null,
      doNotExtendLoas: null,
      doNotExtendLoasEnabled: false,
      gracePeriodEnabled: false,
      gracePeriod: null,
      gracePeriodUnit: null,
      specialLoaPeriodEnabled: false,
      specialLoaPeriod: '',
      specialLoa: null,
      specialLoaPeriodType: null,
      specialLoaPeriodDynamic: '',
      specialLoaPeriodDynamicUnit: 'm',
      specialLoaPeriodStatic: '',
      specialLoaPeriodExtendExpiredMembers: false
    };
  }

  parseAttrValue(value: ExpirationAttrValue): ExpirationConfiguration {
    let config = this.createInitConfiguration();

    if (value == null) {
      return config;
    }

    if (value.period !== undefined && value.period.length > 0) {
      config = this.setPeriodValues(value, config);
    }

    if (value.doNotAllowLoa !== undefined && value.doNotAllowLoa.length > 0) {
      config = this.setDoNotAllowLoasValues(value, config);
    }

    if (value.doNotExtendLoa !== undefined && value.doNotExtendLoa.length > 0) {
      config = this.setDoNotExtendLoasValues(value, config);
    }

    if (value.gracePeriod !== undefined && value.gracePeriod.length > 0) {
      config = this.setGracePeriodValues(value, config);
    }

    if (value.periodLoa !== undefined && value.periodLoa.length > 0) {
      config = this.setSpecialLoaPeriodValues(value, config);
    }

    return config;
  }

  private setPeriodValues(value: ExpirationAttrValue, config: ExpirationConfiguration): ExpirationConfiguration {
    config.enabled = true;
    if (value.period.startsWith('+')) {
      config.periodType = 'dynamic';

      const unit = value.period.charAt(value.period.length - 1);
      config.periodDynamic = value.period.substring(1, value.period.length - 1);
      config.periodDynamicUnit = <'m'|'d'|'y'>unit;
    } else {
      config.periodType = 'static';

      config.periodStatic = value.period.replace('.', '/').replace('.', '');
    }
    return config;
  }

  private setDoNotAllowLoasValues(value: ExpirationAttrValue, config: ExpirationConfiguration): ExpirationConfiguration {
    const loas = [];
    value.doNotAllowLoa.split(',').forEach(l => loas.push(parseInt(l.trim(), 10)));
    config.doNotAllowLoas = loas;
    if (loas.length > 0) {
      config.doNotAllowLoasEnabled = true;
    }
    return config;
  }

  private setDoNotExtendLoasValues(value: ExpirationAttrValue, config: ExpirationConfiguration): ExpirationConfiguration {
    const loas = [];
    value.doNotExtendLoa.split(',').forEach(l => loas.push(parseInt(l.trim(), 10)));
    config.doNotExtendLoas = loas;
    if (loas.length > 0) {
      config.doNotExtendLoasEnabled = true;
    }
    return config;
  }

  private setGracePeriodValues(value: ExpirationAttrValue, config: ExpirationConfiguration): ExpirationConfiguration {
    config.gracePeriodEnabled = true;
    const unit = value.gracePeriod.charAt(value.gracePeriod.length - 1);
    config.gracePeriod = value.period.substring(0, value.gracePeriod.length - 1);
    config.gracePeriodUnit = <'m'|'d'|'y'>unit;
    return config;
  }

  private setSpecialLoaPeriodValues(value: ExpirationAttrValue, config: ExpirationConfiguration): ExpirationConfiguration {
    config.specialLoa = parseInt(value.periodLoa.substring(0, value.periodLoa.indexOf('|')), 10);
    config.specialLoaPeriodEnabled = true;

    let specialPeriodValue = value.periodLoa.substring(value.periodLoa.indexOf('|') + 1, value.periodLoa.length);

    if (specialPeriodValue.startsWith('+')) {
      config.specialLoaPeriodExtendExpiredMembers = specialPeriodValue.endsWith('.');
      specialPeriodValue = specialPeriodValue.substring(0, specialPeriodValue.length - 1);

      config.specialLoaPeriodType = 'dynamic';

      const unit = specialPeriodValue.charAt(specialPeriodValue.length - 1);
      config.specialLoaPeriodDynamic = specialPeriodValue.substring(1, specialPeriodValue.length - 1);
      config.specialLoaPeriodDynamicUnit = <'m'|'d'|'y'>unit;
    } else {
      config.specialLoaPeriodExtendExpiredMembers = specialPeriodValue.endsWith('..');
      specialPeriodValue = specialPeriodValue.substring(0, specialPeriodValue.length - 1);

      config.specialLoaPeriodType = 'static';

      config.specialLoaPeriodStatic = specialPeriodValue.replace('.', '/').replace('.', '');
    }

    return config;
  }
}

export class ExpirationAttrValue {
  doNotExtendLoa: string;
  doNotAllowLoa: string;
  gracePeriod: string;
  period: string;
  periodLoa: string;
}


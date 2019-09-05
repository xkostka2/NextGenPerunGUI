import { Injectable } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  registerPerunRefreshIcon() {
    this.matIconRegistry.addSvgIcon(
      'refreshEnabled',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/PerunWebImages/refresh_tab-black.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'refreshDisabled',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/PerunWebImages/refresh_tab-grey.svg')
    );
  }
}

import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fadeIn} from '../../../../shared/animations/Animations';

@Component({
  selector: 'app-facility-settings',
  templateUrl: './facility-settings.component.html',
  styleUrls: ['./facility-settings.component.scss'],
  animations: [
    fadeIn
  ]
})
export class FacilitySettingsComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

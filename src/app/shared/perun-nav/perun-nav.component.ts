import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {PerunPrincipal} from '../../core/models/PerunPrincipal';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-perun-nav-menu',
  templateUrl: './perun-nav.component.html',
  styleUrls: ['./perun-nav.component.scss']
})
export class PerunNavComponent {

  constructor() { }

  @Input()
  sideNav: MatSidenav;

  @Input()
  principal: PerunPrincipal;
  isProduction = environment.production;
}

import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-perun-nav-menu',
  templateUrl: './perun-nav.component.html',
  styleUrls: ['./perun-nav.component.scss']
})
export class PerunNavComponent implements OnInit {

  constructor() { }

  @Input()
  sideNav: MatSidenav;

  items: any[] = [
    {
      icon: 'perun_logo-white.svg',
      url: '/',
      alt: 'Home'
    },
    // {
    //   icon: 'vo-white.svg',
    //   url: '/organizations',
    //   alt: 'Virtual organizations'
    // }
  ];

  ngOnInit() {
  }
}

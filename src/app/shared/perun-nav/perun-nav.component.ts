import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perun-nav-menu',
  templateUrl: './perun-nav.component.html',
  styleUrls: ['./perun-nav.component.scss']
})
export class PerunNavComponent implements OnInit {

  constructor() { }

  items: any[] = [
    {
      icon: 'perun_admin-white.svg',
      url: '/',
      alt: 'Home'
    },
    {
      icon: 'vo-white.svg',
      url: '/organizations',
      alt: 'Virtual organizations'
    }
  ];

  ngOnInit() {
  }
}

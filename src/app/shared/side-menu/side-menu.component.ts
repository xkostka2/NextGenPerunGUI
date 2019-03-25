import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  items: any[] = [
    {
      icon: 'perun_admin-white.svg',
      url: '/',
      alt: 'Home'
    },
    {
      icon: 'vo-white.svg',
      url: '/vos',
      alt: 'Virtual organizations'
    }
  ];

  ngOnInit() {
  }
}

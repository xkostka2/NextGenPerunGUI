import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/MenuItem';

@Component({
  selector: 'app-main-menu-page',
  templateUrl: './main-menu-page.component.html',
  styleUrls: ['./main-menu-page.component.scss']
})
export class MainMenuPageComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [
    {
      icon: 'vo-white.svg',
      url: '/organizations',
      label: 'MAIN_MENU.VOS',
      style: 'vo-btn'
    },
    {
      icon: 'facility-white.svg',
      url: '/facilities',
      label: 'MAIN_MENU.FACILITIES',
      style: 'facility-btn'
    }
  ];

  ngOnInit() {
  }
}

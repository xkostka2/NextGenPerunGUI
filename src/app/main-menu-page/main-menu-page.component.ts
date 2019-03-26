import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-page',
  templateUrl: './main-menu-page.component.html',
  styleUrls: ['./main-menu-page.component.scss']
})
export class MainMenuPageComponent implements OnInit {

  constructor() { }

  items: any[] = [
    {
      icon: 'vo-white.svg',
      url: '/organizations',
      label: 'MAIN_MENU.VOS',
      style: 'vo-bg-color'
    },
    {
      icon: 'facility-white.svg',
      url: '/facilities',
      label: 'MAIN_MENU.FACILITIES',
      style: 'facility-bg-color'
    }
  ];

  ngOnInit() {
  }
}

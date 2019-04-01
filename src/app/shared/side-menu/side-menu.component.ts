import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SideMenuService} from '../side-menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private router: Router
  ) { }

  items: SideMenuItem[] = [];

  @Input()
  sideNav: MatSidenav;

  ngOnInit(): void {
    this.router.events.subscribe(e => console.log('ROUTER: ' + e));

    this.sideMenuService.sideMenuItemsChange.subscribe(items => {
      console.log('SET');
      if (items.length > 0) {
        this.sideNav.open();
      } else {
        this.sideNav.close();
      }
      this.items = items;
    });
  }
}

export interface SideMenuItem {
  baseLink: string;
  label: string;
  links: EntityMenuLink[];
  colorClass: string;
  icon: string;
}

export interface EntityMenuLink {
  label: string;
  url: string;
}

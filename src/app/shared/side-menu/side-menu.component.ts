import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SideMenuService} from '../../core/services/common/side-menu.service';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService
  ) { }

  items: SideMenuItem[] = [];

  @Input()
  sideNav: MatSidenav;

  mobileView = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.mobileView = window.innerWidth <= AppComponent.minWidth;
  }

  ngOnInit(): void {
    this.getScreenSize(null);

    this.sideMenuService.sideMenuItemsChange.subscribe(items => {
      if (!this.mobileView) {
        if (items.length > 0) {
          this.sideNav.open();
        } else {
          this.sideNav.close();
        }
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
  url:  any[] | string;
  activatedRegex: string;
  children?: EntityMenuLink[];
  showChildrenRegex?: string;
}

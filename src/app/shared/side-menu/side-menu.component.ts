import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SideMenuService} from '../../core/services/common/side-menu.service';
import {AppComponent} from '../../app.component';
import {SideMenuItemService} from './side-menu-item.service';
import {AuthResolverService} from '../../core/services/common/auth-resolver.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private sideMenuItemService: SideMenuItemService,
    public authResolver: AuthResolverService
  ) { }

  accessItems: SideMenuItem[] = [];
  facilityItems: SideMenuItem[] = [];
  adminItems: SideMenuItem[] = [];

  accessItem = {
    label: 'Access management',
    colorClass: 'vo-bg-color',
    icon: 'vo-white.svg',
    links: [],
    baseLink: ['/organizations']
  };

  facilityItem = {
    label: 'Facilities management',
    colorClass: 'facility-bg-color',
    icon: 'manage_facility_white.svg',
    baseLink: ['/facilities'],
    links: []
  };

  adminItem = this.sideMenuItemService.getAdminItem();

  @Input()
  sideNav: MatSidenav;

  mobileView = false;
  adminItemOpened = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.mobileView = window.innerWidth <= AppComponent.minWidth;
  }

  ngOnInit(): void {
    this.sideNav.open();

    this.getScreenSize(null);
    this.sideMenuService.facilityItemsChange.subscribe(items => {
      this.reset();
      this.facilityItems = items;
      this.adminItemOpened = false;
    });
    this.sideMenuService.accessItemsChange.subscribe(items => {
      this.reset();
      this.accessItems = items;
      this.adminItemOpened = false;
    });
    this.sideMenuService.adminItemsChange.subscribe(items => {
      this.reset();
      this.adminItems = items;
      this.adminItemOpened = true;
    });
    this.sideMenuService.resetChange.subscribe(() => {
      this.reset();
    });
  }

  private reset(): void {
      this.adminItemOpened = false;
      this.adminItems = [];
      this.accessItems = [];
      this.facilityItems = [];
  }
}

export interface SideMenuItem {
  label: string;
  labelClass?: string;
  colorClass: string;
  activatedClass?: string;
  links: EntityMenuLink[];
  icon: string;
  baseLink?: any[];
  expandable?: boolean;
}

export interface EntityMenuLink {
  label: string;
  url:  any[] | string;
  activatedRegex: string;
  children?: EntityMenuLink[];
  showChildrenRegex?: string;
}

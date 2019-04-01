import {EventEmitter, Injectable, Output} from '@angular/core';
import {SideMenuItem} from './side-menu/side-menu.component';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() { }

  @Output() sideMenuItemsChange: EventEmitter<SideMenuItem[]> = new EventEmitter();

  setMenuItems(items: SideMenuItem[]): void {
    this.sideMenuItemsChange.emit(items);
  }
}

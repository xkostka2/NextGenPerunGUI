import {Component, Input, OnInit} from '@angular/core';
import {SideMenuItem} from '../side-menu.component';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit {

  constructor() { }

  @Input()
  item: SideMenuItem;

  ngOnInit() {
  }

}

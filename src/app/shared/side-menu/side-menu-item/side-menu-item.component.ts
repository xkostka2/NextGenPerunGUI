import {AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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

  @Input()
  index: number;

  @Input()
  showOpen: boolean;

  @ViewChild('collapse') collapseDiv: ElementRef;

  expanded = false;

  ngOnInit() {
    this.expanded = this.showOpen;
  }

  // TODO
  isExpanded() {
    return this.expanded;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}

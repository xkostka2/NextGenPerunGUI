import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {SideMenuItem} from '../side-menu.component';
import {NavigationEnd, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {openClose} from '../../animations/Animations';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss'],
  animations: [
    openClose
  ]
})
export class SideMenuItemComponent implements OnInit, OnChanges {

  private currentUrl: string;

  constructor(
    private router: Router
  ) {
    this.currentUrl = router.url;

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;
      }
    });
  }

  @Input()
  item: SideMenuItem;

  @Input()
  index: number;

  @Input()
  showOpen: boolean;

  @ViewChild('collapse', { static: false }) collapseDiv: ElementRef;

  expanded = false;

  ngOnInit() {
    this.expanded = this.showOpen;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.expanded = this.showOpen;
  }

  toggle() {
    if (this.item.baseLink !== undefined) {
      this.router.navigate(this.item.baseLink);
    } else {
      this.expanded = !this.expanded;
    }
  }

  isActive(currentUrl: string, regexValue: string) {
    const regexp = new RegExp(regexValue);

    return regexp.test(currentUrl);
  }
}

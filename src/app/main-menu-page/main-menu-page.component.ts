import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../core/services/common/side-menu.service';

@Component({
  selector: 'app-main-menu-page',
  templateUrl: './main-menu-page.component.html',
  styleUrls: ['./main-menu-page.component.scss']
})
export class MainMenuPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService
  ) { }

  ngOnInit() {
    this.sideMenuService.reset();
  }
}

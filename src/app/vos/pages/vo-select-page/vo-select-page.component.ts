import {Component, OnInit} from '@angular/core';
import {VoService} from '../../../core/services/api/vo.service';
import {Vo} from '../../../core/models/Vo';
import {SideMenuService} from '../../../core/services/common/side-menu.service';

@Component({
  selector: 'app-vo-select-page',
  templateUrl: './vo-select-page.component.html',
  styleUrls: ['./vo-select-page.component.scss']
})
export class VoSelectPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService
  ) { }

  vos: Vo[] = [];

  ngOnInit() {
    this.sideMenuService.setAccessMenuItems([]);

    this.voService.getVos().subscribe(vos => {
      this.vos = vos;
    });
  }
}

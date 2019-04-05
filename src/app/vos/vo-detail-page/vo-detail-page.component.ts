import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../../shared/side-menu.service';
import {VoService} from '../../core/services/vo.service';
import {ActivatedRoute} from '@angular/router';
import {Vo} from '../../core/models/Vo';
import {SideMenuItemService} from '../../shared/side-menu/side-menu-item.service';
import {MenuItem} from '../../shared/MenuItem';

@Component({
  selector: 'app-vo-detail-page',
  templateUrl: './vo-detail-page.component.html',
  styleUrls: ['./vo-detail-page.component.scss']
})
export class VoDetailPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private route: ActivatedRoute,
    private sideMenuItemService: SideMenuItemService,
  ) { }

  vo: Vo;

  items: MenuItem[];

  private generateMenuItems(vo: Vo) {
    this.items = [
      {
        icon: 'user-white.svg',
        url: `/organizations/${vo.id}/members`,
        label: 'MENU_ITEMS.VO.MEMBERS',
        style: 'vo-btn'
      },
      {
        icon: 'group-white.svg',
        url: `/organizations/${vo.id}/groups`,
        label: 'MENU_ITEMS.VO.GROUPS',
        style: 'group-btn'
      }
    ];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const voId = params['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        const sideMenuItem = this.sideMenuItemService.parseVo(vo);

        this.sideMenuService.setMenuItems([sideMenuItem]);

        this.generateMenuItems(vo);
      });
    });
  }
}

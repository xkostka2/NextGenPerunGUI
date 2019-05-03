import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../shared/side-menu.service';
import {VoService} from '../../core/services/vo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Vo} from '../../core/models/Vo';
import {SideMenuItemService} from '../../shared/side-menu/side-menu-item.service';
import {MenuItem} from '../../shared/MenuItem';
import {TabPage} from '../../shared/TabPage';

@Component({
  selector: 'app-vo-detail-page',
  templateUrl: './vo-detail-page.component.html',
  styleUrls: ['./vo-detail-page.component.scss']
})
export class VoDetailPageComponent extends TabPage implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    protected route: ActivatedRoute,
    protected router: Router,
    private sideMenuItemService: SideMenuItemService,
  ) {
    super(route, router);
  }

  vo: Vo;
  items: MenuItem[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      const voId = params['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        const sideMenuItem = this.sideMenuItemService.parseVo(vo);

        this.sideMenuService.setMenuItems([sideMenuItem]);
      });
    });
  }
}

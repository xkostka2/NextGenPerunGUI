import {Component, HostBinding, OnInit} from '@angular/core';
import {SideMenuService} from '../../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../../core/services/api/vo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from '../../../../../shared/models/MenuItem';
import {Vo} from '../../../../../core/models/Vo';

@Component({
  selector: 'app-vo-resources-overview',
  templateUrl: './vo-resources-overview.component.html',
  styleUrls: ['./vo-resources-overview.component.scss']
})
export class VoResourcesOverviewComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    protected route: ActivatedRoute,
    protected router: Router
  ) { }

  items: MenuItem[] = [];
  vo: Vo;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        this.initItems();
      });
    });
  }

  private initItems() {
    this.items = [
      {
        icon: 'resource-white.svg',
        url: `/organizations/${this.vo.id}/resources/preview`,
        label: 'MENU_ITEMS.VO.RESOURCE_PREVIEW',
        style: 'vo-btn'
      },
      {
        icon: 'resource_tags-white.svg',
        url: `/organizations/${this.vo.id}/resources/tags`,
        label: 'MENU_ITEMS.VO.RESOURCE_TAGS',
        style: 'vo-btn'
      },
      {
        icon: 'resources_state-white.svg',
        url: `/organizations/${this.vo.id}/resources/states`,
        label: 'MENU_ITEMS.VO.RESOURCE_STATES',
        style: 'vo-btn'
      }
    ];
  }

}

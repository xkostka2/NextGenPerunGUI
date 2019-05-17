import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../shared/side-menu.service';
import {VoService} from '../../core/services/vo.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Vo} from '../../core/models/Vo';
import {SideMenuItemService} from '../../shared/side-menu/side-menu-item.service';
import {current} from 'codelyzer/util/syntaxKind';

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
    private router: Router,
    private sideMenuItemService: SideMenuItemService,
  ) {
    this.currentUrl = router.url;

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;

        this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);
      }
    });
  }

  vo: Vo;

  backButtonRegex = new RegExp('/organizations/\\d+/\\w+$');
  currentUrl;
  backButtonDisplayed = false;

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

import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Vo} from '../../core/models/Vo';
import {SideMenuItem} from './side-menu.component';

@Injectable({
  providedIn: 'root'
})
export class SideMenuItemService {

  constructor(
    private translate: TranslateService
  ) { }

  parseVo(vo: Vo): SideMenuItem {
    return {
      baseLink: `/organizations/${vo.id}`,
      label: vo.name,
      links: [
        {
          label: this.translate.instant('MENU_ITEMS.VO.MEMBERS'),
          url: `/organizations/${vo.id}/members`
        }
      ],
      colorClass: 'vo-bg-color',
      icon: 'vo-white.svg'
    };
  }
}

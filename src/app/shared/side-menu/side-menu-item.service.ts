import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Vo} from '../../core/models/Vo';
import {SideMenuItem} from './side-menu.component';
import {Group} from '../../core/models/Group';
import {RichMember} from '../../core/models/RichMember';
import {UtilsService} from '../utils.service';

@Injectable({
  providedIn: 'root'
})
export class SideMenuItemService {

  constructor(
    private translate: TranslateService,
    private utils: UtilsService
  ) { }

  parseGroup(group: Group): SideMenuItem {
    return {
      baseLink: `/organizations/${group.voId}/groups/${group.id}`,
      label: group.name,
      links: [
        {
          label: this.translate.instant('MENU_ITEMS.GROUP.OVERVIEW'),
          url: [`/organizations/${group.voId}/groups/${group.id}`, {tab: 0}]
        },
        {
          label: this.translate.instant('MENU_ITEMS.GROUP.SUBGROUPS'),
          url: [`/organizations/${group.voId}/groups/${group.id}`, {tab: 1}]
        }
      ],
      colorClass: 'group-bg-color',
      icon: 'group-white.svg'
    };
  }

  parseVo(vo: Vo): SideMenuItem {
    return {
      baseLink: `/organizations/${vo.id}`,
      label: vo.name,
      links: [
        {
          label: this.translate.instant('MENU_ITEMS.VO.OVERVIEW'),
          url: [`/organizations/${vo.id}`, {tab: 0}]
        },
        {
          label: this.translate.instant('MENU_ITEMS.VO.MEMBERS'),
          url: [`/organizations/${vo.id}`, {tab: 1}]
        },
        {
          label: this.translate.instant('MENU_ITEMS.VO.GROUPS'),
          url: [`/organizations/${vo.id}`, {tab: 2}]
        }
      ],
      colorClass: 'vo-bg-color',
      icon: 'vo-white.svg'
    };
  }

  parseMember(member: RichMember): SideMenuItem {
    return {
      baseLink: `/organizations/${member.voId}/members/${member.id}`,
      label: this.utils.parseFullName(member.user),
      links: [
        {
          label: this.translate.instant('MENU_ITEMS.MEMBER.OVERVIEW'),
          url: [`/organizations/${member.voId}/members/${member.id}`, {tab: 0}]
        },
        {
          label: this.translate.instant('MENU_ITEMS.MEMBER.GROUPS'),
          url: [`//organizations/${member.voId}/members/${member.id}`, {tab: 1}]
        }
      ],
      colorClass: 'member-bg-color',
      icon: 'user-white.svg'
    };
  }
}

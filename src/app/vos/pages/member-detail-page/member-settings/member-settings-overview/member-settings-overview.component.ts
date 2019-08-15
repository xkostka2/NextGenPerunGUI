import {Component, HostBinding, OnInit} from '@angular/core';
import {SideMenuService} from '../../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../../core/services/api/vo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from '../../../../../shared/models/MenuItem';
import {Vo} from '../../../../../core/models/Vo';
import {Member} from '../../../../../core/models/Member';
import {MembersService} from '../../../../../core/services/api/members.service';

@Component({
  selector: 'app-member-settings-overview',
  templateUrl: './member-settings-overview.component.html',
  styleUrls: ['./member-settings-overview.component.scss']
})
export class MemberSettingsOverviewComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private memberService: MembersService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
  }

  items: MenuItem[] = [];
  vo: Vo;
  member: Member;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(grandParentParams => {
      const voId = grandParentParams['voId'];
      const memberId = grandParentParams['memberId'];
      this.memberService.getMemberById(memberId).subscribe(member => {
        this.member = member;

        this.voService.getVoById(voId).subscribe(vo => {
          this.vo = vo;

          this.initItems();
        });
      });
    });
  }

  private initItems() {
    this.items = [
      {
        icon: 'attributes-white.svg',
        url: `/organizations/${this.vo.id}/members/${this.member.id}/settings/attributes`,
        label: 'MENU_ITEMS.MEMBER.ATTRIBUTES',
        style: 'member-btn'
      }
    ];
  }
}

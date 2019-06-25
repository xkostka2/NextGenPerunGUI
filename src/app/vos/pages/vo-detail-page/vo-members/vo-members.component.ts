import {Component, OnInit} from '@angular/core';
import {Vo} from '../../../../core/models/Vo';
import {RichMember} from '../../../../core/models/RichMember';
import {MembersService} from '../../../../core/services/api/members.service';
import {SideMenuService} from '../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../core/services/api/vo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Urns} from '../../../../shared/urns';

@Component({
  selector: 'app-vo-members',
  templateUrl: './vo-members.component.html',
  styleUrls: ['./vo-members.component.scss']
})
export class VoMembersComponent implements OnInit {

  constructor(
    private membersService: MembersService,
    private sideMenuService: SideMenuService,
    private voService: VoService,
    protected route: ActivatedRoute,
    protected router: Router
  ) { }

  vo: Vo;

  members: RichMember[] = null;

  searchString = '';
  firstSearchDone = false;

  loading = false;

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;
      });
    });
  }

  onSearchByString() {
    this.loading = true;
    this.firstSearchDone = true;

    const attrNames = [
      Urns.MEMBER_DEF_ORGANIZATION,
      Urns.MEMBER_DEF_MAIL,
      Urns.USER_DEF_ORGANIZATION,
      Urns.USER_DEF_PREFERRED_MAIL
    ];

    this.membersService.findCompleteRichMembers(this.vo.id, this.searchString, attrNames).subscribe(
      members => {
        this.members = members;
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  onListAll() {
    this.loading = true;
    this.firstSearchDone = true;

    const attrNames = [
      Urns.MEMBER_DEF_ORGANIZATION,
      Urns.MEMBER_DEF_MAIL,
      Urns.USER_DEF_ORGANIZATION,
      Urns.USER_DEF_PREFERRED_MAIL
    ];

    this.membersService.getCompleteRichMembers(this.vo.id, attrNames).subscribe(
      members => {
        this.members = members;
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  onAddMember() {

  }

  foo(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.searchString.length > 0) {
      this.onSearchByString();
    }
  }
}

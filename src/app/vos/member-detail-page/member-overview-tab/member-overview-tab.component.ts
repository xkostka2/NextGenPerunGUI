import {Component, Input, OnInit} from '@angular/core';
import {RichMember} from '../../../core/models/RichMember';
import {UtilsService} from '../../../shared/utils.service';
import {Urns} from '../../../shared/Urns';
import {AttributesService} from '../../../core/services/attributes.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-member-overview-tab',
  templateUrl: './member-overview-tab.component.html',
  styleUrls: ['./member-overview-tab.component.scss']
})
export class MemberOverviewTabComponent implements OnInit {

  constructor(
    private utils: UtilsService,
    private attributeService: AttributesService,
    private translate: TranslateService
  ) { }

  fullName = '';
  statusIcon = '';
  statusIconColor = '';
  expiration = '';

  @Input()
  member: RichMember;

  ngOnInit() {
    this.fullName = this.utils.parseFullName(this.member.user);
    this.statusIcon = this.utils.parseStatusIcon(this.member);
    this.statusIconColor = this.utils.parseStatusColor(this.member);

    this.attributeService.getAttribute(this.member.id, Urns.MEMBER_DEF_EXPIRATION).subscribe(attr => {
      this.expiration = attr.value === null ? this.translate.instant('MEMBER_DETAIL.OVERVIEW.NEVER_EXPIRES') : attr.value;
    });
  }
}

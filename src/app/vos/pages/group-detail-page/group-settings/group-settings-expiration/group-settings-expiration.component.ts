import {Component, HostBinding, OnInit} from '@angular/core';
import {AttributesService} from '../../../../../core/services/api/attributes.service';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NotificatorService} from '../../../../../core/services/common/notificator.service';
import {Urns} from '../../../../../shared/urns';
import {Attribute} from '../../../../../core/models/Attribute';

@Component({
  selector: 'app-group-settings-expiration',
  templateUrl: './group-settings-expiration.component.html',
  styleUrls: ['./group-settings-expiration.component.scss']
})
export class GroupSettingsExpirationComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private attributesService: AttributesService,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private notificator: NotificatorService
  ) {
    this.translate.get('GROUP_DETAIL.SETTINGS.EXPIRATION.SUCCESS_MESSAGE').subscribe(value => this.successMessage = value);
    this.translate.get('GROUP_DETAIL.SETTINGS.EXPIRATION.ERROR_MESSAGE').subscribe(value => this.errorMessage = value);
  }

  expirationAttribute: Attribute;

  successMessage: string;
  errorMessage: string;

  groupId: number;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(params => {
      this.groupId = params['groupId'];

      this.loadSettings();
    });
  }

  private loadSettings(): void {
    this.attributesService.getAttribute(this.groupId, 'group', Urns.GROUP_DEF_EXPIRATION_RULES).subscribe(attr => {
      this.expirationAttribute = attr;
    });
  }

  saveExpirationAttribute(attribute: Attribute) {
    this.attributesService.setAttribute(this.groupId, 'group', attribute, false).subscribe(() => {
        this.loadSettings();
        this.notificator.showSuccess(this.successMessage);
      },
      error => this.notificator.showRPCError(error, this.errorMessage));
  }
}

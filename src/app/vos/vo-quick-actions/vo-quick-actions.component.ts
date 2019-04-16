import {Component, Input, OnInit} from '@angular/core';
import {Vo} from '../../core/models/Vo';
import {MenuItem} from '../../shared/MenuItem';

@Component({
  selector: 'app-vo-quick-actions',
  templateUrl: './vo-quick-actions.component.html',
  styleUrls: ['./vo-quick-actions.component.scss']
})
export class VoQuickActionsComponent implements OnInit {

  constructor() { }

  @Input()
  vo: Vo;

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        icon: 'invite_member-white.svg',
        label: 'VO_QA.INVITE_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/invite-member`
      },
      {
        icon: 'service_identity-white.svg',
        label: 'VO_QA.CREATE_SERVICE_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/create-service-member`
      },
      {
        icon: 'manager-white.svg',
        label: 'VO_QA.ADD_MANAGER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/add-manager`
      },
      {
        icon: 'group-white.svg',
        label: 'VO_QA.CREATE_GROUP',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/create-group`
      },
      {
        icon: 'create1-white.svg',
        label: 'VO_QA.ADD_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/invite-member`
      }
    ];
  }
}

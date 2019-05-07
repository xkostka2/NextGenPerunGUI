import {Component, Input, OnInit} from '@angular/core';
import {Vo} from '../../../core/models/Vo';
import {MenuItem} from '../../../shared/MenuItem';
import {InviteMemberDialogComponent} from '../../../shared/components/dialogs/invite-member-dialog/invite-member-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-vo-overview-tab',
  templateUrl: './vo-overview-tab.component.html',
  styleUrls: ['./vo-overview-tab.component.scss']
})
export class VoOverviewTabComponent implements OnInit {

  constructor() { }

  @Input()
  vo: Vo;

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        icon: 'invite_member-white.svg',
        label: 'VO_DETAIL.OVERVIEW.INVITE_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/invite-member`,
        clickAction: function (dialog: MatDialog, voId: number) {
          const dialogRef = dialog.open(InviteMemberDialogComponent, {
            width: '450px',
            data: {voId: voId}
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
        }
      },
      {
        icon: 'service_identity-white.svg',
        label: 'VO_DETAIL.OVERVIEW.CREATE_SERVICE_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/create-service-member`,
        clickAction: function (dialog: MatDialog, voId: number) {
          return;
        }
      },
      {
        icon: 'manager-white.svg',
        label: 'VO_DETAIL.OVERVIEW.ADD_MANAGER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/add-manager`,
        clickAction: function (dialog: MatDialog, voId: number) {
          return;
        }
      },
      {
        icon: 'group-white.svg',
        label: 'VO_DETAIL.OVERVIEW.CREATE_GROUP',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/create-group`,
        clickAction: function (dialog: MatDialog, voId: number) {
          return;
        }
      },
      {
        icon: 'create1-white.svg',
        label: 'VO_DETAIL.OVERVIEW.ADD_MEMBER',
        style: 'vo-btn',
        url: `/organizations/${this.vo.id}/invite-member`,
        clickAction: function (dialog: MatDialog, voId: number) {
          return;
        }
      }
    ];
  }
}

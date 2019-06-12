import {Component, Input, OnInit} from '@angular/core';
import {NotificationData} from '../../models/NotificationData';
import {MatDialog} from '@angular/material';
import {NotificationDialogComponent} from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  @Input()
  data: NotificationData;

  ngOnInit() {
  }

  openDescription(): void {
    this.dialog.open(NotificationDialogComponent, {
      width: '400px',
      data: this.data
    });
  }
}

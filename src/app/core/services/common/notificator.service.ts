import {EventEmitter, Injectable, Output} from '@angular/core';
import {NotificationData} from '../../../shared/models/NotificationData';
import {TranslateService} from '@ngx-translate/core';
import {RPCError} from '../../models/RPCError';

@Injectable({
  providedIn: 'root'
})
export class NotificatorService {

  constructor(
    private translate: TranslateService
  ) {
    this.translate.get('NOTIFICATOR.NOTIFICATION.DEFAULT_ACTION').subscribe(value => this.defaultAction = value);
  }

  defaultAction: string;

  defaultErrorDelayMs = 10_000;
  defaultSuccessDelayMs = 6_000;

  @Output()
  addNotification: EventEmitter<NotificationData> = new EventEmitter<NotificationData>();

  showRPCError(title: string, rpcError: RPCError): void {
    this.showError(title + '\n' + rpcError.name, rpcError.message);
  }

  showError(title: string, description?: string, action?: string): void {
    this.addNotification.emit({
      type: 'error',
      description: description,
      title: title,
      actionText: action !== undefined ? action : this.defaultAction,
      delay: this.defaultErrorDelayMs
    });
  }

  showSuccess(title: string): void {
    this.addNotification.emit({
      type: 'success',
      description: null,
      title: title,
      actionText: null,
      delay: this.defaultSuccessDelayMs
    });
  }
}

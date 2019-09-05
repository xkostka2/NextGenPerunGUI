import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss']
})
export class RefreshButtonComponent {

  constructor() { }

  @Output()
  refresh = new EventEmitter<MouseEvent>();

  @Input()
  disabled: boolean;

  onClickbutton(event: MouseEvent) {
    this.refresh.emit(event);
  }
}

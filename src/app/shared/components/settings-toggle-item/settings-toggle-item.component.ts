import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-settings-toggle-item',
  templateUrl: './settings-toggle-item.component.html',
  styleUrls: ['./settings-toggle-item.component.scss']
})
export class SettingsToggleItemComponent implements OnInit {

  constructor() { }

  @Input()
  title: string;

  modelValue: boolean;

  @Output() modelChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() set model(value: boolean) {
    this.modelValue = value;
  }

  ngOnInit() {
  }
}

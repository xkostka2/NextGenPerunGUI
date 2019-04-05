import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../MenuItem';

@Component({
  selector: 'app-menu-buttons-field',
  templateUrl: './menu-buttons-field.component.html',
  styleUrls: ['./menu-buttons-field.component.scss']
})
export class MenuButtonsFieldComponent implements OnInit {

  constructor() { }

  @Input()
  items: MenuItem[];

  @Input()
  size = 'large';

  ngOnInit() {
  }

}


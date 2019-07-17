import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-group-settings-attributes',
  templateUrl: './group-settings-attributes.component.html',
  styleUrls: ['./group-settings-attributes.component.scss']
})
export class GroupSettingsAttributesComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor() { }

  ngOnInit() {
  }

}

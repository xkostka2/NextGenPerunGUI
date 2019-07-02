import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-vo-settings-attributes',
  templateUrl: './vo-settings-attributes.component.html',
  styleUrls: ['./vo-settings-attributes.component.scss']
})
export class VoSettingsAttributesComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor() { }

  ngOnInit() {
  }

}

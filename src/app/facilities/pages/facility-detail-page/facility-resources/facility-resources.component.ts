import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-facility-resources',
  templateUrl: './facility-resources.component.html',
  styleUrls: ['./facility-resources.component.scss']
})
export class FacilityResourcesComponent implements OnInit {

  // class used for animation
  @HostBinding('class.router-component') true;

  constructor() { }

  ngOnInit() {
  }
}

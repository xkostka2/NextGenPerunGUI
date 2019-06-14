import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member-groups-detail',
  templateUrl: './member-groups-detail.component.html',
  styleUrls: ['./member-groups-detail.component.scss']
})
export class MemberGroupsDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => console.log(params));
  }

}

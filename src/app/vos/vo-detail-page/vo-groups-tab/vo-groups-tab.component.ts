import {Component, Input, OnInit} from '@angular/core';
import {Vo} from '../../../core/models/Vo';
import {GroupSelectChange} from '../../groups-list/groups-list.component';
import {Group} from '../../../core/models/Group';

@Component({
  selector: 'app-vo-groups-tab',
  templateUrl: './vo-groups-tab.component.html',
  styleUrls: ['./vo-groups-tab.component.scss']
})
export class VoGroupsTabComponent implements OnInit {

  constructor() { }

  @Input()
  vo: Vo;

  selectedGroups: Set<Group> = new Set<Group>();

  showTreeStructure = false;

  ngOnInit() {
  }

  onGroupSelectChange(event: GroupSelectChange) {
    if (event.checked) {
      this.selectedGroups.add(event.group);
    } else {
      this.selectedGroups.delete(event.group);
    }
    console.log(this.selectedGroups);
  }
}

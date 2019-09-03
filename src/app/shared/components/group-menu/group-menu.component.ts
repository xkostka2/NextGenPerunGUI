import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupFlatNode} from '../../../vos/components/groups-tree/groups-tree.component';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.scss']
})
export class GroupMenuComponent implements OnInit {

  constructor() { }

  @Input() group: GroupFlatNode;

  @Input() disabled = false;

  @Output() moveGroup: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
  }

  onMoveGroup() {
    console.log('Emit menu - ' + this.group);
    this.moveGroup.emit();
  }
}

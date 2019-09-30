import {Component, Input, OnInit} from '@angular/core';
import {ResourceState} from '../../../../../../core/models/ResourceState';
import {MatTableDataSource} from '@angular/material';
import {Task} from '../../../../../../core/models/Task';

@Component({
  selector: 'app-state-tab',
  templateUrl: './state-tab.component.html',
  styleUrls: ['./state-tab.component.scss']
})
export class StateTabComponent implements OnInit {

  constructor() { }

  @Input()
  propagation: ResourceState[] = [];

  datasources: MatTableDataSource<Task>[] = [];
  displayedColumns = ['id', 'service', 'status', 'scheduled', 'started', 'ended'];

  ngOnInit() {
    this.getDataSource();
  }
  getErrorCountStates(resourceStatus: ResourceState) {
    let counter = 0;
    for (const task of resourceStatus.taskList) {
      if (task.status === 'ERROR' || task.status === 'GENERROR' || task.status === 'SENDERROR') {
        counter++;
      }
    }
    return counter;
  }

  getDataSource() {
    for (const resourceState of this.propagation) {
      this.datasources.push(new MatTableDataSource(resourceState.taskList));
    }
  }
}

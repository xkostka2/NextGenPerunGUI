import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PropagationStatsReaderService} from '../../../../../core/services/api/propagation-stats-reader.service';
import {ResourceState} from '../../../../../core/models/ResourceState';

@Component({
  selector: 'app-vo-resources-states',
  templateUrl: './vo-resources-states.component.html',
  styleUrls: ['./vo-resources-states.component.scss']
})
export class VoResourcesStatesComponent implements OnInit {

  static id = 'VoResourcesStatesComponent';

  @HostBinding('class.router-component') true;

  constructor(private route: ActivatedRoute,
              private propagationStatsReader: PropagationStatsReaderService) { }

  loading = false;
  okPropagation: ResourceState[] = [];
  errorPropagation: ResourceState[] = [];
  resourceStates: ResourceState[] = [];

  ngOnInit() {
    this.loading = true;
    this.route.parent.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];
      this.propagationStatsReader.getAllResourcesState(voId).subscribe( resourceStates => {
        this.resourceStates = resourceStates;
        for (const resourceState of resourceStates) {
          let indicator = true;
          for (const task of resourceState.taskList) {
            if (task.status === 'ERROR' || task.status === 'GENERROR' || task.status === 'SENDERROR') {
              indicator = false;
              break;
            }
          }
          if (indicator) {
            this.okPropagation.push(resourceState);
          } else {
            this.errorPropagation.push(resourceState);
          }
        }
        this.loading = false;
      });
    });
  }
}

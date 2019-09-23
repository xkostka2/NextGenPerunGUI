import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vo} from '../../../../../core/models/Vo';
import {SelectionModel} from '@angular/cdk/collections';
import {ResourcesService} from '../../../../../core/services/api/resources.service';
import {RichResource} from '../../../../../core/models/RichResource';
import {VoService} from '../../../../../core/services/api/vo.service';

@Component({
  selector: 'app-vo-resources-preview',
  templateUrl: './vo-resources-preview.component.html',
  styleUrls: ['./vo-resources-preview.component.scss']
})
export class VoResourcesPreviewComponent implements OnInit {

  static id = 'VoResourcesPreviewComponent';

  @HostBinding('class.router-component') true;

  constructor(private resourcesService: ResourcesService,
              private voService: VoService,
              private route: ActivatedRoute) {
  }

  vo: Vo;
  resources: RichResource[] = [];
  selected = new SelectionModel<RichResource>(true, []);

  loading: boolean;
  filterValue = '';

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        this.refreshTable();
      });
    });
  }

  refreshTable() {
    this.loading = true;
    this.resourcesService.getResourcesByVo(this.vo.id).subscribe(resources => {
      this.resources = resources;
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }
}

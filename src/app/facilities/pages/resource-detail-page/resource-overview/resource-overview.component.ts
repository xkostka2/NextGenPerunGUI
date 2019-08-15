import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuItem} from '../../../../shared/models/MenuItem';
import {ResourcesService} from '../../../../core/services/api/resources.service';
import {Resource} from '../../../../core/models/Resource';

@Component({
  selector: 'app-resource-overview',
  templateUrl: './resource-overview.component.html',
  styleUrls: ['./resource-overview.component.scss']
})
export class ResourceOverviewComponent implements OnInit {

  // class used for animation
  @HostBinding('class.router-component') true;

  constructor(
    private resourcesService: ResourcesService,
    private route: ActivatedRoute,
  ) { }

  navItems: MenuItem[] = [];
  resource: Resource;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const resourceId = params['resourceId'];

      this.resourcesService.getResourceById(resourceId).subscribe(resource => {
        this.resource = resource;

        this.initItems();
      });
    });
  }

  private initItems() {
    this.navItems = [
      {
        icon: 'settings2-white.svg',
        url: `/facilities/${this.resource.facilityId}/resources/${this.resource.id}/settings`,
        label: 'MENU_ITEMS.RESOURCE.SETTINGS',
        style: 'resource-btn'
      }
    ];
  }
}

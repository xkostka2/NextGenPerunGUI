import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import {AdminOverviewComponent} from './pages/admin-page/admin-overview/admin-overview.component';
import {AdminAttributesComponent} from './pages/admin-page/admin-attributes/admin-attributes.component';
import {AdminVisualizerComponent} from './pages/admin-page/admin-visualizer/admin-visualizer.component';
import {
  VisualizerAttrModulesComponent
} from './pages/admin-page/admin-visualizer/visualizer-attr-modules/visualizer-attr-modules.component';
import {VisualizerOverviewComponent} from './pages/admin-page/admin-visualizer/visualizer-overview/visualizer-overview.component';
import {
  UserDestinationRelationshipComponent
} from './pages/admin-page/admin-visualizer/user-destination-relationship/user-destination-relationship.component';
import {
  UserDestinationGraphComponent
} from './pages/admin-page/admin-visualizer/user-destination-relationship/user-destination-graph/user-destination-graph.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: '',
        component: AdminOverviewComponent
      },
      {
        path: 'attributes',
        component: AdminAttributesComponent
      },
      {
        path: 'visualizer',
        component: AdminVisualizerComponent,
        children: [
          {
            path: '',
            component: VisualizerOverviewComponent
          },
          {
            path: 'attrDependencies',
            component: VisualizerAttrModulesComponent
          },
          {
            path: 'userDestinationRelationship',
            component: UserDestinationRelationshipComponent
          },
          {
            path: 'userDestinationRelationship/graph',
            component: UserDestinationGraphComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }

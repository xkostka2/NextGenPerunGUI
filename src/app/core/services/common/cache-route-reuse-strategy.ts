import {RouteReuseStrategy} from '@angular/router/';
import {ActivatedRouteSnapshot, DetachedRouteHandle} from '@angular/router';
import {VoMembersComponent} from '../../../vos/pages/vo-detail-page/vo-members/vo-members.component';

export class CacheRouteReuseStrategy implements RouteReuseStrategy {
  typeToComponentToHandlers: Map<string, Map<string, DetachedRouteHandle>>;

  allowCachePages = [
    {
      type: 'vo',
      components: [
        'VoMembersComponent',
        'VoGroupsComponent',
        'VoResourcesComponent',
        'VoApplicationsComponent'
      ]
    },
    {
      type: 'group',
      components: [
        'GroupMembersComponent',
        'GroupSubgroupsComponent',
        'GroupResourcesComponent',
        'GroupApplicationsComponent'
      ]
    },
    {
      type: 'facility',
      components: [
        'FacilityAllowedGroupsComponent',
        'FacilityResourcesComponent'
      ]
    },
    {
      type: 'member',
      components: [
        'MemberGroupsComponent'
      ]
    }
  ];

  resets = [
    {
      lastValue: null,
      resetType: 'vo',
      resetPath: ':voId',
      param: 'voId'
    },
    {
      lastValue: null,
      resetType: 'group',
      resetPath: ':voId/groups/:groupId',
      param: 'groupId'
    },
    {
      lastValue: null,
      resetType: 'facility',
      resetPath: ':facilityId',
      param: 'facilityId'
    },
    {
      lastValue: null,
      resetType: 'member',
      resetPath: ':voId/members/:memberId',
      param: 'memberId'
    },
  ];

  constructor() {
    this.typeToComponentToHandlers = new Map<string, Map<string, DetachedRouteHandle>>();
    for (const pages of this.allowCachePages) {
      this.typeToComponentToHandlers.set(pages.type, new Map<string, DetachedRouteHandle>());
    }
  }

  /**
   * Checks if some resets should be done on given route.
   *
   * Checks all resets and if their reset condition is fulfilled, pages of
   * given type are removed from cache.
   *
   * @param newRoute new route
   */
  checkResets(newRoute: ActivatedRouteSnapshot): void {
    const newPath = this.getPath(newRoute);

    for (const reset of this.resets) {
      // if the reset should be used and update it
      if (reset.resetPath === newPath) {
        const newParamValue = newRoute.params[reset.param];

        // remove all cached pages for given type
        if (reset.lastValue !== newParamValue) {
          this.typeToComponentToHandlers.get(reset.resetType).clear();
        }

        reset.lastValue = newParamValue;
      }
    }
  }

  shouldReuseRoute(before: ActivatedRouteSnapshot, curr:  ActivatedRouteSnapshot): boolean {
    this.checkResets(curr);
    return before.routeConfig === curr.routeConfig;
  }

  /**
   * Return handlers from cache or null if they are not cached,
   *
   * @param route route
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (route.component) {
      const componentName = this.getComponentName(route.component.toString());
      for (const pages of this.allowCachePages) {
        if (pages.components.indexOf(componentName) !== -1) {
          return this.typeToComponentToHandlers.get(pages.type).get(componentName) as DetachedRouteHandle;
        }
      }
    }

    return null;
  }

  /**
   * Returns true if the route used from cache.
   *
   * @param route route
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.component) {
      const componentName = this.getComponentName(route.component.toString());

      for (const pages of this.allowCachePages) {
        if (this.typeToComponentToHandlers.get(pages.type).has(componentName)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Returns true if the route should be cached.
   *
   * @param route route
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (route.component) {
      const componentName = this.getComponentName(route.component.toString());

      for (let i = 0; i < this.allowCachePages.length; ++i) {
        const pages = this.allowCachePages[i];
        if (pages.components.indexOf(componentName) !== -1) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Stores given handlers for given route.
   *
   * @param route route
   * @param detachedTree handlers
   */
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
    if (route.component) {
      const type = this.getComponentType(route);
      this.typeToComponentToHandlers
        .get(type)
        .set(this.getComponentName(route.component.toString()), detachedTree);
    }
  }

  /**
   * Parses component name from its source.
   *
   * @param component in string format
   */
  private getComponentName(component: string) {
    return component.substring(0, component.indexOf('{')).split(' ')[1];
  }

  /**
   * Get cache type for given component.
   *
   * @param route route
   */
  private getComponentType(route: ActivatedRouteSnapshot): string {
    const componentName = this.getComponentName(route.component.toString());
    for (const pages of this.allowCachePages) {
      if (pages.components.indexOf(componentName) !== -1) {
        return pages.type;
      }
    }

    return null;
  }

  /**
   * Returns path from given route.
   *
   * @param route route
   */
  private getPath(route: ActivatedRouteSnapshot): string {
    if (route.routeConfig !== null && route.routeConfig.path !== null) {
      return route.routeConfig.path;
    }
    return '';
  }
}
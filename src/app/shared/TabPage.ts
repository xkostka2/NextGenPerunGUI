import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {AfterViewChecked, AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material';

@Component({
  selector: 'app-tab-page',
  template: ``
})
export class TabPage implements AfterViewChecked {

  constructor(
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    this.initTabs();
  }

  handlersSet = false;
  protected selectedTab = 0;

  // Could be useful in the future
  //
  // @ViewChildren(TabComponent)
  // tabs: QueryList<TabComponent>;

  @ViewChildren(MatTab)
  tabs: QueryList<MatTab>;

  @ViewChild(MatTabGroup)
  tabGroup: MatTabGroup;
  /**
   * This method is used to update params in URL.
   * Also, it is used to enable the disabled tabs.
   *
   * @param tabIndex index of the newly selected tab
   */
  updateMatrixParam(tabIndex: number) {
    // this.tabs.forEach(tab => tab.onTabChange(tabIndex));

    // console.log(this.tabs);
    // console.log(this.tabGroup);
    this.tabs.forEach(tab => tab.disabled = false);
    const currentUrl = this.router.url.split(';')[0];
    this.router.navigate([currentUrl, {tab: tabIndex}]);
  }

  initTabs(): void {
    this.route.paramMap.subscribe(value => {
      if (value.has('tab')) {
        // tslint:disable-next-line:radix
        this.selectedTab = parseInt(value.get('tab'));
      }
    });
  }

  /**
   * This code is used to disable tabs when switchit from one to another.
   * If this would not be done, there could be a cycle if the user clicks fast
   * on the tabs.
   */
  ngAfterViewChecked(): void {
    if (!this.handlersSet && this.tabGroup !== undefined) {
      this.handlersSet = true;
      this.tabGroup.focusChange.subscribe(() => this.tabs.forEach(tab => tab.disabled = true));
    }
  }
}

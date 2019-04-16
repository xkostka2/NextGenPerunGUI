import {ActivatedRoute, Router} from '@angular/router';

export abstract class TabPage {

  protected constructor(
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    this.initTabs();
  }

  protected selectedTab = 0;

  /**
   * This method is used to update params in URL.
   *
   * @param tabIndex index of the newly selected tab
   */
  updateMatrixParam(tabIndex: number) {
    const currentUrl = this.router.url.split(';')[0];
    console.log('navigate');
    console.log(currentUrl);
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
}

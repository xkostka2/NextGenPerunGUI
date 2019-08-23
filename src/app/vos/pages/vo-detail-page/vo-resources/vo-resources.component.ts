import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {fadeIn} from '../../../../shared/animations/Animations';

@Component({
  selector: 'app-vo-resources',
  templateUrl: './vo-resources.component.html',
  styleUrls: ['./vo-resources.component.scss'],
  animations: [
    fadeIn
  ]
})
export class VoResourcesComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currentUrl = router.url;
    this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;

        this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);
      }
    });
  }

  backButtonRegex = new RegExp('/organizations/\\d+/resources/\\w+$');
  currentUrl;
  backButtonDisplayed = false;

  voId: number;

  ngOnInit(): void {
    this.route.parent.params.subscribe(parentParams => {
      this.voId = parentParams['voId'];
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

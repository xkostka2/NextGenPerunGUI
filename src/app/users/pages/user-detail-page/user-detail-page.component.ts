import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SideMenuItemService} from '../../../shared/side-menu/side-menu-item.service';
import {UsersService} from '../../../core/services/api/users.service';
import {User} from '../../../core/models/User';
import {parseFullName} from '../../../shared/utils';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private sideMenuItemService: SideMenuItemService,
  ) { }

  user: User;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['userId'];

      this.userService.getUserById(userId).subscribe(user => {
        this.user = user;

        const sideMenuItem = this.sideMenuItemService.parseUser(user);

        this.sideMenuService.setMenuItems([sideMenuItem]);
      });
    });
  }

  getTitle(): string {
    return parseFullName(this.user);
  }
}

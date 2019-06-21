import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../../core/services/common/side-menu.service';
import {Vo} from '../../../core/models/Vo';
import {UsersService} from '../../../core/services/api/users.service';
import {Urns} from '../../../shared/urns';
import {RichUser} from '../../../core/models/RichUser';

@Component({
  selector: 'app-user-select-page',
  templateUrl: './user-select-page.component.html',
  styleUrls: ['./user-select-page.component.scss']
})
export class UserSelectPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private usersService: UsersService
  ) { }

  vos: Vo[];
  searchString = '';
  loading = false;

  users: RichUser[] = [];
  firstSearchDone = false;

  ngOnInit() {
    this.sideMenuService.setMenuItems([]);
  }

  onSearchClick() {
    this.loading = true;
    this.firstSearchDone = true;
    this.usersService.findRichUsersWithAttributes(this.searchString, [Urns.USER_DEF_ORGANIZATION, Urns.USER_DEF_PREFERRED_MAIL])
      .subscribe(users => {
        this.users = users;
        this.loading = false;
    }, () => this.loading = false);
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.searchString.length > 0 && event.key === 'Enter') {
      this.onSearchClick();
    }
  }
}

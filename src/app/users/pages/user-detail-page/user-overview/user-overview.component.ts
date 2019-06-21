import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../../core/services/api/users.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../../core/models/User';
import {parseFullName} from '../../../../shared/utils';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {


  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
  ) { }

  user: User;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['userId'];

      this.userService.getUserById(userId).subscribe(user => {
        this.user = user;
      });
    });
  }

  getUserFullName(): string {
    return parseFullName(this.user);
  }
}

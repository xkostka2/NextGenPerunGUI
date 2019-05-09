import {Component, Input, OnInit} from '@angular/core';
import {Vo} from '../../../core/models/Vo';
import {RichMember} from '../../../core/models/RichMember';
import {MembersService} from '../../../core/services/members.service';

@Component({
  selector: 'app-vo-members-tab',
  templateUrl: './vo-members-tab.component.html',
  // Could be useful in the future
  //
  // providers: [{
  //   provide: TabComponent,
  //   useExisting: VoMembersTabComponent
  // }],
  styleUrls: ['./vo-members-tab.component.scss']
})
export class VoMembersTabComponent implements OnInit {

  constructor(
    private membersService: MembersService
  ) { }

  @Input()
  vo: Vo;

  members: RichMember[] = null;

  searchString = '';
  firstSearchDone = false;

  loading = false;

  ngOnInit() {
    console.log(this.members);
  }

  onSearchByString() {
    this.loading = true;
    this.firstSearchDone = true;

    this.membersService.findCompleteRichMembers(this.vo.id, this.searchString).subscribe(
      members => {
        this.members = members;
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  onListAll() {
    this.loading = true;

    this.membersService.getCompleteRichMembers(this.vo.id).subscribe(
      members => {
        this.members = members;
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  onAddMember() {

  }

  foo(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.searchString.length > 0) {
      this.onSearchByString();
    }
  }
}

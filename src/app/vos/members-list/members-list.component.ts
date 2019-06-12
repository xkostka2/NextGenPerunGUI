import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatCheckboxChange, MatSort, MatTableDataSource} from '@angular/material';
import {RichMember} from '../../core/models/RichMember';
import {UtilsService} from '../../core/services/common/utils.service';

export declare class MemberSelectChange {
  member: RichMember;
  checked: boolean;
}

export interface TableMember {
  memberId: number;
  voId: number;
  fullName: string;
  status: string;
  statusIcon: string;
  statusColor: string;
  email: string;
  logins: string;
}

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnChanges {

  constructor(
    private utils: UtilsService
  ) { }

  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @Input()
  members: RichMember[] = [];

  @Input()
  searchString: string;

  @Output()
  memberSelectChange: EventEmitter<MemberSelectChange> = new EventEmitter<MemberSelectChange>();

  displayedColumns: string[] = ['checkbox', 'memberId', 'fullName', 'statusIcon', 'email', 'logins'];
  dataSource: MatTableDataSource<TableMember>;

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<TableMember>(this.members.map(m => this.parseTableMember(m)));
    this.setDataSource();
  }

  private parseTableMember(richMember: RichMember) {
    return {
      memberId: richMember.id,
      voId: richMember.voId,
      fullName: this.utils.parseFullName(richMember.user),
      statusIcon: this.utils.parseStatusIcon(richMember),
      status: richMember.status,
      statusColor: this.utils.parseStatusColor(richMember),
      email: this.utils.parseEmail(richMember),
      logins: this.utils.parseLogins(richMember)
    };
  }

  onMemberSelected(event: MatCheckboxChange, member: RichMember) {
    this.memberSelectChange.emit({member: member, checked: event.checked});
  }
}

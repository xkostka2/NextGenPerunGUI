import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatCheckboxChange, MatSort, MatTableDataSource} from '@angular/material';
import {RichMember} from '../../core/models/RichMember';
import {User} from '../../core/models/User';

export declare class MemberSelectChange {
  member: RichMember;
  checked: boolean;
}

export interface TableMember {
  memberId: number;
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

  constructor() { }

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
      fullName: parseFullName(richMember.user),
      statusIcon: parseStatusIcon(richMember),
      status: richMember.status,
      statusColor: parseStatusColor(richMember),
      email: parseEmail(richMember),
      logins: parseLogins(richMember)
    };
  }

  onMemberSelected(event: MatCheckboxChange, member: RichMember) {
    this.memberSelectChange.emit({member: member, checked: event.checked});
  }
}

export function parseStatusIcon(richMember: RichMember): string {
  switch (richMember.status) {
    case 'VALID':
      return 'verified_user';
    case 'INVALID':
      return 'report';
    case 'SUSPENDED':
      return 'lock';
    case 'EXPIRED':
      return 'schedule';
    case 'DISABLED':
      return 'delete';
  }
}

export function parseStatusColor(richMember: RichMember): string {
  switch (richMember.status) {
    case 'VALID':
      return 'accent';
    case 'INVALID':
      return 'warn';
    default:
      return 'primary';
  }
}

export function parseEmail(richMember: RichMember): string {
  let email = '';
  richMember.memberAttributes.forEach(attr => {
    if (attr.friendlyName === 'mail' && attr.value !== null) {
      email = attr.value;
    }
  });

  if (email.length === 0) {
    richMember.userAttributes.forEach(attr => {
      if (attr.friendlyName === 'preferredMail') {
        email = attr.value;
      }
    });
  }

  return email;
}

export function parseLogins(richMember: RichMember): string {
  let logins = '';

  richMember.userAttributes.forEach(attr => {
    if (attr.baseFriendlyName === 'login-namespace') {
      logins += attr.friendlyNameParameter + ': ' + attr.value + ' ';
    }
  });

  if (logins.endsWith(' ')) {
    logins = logins.substring(0, logins.length - 1);
  }

  return logins;
}

export function parseFullName(user: User): string {
  let fullName = '';

  if (user.titleBefore !== null) {
    fullName += user.titleBefore + ' ';
  }
  if (user.firstName !== null) {
    fullName += user.firstName + ' ';
  }
  if (user.middleName !== null) {
    fullName += user.middleName + ' ';
  }
  if (user.lastName !== null) {
    fullName += user.lastName + ' ';
  }
  if (user.titleAfter !== null) {
    fullName += user.titleAfter + ' ';
  }
  if (fullName.endsWith(' ')) {
    fullName = fullName.substring(0, fullName.length - 1);
  }

  return fullName;
}

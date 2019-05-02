import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatCheckboxChange, MatSort, MatTableDataSource} from '@angular/material';
import {RichMember} from '../../core/models/RichMember';
import {User} from '../../core/models/User';

export declare class MemberSelectChange {
  member: RichMember;
  checked: boolean;
}

export interface TableMember {
  id: number;
  fullName: string;
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

  displayedColumns: string[] = ['checkbox', 'id', 'fullName'];
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
      id: richMember.id,
      fullName: parseFullName(richMember.user)
    };
  }

  onMemberSelected(event: MatCheckboxChange, member: RichMember) {
    this.memberSelectChange.emit({member: member, checked: event.checked});
  }
}

export function parseFullName(user: User) {
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

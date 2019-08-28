import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Vo} from '../../../../core/models/Vo';
import {Group} from '../../../../core/models/Group';
import { MatDialog } from '@angular/material/dialog';
import {CreateGroupDialogComponent} from '../../../../shared/components/dialogs/create-group-dialog/create-group-dialog.component';
import {GroupService} from '../../../../core/services/api/group.service';
import {SideMenuService} from '../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../core/services/api/vo.service';
import {ActivatedRoute} from '@angular/router';
import {DeleteGroupDialogComponent} from '../../../../shared/components/dialogs/delete-group-dialog/delete-group-dialog.component';
import {SelectionModel} from '@angular/cdk/collections';
import {GroupFlatNode} from '../../../components/groups-tree/groups-tree.component';
import {MoveGroupDialogComponent} from '../../../../shared/components/dialogs/move-group-dialog/move-group-dialog.component';

@Component({
  selector: 'app-vo-groups',
  templateUrl: './vo-groups.component.html',
  styleUrls: ['./vo-groups.component.scss']
})
export class VoGroupsComponent implements OnInit {

  static id = 'VoGroupsComponent';

  @HostBinding('class.router-component') true;

  constructor(
    private dialog: MatDialog,
    private groupService: GroupService,
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private route: ActivatedRoute
  ) { }

  @Input()
  vo: Vo;

  groups: Group[] = [];

  showGroupList = false;

  selected = new SelectionModel<Group>(true, []);

  onCreateGroup() {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
      width: '350px',
      data: {voId: this.vo.id, parentGroup: null}
    });

    dialogRef.afterClosed().subscribe(value => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        this.loadAllGroups();
      });
    });
  }

  deleteGroup() {
    const dialogRef = this.dialog.open(DeleteGroupDialogComponent, {
      width: '450px',
      data: {voId: this.vo.id, groups: this.selected.selected}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupService.getAllGroups(this.vo.id).subscribe(groups => {
          this.groups = groups;
          this.selected.clear();
        });
      }
    });
  }

  removeAllGroups() {
    this.selected.clear();
  }

  onMoveGroup(group: GroupFlatNode | Group) {
    console.log('Vo - ' + group);
    const dialogRef = this.dialog.open(MoveGroupDialogComponent, {
      width: '550px',
      data: {
        group: group,
        theme: 'vo-theme'
      },
    });
    dialogRef.afterClosed().subscribe(groupMoved => {
      if (groupMoved) {
        this.loadAllGroups();
      }
    });
  }

  private loadAllGroups() {
    this.groupService.getAllGroups(this.vo.id).subscribe(groups => {
      this.groups = groups;
    });
  }
}

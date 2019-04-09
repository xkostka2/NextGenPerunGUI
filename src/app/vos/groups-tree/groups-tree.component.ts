/* tslint:disable:member-ordering */
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SideMenuService} from '../../shared/side-menu.service';
import {VoService} from '../../core/services/vo.service';
import {ActivatedRoute} from '@angular/router';
import {SideMenuItemService} from '../../shared/side-menu/side-menu-item.service';
import {Vo} from '../../core/models/Vo';
import {Group} from '../../core/models/Group';
import {GroupService} from '../../core/services/group.service';
import {MatSort, MatTableDataSource, MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {TreeGroup} from '../../core/models/TreeGroup';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Tree} from '@angular/router/src/utils/tree';

interface GroupFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  groupId: number;
}

@Component({
  selector: 'app-groups-tree',
  templateUrl: './groups-tree.component.html',
  styleUrls: ['./groups-tree.component.scss']
})
export class GroupsTreeComponent implements OnInit {

  private transformer = (node: TreeGroup, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.shortName,
      level: level,
      groupId: node.id
    };
    // tslint:disable-next-line
  };

  @Input()
  voId: number;

  treeControl = new FlatTreeControl<GroupFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener<TreeGroup, GroupFlatNode>(
    this.transformer, node => node.level, node => node.expandable, node => node.children);


  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private route: ActivatedRoute,
    private sideMenuItemService: SideMenuItemService,
    private groupService: GroupService
  ) { }

  vo: Vo;
  groups: Group[];

  ngOnInit() {
    this.voService.getVoById(this.voId).subscribe(vo => {
      this.vo = vo;

      this.groupService.getAllGroups(this.voId).subscribe(groups => {
        this.groups = groups;
        this.createGroupTrees(groups);
      });
    });
  }

  createGroupTrees(groups: Group[]) {
    const idGroupMap: Map<number, TreeGroup> = new Map<number, TreeGroup>();

    for (const group of groups) {
      idGroupMap.set(group.id, new TreeGroup(group));
    }

    idGroupMap.forEach((group: TreeGroup, id: number, map: Map<number, TreeGroup>) => {
      if (group.parentGroupId != null) {
        const updatedParentGroup: TreeGroup = map.get(group.parentGroupId);
        updatedParentGroup.addChild(group);
        map.set(group.parentGroupId, updatedParentGroup);
        map.delete(id);
      }
    });

    const groupTree = [];

    idGroupMap.forEach((group) => groupTree.push(group));

    this.dataSource.data = groupTree;
  }


  hasChild = (_: number, node: GroupFlatNode) => node.expandable;
}

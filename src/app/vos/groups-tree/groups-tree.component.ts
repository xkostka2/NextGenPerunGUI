/* tslint:disable:member-ordering */
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Group} from '../../core/models/Group';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {TreeGroup} from '../../core/models/TreeGroup';
import {FlatTreeControl} from '@angular/cdk/tree';

interface GroupFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  groupId: number;
  voId: number;
}

@Component({
  selector: 'app-groups-tree',
  templateUrl: './groups-tree.component.html',
  styleUrls: ['./groups-tree.component.scss']
})
export class GroupsTreeComponent implements OnChanges {

  constructor(
  ) { }

  private transformer = (node: TreeGroup, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.shortName,
      level: level,
      groupId: node.id,
      voId: node.voId
    };
    // tslint:disable-next-line
  };

  @Input()
  groups: Group[];

  treeControl = new FlatTreeControl<GroupFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener<TreeGroup, GroupFlatNode>(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  ngOnChanges(changes: SimpleChanges) {
    this.createGroupTrees(this.groups);
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
      }
    });

    const groupTree = [];

    idGroupMap.forEach((group) => groupTree.push(group));

    this.dataSource.data = groupTree;
  }

  hasChild = (_: number, node: GroupFlatNode) => node.expandable;
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {SideMenuService} from '../../shared/side-menu.service';
import {VoService} from '../../core/services/vo.service';
import {ActivatedRoute} from '@angular/router';
import {SideMenuItemService} from '../../shared/side-menu/side-menu-item.service';
import {Vo} from '../../core/models/Vo';
import {Group} from '../../core/models/Group';
import {GroupService} from '../../core/services/group.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-vo-groups-page',
  templateUrl: './vo-groups-page.component.html',
  styleUrls: ['./vo-groups-page.component.scss']
})
export class VoGroupsPageComponent implements OnInit {

  constructor(
    private sideMenuService: SideMenuService,
    private voService: VoService,
    private route: ActivatedRoute,
    private sideMenuItemService: SideMenuItemService,
    private groupService: GroupService
  ) { }


  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  vo: Vo;
  groups: Group[];

  private sort: MatSort;

  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<Group>;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const voId = params['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;

        const sideMenuItem = this.sideMenuItemService.parseVo(vo);

        this.sideMenuService.setMenuItems([sideMenuItem]);

        this.groupService.getAllGroups(voId).subscribe(groups => {
          this.groups = groups;
          this.dataSource = new MatTableDataSource<Group>(groups);
        });
      });
    });
  }

  setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }
}

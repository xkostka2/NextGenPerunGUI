import {Component, HostBinding, OnInit} from '@angular/core';
import {VoService} from '../../../../../core/services/api/vo.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {Vo} from '../../../../../core/models/Vo';
import {Role} from '../../../../../core/models/PerunPrincipal';

@Component({
  selector: 'app-vo-settings-managers',
  templateUrl: './vo-settings-managers.component.html',
  styleUrls: ['./vo-settings-managers.component.scss']
})
export class VoSettingsManagersComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private dialog: MatDialog,
    private voService: VoService,
    private route: ActivatedRoute
  ) { }

  vo: Vo;

  availableRoles: Role[] = [ Role.VOADMIN, Role.VOOBSERVER, Role.TOPGROUPCREATOR ];

  selected = 'user';

  type = 'Vo';

  theme = 'vo-theme';

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParentParams => {
      const voId = parentParentParams ['voId'];

      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;
      });
    });
  }
}

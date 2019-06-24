import {Component, OnInit} from '@angular/core';
import {VoService} from '../../../../../core/services/api/vo.service';
import {ActivatedRoute} from '@angular/router';
import {Urns} from '../../../../../shared/urns';
import {RichUser} from '../../../../../core/models/RichUser';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-vo-settings-managers',
  templateUrl: './vo-settings-managers.component.html',
  styleUrls: ['./vo-settings-managers.component.scss']
})
export class VoSettingsManagersComponent implements OnInit {

  constructor(
    private voService: VoService,
    private route: ActivatedRoute
  ) { }

  managers: RichUser[] = null;

  selection = new SelectionModel<RichUser>(true, []);

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParentParams => {
      const voId = parentParentParams ['voId'];

      this.voService.getDirectRichAdminsWithSpecificAttributes(voId,
        [Urns.USER_DEF_ORGANIZATION, Urns.USER_DEF_PREFERRED_MAIL]).subscribe(managers => this.managers = managers);
    });
  }

  onAddManager() {

  }

  onRemoveManager() {

  }
}

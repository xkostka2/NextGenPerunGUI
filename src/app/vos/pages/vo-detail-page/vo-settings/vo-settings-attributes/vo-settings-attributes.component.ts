import {SideMenuService} from '../../../../../core/services/common/side-menu.service';
import {VoService} from '../../../../../core/services/api/vo.service';
import {ActivatedRoute} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {Attribute} from '../../../../../core/models/Attribute';
import {AttributesService} from '../../../../../core/services/api/attributes.service';
import {
  DeleteAttributeDialogComponent
} from '../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component';
import {MatDialog} from '@angular/material';
import {
  CreateAttributeDialogComponent
} from '../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component';
import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {AttributesListComponent} from '../../../../../shared/components/attributes-list/attributes-list.component';
import {NotificatorService} from '../../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';
import {filterCoreAttributes} from '../../../../../shared/utils';

@Component({
  selector: 'app-vo-settings-attributes',
  templateUrl: './vo-settings-attributes.component.html',
  styleUrls: ['./vo-settings-attributes.component.scss']
})
export class VoSettingsAttributesComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(private attributesService: AttributesService,
              private sideMenuService: SideMenuService,
              private voService: VoService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private notificator: NotificatorService,
              private translate: TranslateService) {
    this.translate.get('VO_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
    this.translate.get('VO_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
  }

  @ViewChild('list', {static: false})
  list: AttributesListComponent;

  attributes: Attribute[] = [];
  selection = new SelectionModel<Attribute>(true, []);
  voId: number;
  saveSuccessMessage: string;
  deleteSuccessMessage: string;

  loading: boolean;
  filterValue = '';

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParams => {
      this.voId = parentParams['voId'];
      this.refreshTable();
    });
  }

  onDelete() {
    const dialogRef = this.dialog.open(DeleteAttributeDialogComponent, {
      width: '450px',
      data: {
        entityId: this.voId,
        entity: 'vo',
        attributes: this.selection.selected
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  onCreate() {
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, {
      width: '1050px',
      data: {
        entityId: this.voId,
        entity: 'vo',
        notEmptyAttributes: this.attributes,
        style: 'vo-theme'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.refreshTable();
      }
    });
  }

  onSave() {
    // have to use this to update attribute with map in it, before saving it
    this.list.updateMapAttributes();
    this.attributesService.setAttributes(this.voId, 'vo', this.selection.selected).subscribe(() => {
      this.attributesService.getAllAttributes(this.voId, 'vo').subscribe(attributes => {
        this.attributes = filterCoreAttributes(attributes);
        this.notificator.showSuccess(this.saveSuccessMessage);
        this.selection.clear();
      });
    });
  }

  refreshTable() {
    this.loading = true;
    this.attributesService.getAllAttributes(this.voId, 'vo').subscribe(attributes => {
      this.attributes = filterCoreAttributes(attributes);
      this.selection.clear();
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }
}

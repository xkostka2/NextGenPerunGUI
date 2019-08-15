import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Attribute} from '../../../../../core/models/Attribute';
import {AttributesService} from '../../../../../core/services/api/attributes.service';
import {filterCoreAttributes} from '../../../../../shared/utils';
import {SelectionModel} from '@angular/cdk/collections';
import {AttributesListComponent} from '../../../../../shared/components/attributes-list/attributes-list.component';
import {NotificatorService} from '../../../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from '@angular/material';
import {
  CreateAttributeDialogComponent
} from '../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component';
import {
  DeleteAttributeDialogComponent
} from '../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component';

@Component({
  selector: 'app-group-settings-attributes',
  templateUrl: './group-settings-attributes.component.html',
  styleUrls: ['./group-settings-attributes.component.scss']
})
export class GroupSettingsAttributesComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(
    private route: ActivatedRoute,
    private attributesService: AttributesService,
    private notificator: NotificatorService,
    private dialog: MatDialog,
    private translate: TranslateService,
  ) {
    this.translate.get('GROUP_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
    this.translate.get('GROUP_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
  }

  @ViewChild('list', {static: false})
  list: AttributesListComponent;

  saveSuccessMessage: string;
  deleteSuccessMessage: string;
  selection = new SelectionModel<Attribute>(true, []);
  attributes: Attribute[] = [];
  groupId: number;

  ngOnInit() {
    this.route.parent.parent.params.subscribe(params => {
      this.groupId = params['groupId'];
      this.attributesService.getAllAttributes(this.groupId, 'group').subscribe(attributes => {
        this.attributes = filterCoreAttributes(attributes);
      });
    });
  }

  onCreate() {
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, {
      width: '1050px',
      data: {
        entityId: this.groupId,
        entity: 'group',
        notEmptyAttributes: this.attributes,
        style: 'group-theme'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.attributesService.getAllAttributes(this.groupId, 'group').subscribe(attributes => {
          this.attributes = filterCoreAttributes(attributes);
          this.selection.clear();
        });
      }
    });
  }

  onSave() {
    // have to use this to update attribute with map in it, before saving it
    this.list.updateMapAttributes();
    this.attributesService.setAttributes(this.groupId, 'group', this.selection.selected).subscribe(() => {
      this.attributesService.getAllAttributes(this.groupId, 'group').subscribe(attributes => {
        this.attributes = filterCoreAttributes(attributes);
        this.notificator.showSuccess(this.saveSuccessMessage);
        this.selection.clear();
      });
    });
  }

  onDelete() {
    const dialogRef = this.dialog.open(DeleteAttributeDialogComponent, {
      width: '450px',
      data: {
        entityId: this.groupId,
        entity: 'group',
        attributes: this.selection.selected
      }
    });

    dialogRef.afterClosed().subscribe(didConfirm => {
      if (didConfirm) {
        this.attributesService.getAllAttributes(this.groupId, 'group').subscribe(attributes => {
          this.attributes = filterCoreAttributes(attributes);
          this.selection.clear();
        });
      }
    });
  }
}

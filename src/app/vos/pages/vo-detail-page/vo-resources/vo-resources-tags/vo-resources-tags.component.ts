import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResourcesService} from '../../../../../core/services/api/resources.service';
import {ResourceTag} from '../../../../../core/models/ResourceTag';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {
  CreateResourceTagDialogComponent
} from '../../../../../shared/components/dialogs/create-resource-tag-dialog/create-resource-tag-dialog.component';
import {
  DeleteResourceTagDialogComponent
} from '../../../../../shared/components/dialogs/delete-resource-tag-dialog/delete-resource-tag-dialog.component';
import {TranslateService} from '@ngx-translate/core';
import {NotificatorService} from '../../../../../core/services/common/notificator.service';
import {CustomIconService} from '../../../../../core/services/api/custom-icon.service';

@Component({
  selector: 'app-vo-resources-tags',
  templateUrl: './vo-resources-tags.component.html',
  styleUrls: ['./vo-resources-tags.component.scss']
})
export class VoResourcesTagsComponent implements OnInit {

  @HostBinding('class.router-component') true;

  constructor(private route: ActivatedRoute,
              private resourceService: ResourcesService,
              private dialog: MatDialog,
              private notificator: NotificatorService,
              private translator: TranslateService,
              private customIconService: CustomIconService) { }

  loading = false;
  resourceTag: ResourceTag[] = [];
  voId: number;

  selection = new SelectionModel<ResourceTag>(true, []);
  isChanging = new SelectionModel<ResourceTag>(true, []);

  displayedColumns: string[] = ['select', 'id', 'name', 'edit'];
  dataSource: MatTableDataSource<ResourceTag>;

  ngOnInit() {
    this.customIconService.registerPerunRefreshIcon();
    this.loading = true;
    this.route.parent.parent.params.subscribe(parentParams => {
      this.voId = parentParams['voId'];
      this.updateData();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: ResourceTag): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  edit(row?: ResourceTag) {
    this.isChanging.select(row);
  }

  deleteTag() {
    const dialogRef = this.dialog.open(DeleteResourceTagDialogComponent, {
      width: '450px',
      data: {tagsForDelete: this.selection.selected}
    });

    dialogRef.afterClosed().subscribe( success => {
      if (success) {
        this.translator.get('VO_DETAIL.RESOURCES.TAGS.DELETE_SUCCESS').subscribe( text => {
          this.notificator.showSuccess(text);
        });
        this.updateData();
      }
    });
  }

  create() {
    const dialogRef = this.dialog.open(CreateResourceTagDialogComponent, {
      width: '450px',
      data: {voId: this.voId}
    });

    dialogRef.afterClosed().subscribe( success => {
      if (success) {
        this.translator.get('VO_DETAIL.RESOURCES.TAGS.CREATE_SUCCESS').subscribe( text => {
          this.notificator.showSuccess(text);
        });
        this.updateData();
      }
    });
  }

  save(tag: ResourceTag) {
    this.resourceService.updateResourceTag(tag).subscribe( () => {
      this.translator.get('VO_DETAIL.RESOURCES.TAGS.EDIT_SUCCESS').subscribe( text => {
        this.notificator.showSuccess(text);
      });
      this.isChanging.deselect(tag);
    });
  }

  updateData() {
    this.loading = true;
    this.selection.clear();
    this.resourceService.getAllResourcesTagsForVo(this.voId).subscribe(tags => {
      this.resourceTag = tags;
      this.dataSource = new MatTableDataSource<ResourceTag>(this.resourceTag);
      this.loading = false;
    });
  }
}

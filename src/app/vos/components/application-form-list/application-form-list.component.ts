import {Component, Input, OnChanges, SimpleChanges, ViewChild, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import {ApplicationForm} from '../../../core/models/ApplicationForm';
import {ApplicationFormItem} from '../../../core/models/ApplicationFormItem';
import {MatDialog, MatTable} from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {RegistrarService} from '../../../core/services/api/registrar.service';
import {
  DeleteApplicationFormItemDialogComponent
} from '../../../shared/components/dialogs/delete-application-form-item-dialog/delete-application-form-item-dialog.component';
import {NotificatorService} from '../../../core/services/common/notificator.service';
import {TranslateService} from '@ngx-translate/core';
import {
  EditApplicationFormItemDialogComponent
} from '../../../shared/components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component';

@Component({
  selector: 'app-application-form-list',
  templateUrl: './application-form-list.component.html',
  styleUrls: ['./application-form-list.component.scss']
})
export class ApplicationFormListComponent implements OnChanges {

  constructor(private registrarService: RegistrarService,
              private dialog: MatDialog,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private changeDetectorRef: ChangeDetectorRef) { }

  @Input()
  loading: boolean;

  @Input()
  applicationForm: ApplicationForm;

  @Input()
  applicationFormItems: ApplicationFormItem[] = [];

  @Output()
  applicationFormItemsChange = new EventEmitter<ApplicationFormItem[]>();

  dataSource = this.applicationFormItems;
  displayedColumns: string[] = ['shortname', 'type', 'preview', 'edit', 'delete'];
  @ViewChild('table', { static: false }) table: MatTable<ApplicationFormItem>;

  mapForCombobox: Map<number, string> = new Map();

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = this.applicationFormItems;
    this.changeDetectorRef.detectChanges();       // fix - when data in table changes, error appears
  }

  edit(applicationFormItem: ApplicationFormItem) {
    const editDialog = this.dialog.open(EditApplicationFormItemDialogComponent, {
      width: '600px',
      height: '600px',
      data: {voId: this.applicationForm.vo.id, applicationFormItem: applicationFormItem, applicationFormItems: this.applicationFormItems}
    });
    editDialog.afterClosed().subscribe((isChanged) => {
      if (isChanged) {
        this.registrarService.getFormItems(this.applicationForm.vo.id).subscribe( formItems => {
          this.applicationFormItems = formItems;
          this.updateDataSource();
        });
      }
    });
  }

  delete(applicationFormItem: ApplicationFormItem) {
    const dialog = this.dialog.open(DeleteApplicationFormItemDialogComponent, {
      width: '500px'
    });
    dialog.afterClosed().subscribe(deleteItem => {
      if (deleteItem) {
        applicationFormItem.forDelete = true;
        this.decreaseOrdnums(applicationFormItem.ordnum);
        const index = this.applicationFormItems.indexOf(applicationFormItem, 0);
        this.registrarService.updateFormItems(this.applicationForm.vo.id, this.applicationFormItems).subscribe(() => {
          this.registrarService.getFormItems(this.applicationForm.vo.id).subscribe( items => {
            this.applicationFormItems = items;
            this.translate.get('VO_DETAIL.SETTINGS.APPLICATION_FORM.DELETE_MESSAGE').subscribe( successMessage => {
              this.notificator.showSuccess(successMessage);
              this.updateDataSource();
            });
          });
        });

      }
    });
  }

  drop(event: CdkDragDrop<ApplicationFormItem[]>) {
    const prevIndex = this.applicationFormItems.findIndex((d) => d === event.item.data);
    moveItemInArray(this.applicationFormItems, prevIndex, event.currentIndex);
    for (let i = 0; i < this.applicationFormItems.length; i++) {
      this.applicationFormItems[i].ordnum = i;
    }
    this.dataSource = this.applicationFormItems;
    this.changeDetectorRef.detectChanges();       // fix - when data in table changes, error appears
    this.table.renderRows();
    this.registrarService.updateFormItems(this.applicationForm.vo.id, this.applicationFormItems).subscribe( () => {
      this.applicationFormItemsChange.emit(this.applicationFormItems);
    });
  }

  getLocalizedOptions(applicationFormItem: ApplicationFormItem): string[] {
    if (applicationFormItem.i18n[this.translate.getDefaultLang()]) {
      const options = applicationFormItem.i18n[this.translate.getDefaultLang()].options;
      if (options !== null && options !== '') {
        const labels: string[] = [];
        for (const item of options.split('|')) {
          labels.push(item.split('#')[1]);
        }
        return labels;
      }
    }
    return [];
  }

  updateDataSource() {
    this.dataSource = this.applicationFormItems;
    this.applicationFormItemsChange.emit(this.applicationFormItems);
    this.changeDetectorRef.detectChanges();       // fix - when data in table changes, error appears
    this.table.renderRows();
  }

  decreaseOrdnums(index: number) {
    for (let i = index + 1; i < this.applicationFormItems.length; i++) {
      this.applicationFormItems[i].ordnum--;
    }
  }

  getLocalizedLabel(applicationFormItem: ApplicationFormItem): string {
    if (applicationFormItem.i18n[this.translate.getDefaultLang()]) {
      return applicationFormItem.i18n[this.translate.getDefaultLang()].label;
    }
    return applicationFormItem.shortname;
  }
}

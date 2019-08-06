import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormCopyItemsDialogComponent } from './application-form-copy-items-dialog.component';

describe('ApplicationFormCopyItemsDialogComponent', () => {
  let component: ApplicationFormCopyItemsDialogComponent;
  let fixture: ComponentFixture<ApplicationFormCopyItemsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFormCopyItemsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormCopyItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

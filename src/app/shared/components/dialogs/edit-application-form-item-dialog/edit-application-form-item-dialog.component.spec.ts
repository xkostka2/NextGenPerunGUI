import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApplicationFormItemDialogComponent } from './edit-application-form-item-dialog.component';

describe('EditApplicationFormItemDialogComponent', () => {
  let component: EditApplicationFormItemDialogComponent;
  let fixture: ComponentFixture<EditApplicationFormItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditApplicationFormItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApplicationFormItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

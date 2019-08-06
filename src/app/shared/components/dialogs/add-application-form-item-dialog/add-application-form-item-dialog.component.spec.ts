import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationFormItemDialogComponent } from './add-application-form-item-dialog.component';

describe('AddApplicationFormItemDialogComponent', () => {
  let component: AddApplicationFormItemDialogComponent;
  let fixture: ComponentFixture<AddApplicationFormItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApplicationFormItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationFormItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

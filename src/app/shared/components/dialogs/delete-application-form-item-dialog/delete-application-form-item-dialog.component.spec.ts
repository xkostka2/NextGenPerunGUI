import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApplicationFormItemDialogComponent } from './delete-application-form-item-dialog.component';

describe('DeleteApplicationFormItemDialogComponent', () => {
  let component: DeleteApplicationFormItemDialogComponent;
  let fixture: ComponentFixture<DeleteApplicationFormItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteApplicationFormItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteApplicationFormItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

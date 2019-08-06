import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApplicationFormMailDialogComponent } from './delete-application-form-mail-dialog.component';

describe('DeleteApplicationFormMailDialogComponent', () => {
  let component: DeleteApplicationFormMailDialogComponent;
  let fixture: ComponentFixture<DeleteApplicationFormMailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteApplicationFormMailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteApplicationFormMailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

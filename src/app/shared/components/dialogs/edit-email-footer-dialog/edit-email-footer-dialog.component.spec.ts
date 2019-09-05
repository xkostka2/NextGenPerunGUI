import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailFooterDialogComponent } from './edit-email-footer-dialog.component';

describe('EditEmailFooterDialogComponent', () => {
  let component: EditEmailFooterDialogComponent;
  let fixture: ComponentFixture<EditEmailFooterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmailFooterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailFooterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

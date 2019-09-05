import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNotificationDialogComponent } from './delete-notification-dialog.component';

describe('DeleteNotificationDialogComponent', () => {
  let component: DeleteNotificationDialogComponent;
  let fixture: ComponentFixture<DeleteNotificationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNotificationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNotificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

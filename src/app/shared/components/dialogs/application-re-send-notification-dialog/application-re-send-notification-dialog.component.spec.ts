import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReSendNotificationDialogComponent } from './application-re-send-notification-dialog.component';

describe('ApplicationReSendNotificationDialogComponent', () => {
  let component: ApplicationReSendNotificationDialogComponent;
  let fixture: ComponentFixture<ApplicationReSendNotificationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationReSendNotificationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationReSendNotificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsCopyMailsDialogComponent } from './notifications-copy-mails-dialog.component';

describe('NotificationsCopyMailsDialogComponent', () => {
  let component: NotificationsCopyMailsDialogComponent;
  let fixture: ComponentFixture<NotificationsCopyMailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsCopyMailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsCopyMailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

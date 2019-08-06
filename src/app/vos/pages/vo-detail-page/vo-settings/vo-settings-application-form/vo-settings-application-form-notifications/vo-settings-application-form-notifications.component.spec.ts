import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsApplicationFormNotificationsComponent } from './vo-settings-application-form-notifications.component';

describe('VoSettingsApplicationFormNotificationsComponent', () => {
  let component: VoSettingsApplicationFormNotificationsComponent;
  let fixture: ComponentFixture<VoSettingsApplicationFormNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsApplicationFormNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsApplicationFormNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsNotificationsComponent } from './vo-settings-notifications.component';

describe('VoSettingsNotificationsComponent', () => {
  let component: VoSettingsNotificationsComponent;
  let fixture: ComponentFixture<VoSettingsNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

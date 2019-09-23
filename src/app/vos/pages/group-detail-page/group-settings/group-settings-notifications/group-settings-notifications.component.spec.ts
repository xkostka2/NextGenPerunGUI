import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSettingsNotificationsComponent } from './group-settings-notifications.component';

describe('GroupSettingsNotificationsComponent', () => {
  let component: GroupSettingsNotificationsComponent;
  let fixture: ComponentFixture<GroupSettingsNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSettingsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSettingsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

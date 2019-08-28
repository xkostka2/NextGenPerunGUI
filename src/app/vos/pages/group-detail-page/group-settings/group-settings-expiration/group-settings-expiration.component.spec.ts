import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSettingsExpirationComponent } from './group-settings-expiration.component';

describe('GroupSettingsExpirationComponent', () => {
  let component: GroupSettingsExpirationComponent;
  let fixture: ComponentFixture<GroupSettingsExpirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSettingsExpirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSettingsExpirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSettingsManagersComponent } from './group-settings-managers.component';

describe('GroupSettingsManagersComponent', () => {
  let component: GroupSettingsManagersComponent;
  let fixture: ComponentFixture<GroupSettingsManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSettingsManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSettingsManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

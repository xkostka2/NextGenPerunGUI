import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSettingsOverviewComponent } from './group-settings-overview.component';

describe('GroupSettingsOverviewComponent', () => {
  let component: GroupSettingsOverviewComponent;
  let fixture: ComponentFixture<GroupSettingsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSettingsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSettingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSettingsApplicationFormComponent } from './group-settings-application-form.component';

describe('GroupSettingsApplicationFormComponent', () => {
  let component: GroupSettingsApplicationFormComponent;
  let fixture: ComponentFixture<GroupSettingsApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSettingsApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSettingsApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

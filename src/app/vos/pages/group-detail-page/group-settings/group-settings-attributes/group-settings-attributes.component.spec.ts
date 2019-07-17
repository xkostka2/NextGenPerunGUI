import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSettingsAttributesComponent } from './group-settings-attributes.component';

describe('GroupSettingsAttributesComponent', () => {
  let component: GroupSettingsAttributesComponent;
  let fixture: ComponentFixture<GroupSettingsAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSettingsAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSettingsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

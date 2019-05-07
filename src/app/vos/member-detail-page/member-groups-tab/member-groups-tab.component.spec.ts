import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberGroupsTabComponent } from './member-groups-tab.component';

describe('MemberGroupsTabComponent', () => {
  let component: MemberGroupsTabComponent;
  let fixture: ComponentFixture<MemberGroupsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberGroupsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberGroupsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

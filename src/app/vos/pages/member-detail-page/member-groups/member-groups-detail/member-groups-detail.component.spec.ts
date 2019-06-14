import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberGroupsDetailComponent } from './member-groups-detail.component';

describe('MemberGroupsDetailComponent', () => {
  let component: MemberGroupsDetailComponent;
  let fixture: ComponentFixture<MemberGroupsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberGroupsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberGroupsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

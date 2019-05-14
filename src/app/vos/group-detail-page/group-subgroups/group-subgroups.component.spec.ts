import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSubgroupsComponent } from './group-subgroups.component';

describe('GroupSubgroupsComponent', () => {
  let component: GroupSubgroupsComponent;
  let fixture: ComponentFixture<GroupSubgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSubgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSubgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

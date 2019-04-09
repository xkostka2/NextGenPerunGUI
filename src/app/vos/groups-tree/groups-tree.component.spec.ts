import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsTreeComponent } from './groups-tree.component';

describe('VoGroupsPageComponent', () => {
  let component: GroupsTreeComponent;
  let fixture: ComponentFixture<GroupsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

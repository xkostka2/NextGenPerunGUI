import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailPageComponent } from './group-detail-page.component';

describe('VoGroupsPageComponent', () => {
  let component: GroupDetailPageComponent;
  let fixture: ComponentFixture<GroupDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

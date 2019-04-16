import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoGroupsTabComponent } from './vo-groups-tab.component';

describe('VoGroupsTabComponent', () => {
  let component: VoGroupsTabComponent;
  let fixture: ComponentFixture<VoGroupsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoGroupsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoGroupsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

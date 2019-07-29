import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityAllowedGroupsComponent } from './facility-allowed-groups.component';

describe('FacilityAllowedGroupsComponent', () => {
  let component: FacilityAllowedGroupsComponent;
  let fixture: ComponentFixture<FacilityAllowedGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityAllowedGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityAllowedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

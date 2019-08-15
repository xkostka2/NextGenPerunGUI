import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySettingsOverviewComponent } from './facility-settings-overview.component';

describe('FacilitySettingsOverviewComponent', () => {
  let component: FacilitySettingsOverviewComponent;
  let fixture: ComponentFixture<FacilitySettingsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitySettingsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitySettingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

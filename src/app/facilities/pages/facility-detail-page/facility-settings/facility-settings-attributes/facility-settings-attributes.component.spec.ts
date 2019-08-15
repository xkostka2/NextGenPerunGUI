import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySettingsAttributesComponent } from './facility-settings-attributes.component';

describe('FacilitySettingsAttributesComponent', () => {
  let component: FacilitySettingsAttributesComponent;
  let fixture: ComponentFixture<FacilitySettingsAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitySettingsAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitySettingsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

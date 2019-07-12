import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityResourcesComponent } from './facility-resources.component';

describe('FacilityResourcesComponent', () => {
  let component: FacilityResourcesComponent;
  let fixture: ComponentFixture<FacilityResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

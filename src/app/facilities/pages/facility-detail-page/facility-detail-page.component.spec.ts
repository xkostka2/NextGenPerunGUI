import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDetailPageComponent } from './facility-detail-page.component';

describe('FacilityDetailPageComponent', () => {
  let component: FacilityDetailPageComponent;
  let fixture: ComponentFixture<FacilityDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

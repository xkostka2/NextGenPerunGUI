import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySelectPageComponent } from './facility-select-page.component';

describe('FacilitySelectPageComponent', () => {
  let component: FacilitySelectPageComponent;
  let fixture: ComponentFixture<FacilitySelectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitySelectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitySelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

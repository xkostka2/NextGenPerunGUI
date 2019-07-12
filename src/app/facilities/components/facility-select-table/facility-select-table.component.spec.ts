import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySelectTableComponent } from './facility-select-table.component';

describe('FacilitySelectTableComponent', () => {
  let component: FacilitySelectTableComponent;
  let fixture: ComponentFixture<FacilitySelectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitySelectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitySelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

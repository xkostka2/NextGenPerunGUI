import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateFilterComponent } from './immediate-filter.component';

describe('ImmediateFilterComponent', () => {
  let component: ImmediateFilterComponent;
  let fixture: ComponentFixture<ImmediateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmediateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmediateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

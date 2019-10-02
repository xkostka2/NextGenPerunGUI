import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceFilterComponent } from './debounce-filter.component';

describe('DebounceFilterComponent', () => {
  let component: DebounceFilterComponent;
  let fixture: ComponentFixture<DebounceFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

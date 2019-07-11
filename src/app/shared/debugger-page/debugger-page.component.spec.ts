import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggerPageComponent } from './debugger-page.component';

describe('DebuggerPageComponent', () => {
  let component: DebuggerPageComponent;
  let fixture: ComponentFixture<DebuggerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebuggerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebuggerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

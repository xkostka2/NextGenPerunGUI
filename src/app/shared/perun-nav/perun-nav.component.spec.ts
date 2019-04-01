import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerunNavComponent } from './perun-nav.component';

describe('SideMenuComponent', () => {
  let component: PerunNavComponent;
  let fixture: ComponentFixture<PerunNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerunNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerunNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

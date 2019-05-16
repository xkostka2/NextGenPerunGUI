import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoApplicationsComponent } from './vo-applications.component';

describe('VoApplicationsComponent', () => {
  let component: VoApplicationsComponent;
  let fixture: ComponentFixture<VoApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

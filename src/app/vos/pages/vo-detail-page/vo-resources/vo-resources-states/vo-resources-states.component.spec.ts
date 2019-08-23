import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoResourcesStatesComponent } from './vo-resources-states.component';

describe('VoResourcesStatesComponent', () => {
  let component: VoResourcesStatesComponent;
  let fixture: ComponentFixture<VoResourcesStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoResourcesStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoResourcesStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

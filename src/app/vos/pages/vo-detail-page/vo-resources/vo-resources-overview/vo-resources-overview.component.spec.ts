import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoResourcesOverviewComponent } from './vo-resources-overview.component';

describe('VoResourcesOverviewComponent', () => {
  let component: VoResourcesOverviewComponent;
  let fixture: ComponentFixture<VoResourcesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoResourcesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoResourcesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

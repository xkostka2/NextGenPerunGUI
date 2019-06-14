import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoResourcesComponent } from './vo-resources.component';

describe('VoResourcesComponent', () => {
  let component: VoResourcesComponent;
  let fixture: ComponentFixture<VoResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

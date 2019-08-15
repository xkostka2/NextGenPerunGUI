import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSettingsOverviewComponent } from './resource-settings-overview.component';

describe('ResourceSettingsOverviewComponent', () => {
  let component: ResourceSettingsOverviewComponent;
  let fixture: ComponentFixture<ResourceSettingsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceSettingsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSettingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

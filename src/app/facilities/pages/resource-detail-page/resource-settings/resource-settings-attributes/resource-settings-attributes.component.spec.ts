import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSettingsAttributesComponent } from './resource-settings-attributes.component';

describe('ResourceSettingsAttributesComponent', () => {
  let component: ResourceSettingsAttributesComponent;
  let fixture: ComponentFixture<ResourceSettingsAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceSettingsAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSettingsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

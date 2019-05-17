import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsAttributesComponent } from './vo-settings-attributes.component';

describe('VoSettingsAttributesComponent', () => {
  let component: VoSettingsAttributesComponent;
  let fixture: ComponentFixture<VoSettingsAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

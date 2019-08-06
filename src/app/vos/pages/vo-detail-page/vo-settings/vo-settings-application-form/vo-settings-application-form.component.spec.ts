import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsApplicationFormComponent } from './vo-settings-application-form.component';

describe('VoSettingsApplicationFormComponent', () => {
  let component: VoSettingsApplicationFormComponent;
  let fixture: ComponentFixture<VoSettingsApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

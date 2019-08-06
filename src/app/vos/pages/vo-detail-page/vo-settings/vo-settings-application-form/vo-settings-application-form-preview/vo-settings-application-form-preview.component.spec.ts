import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsApplicationFormPreviewComponent } from './vo-settings-application-form-preview.component';

describe('VoSettingsApplicationFormPreviewComponent', () => {
  let component: VoSettingsApplicationFormPreviewComponent;
  let fixture: ComponentFixture<VoSettingsApplicationFormPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsApplicationFormPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsApplicationFormPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsComponent } from './vo-settings.component';

describe('VoSettingsComponent', () => {
  let component: VoSettingsComponent;
  let fixture: ComponentFixture<VoSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

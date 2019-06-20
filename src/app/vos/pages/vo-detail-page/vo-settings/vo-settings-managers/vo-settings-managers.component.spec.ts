import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsManagersComponent } from './vo-settings-managers.component';

describe('VoSettingsManagersComponent', () => {
  let component: VoSettingsManagersComponent;
  let fixture: ComponentFixture<VoSettingsManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

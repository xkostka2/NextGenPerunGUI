import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsOverviewComponent } from './vo-settings-overview.component';

describe('VoSettingsOverviewComponent', () => {
  let component: VoSettingsOverviewComponent;
  let fixture: ComponentFixture<VoSettingsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

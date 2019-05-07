import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoOverviewTabComponent } from './vo-overview-tab.component';

describe('VoQuickActionsComponent', () => {
  let component: VoOverviewTabComponent;
  let fixture: ComponentFixture<VoOverviewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoOverviewTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoOverviewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

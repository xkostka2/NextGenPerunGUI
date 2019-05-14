import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoOverviewComponent } from './vo-overview.component';

describe('VoQuickActionsComponent', () => {
  let component: VoOverviewComponent;
  let fixture: ComponentFixture<VoOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

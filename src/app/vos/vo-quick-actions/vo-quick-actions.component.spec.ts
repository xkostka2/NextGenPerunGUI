import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoQuickActionsComponent } from './vo-quick-actions.component';

describe('VoQuickActionsComponent', () => {
  let component: VoQuickActionsComponent;
  let fixture: ComponentFixture<VoQuickActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoQuickActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoQuickActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

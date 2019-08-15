import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSettingsOverviewComponent } from './member-settings-overview.component';

describe('MemberSettingsOverviewComponent', () => {
  let component: MemberSettingsOverviewComponent;
  let fixture: ComponentFixture<MemberSettingsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSettingsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSettingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

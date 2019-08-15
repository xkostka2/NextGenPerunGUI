import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSettingsAttributesComponent } from './member-settings-attributes.component';

describe('MemberSettingsAttributesComponent', () => {
  let component: MemberSettingsAttributesComponent;
  let fixture: ComponentFixture<MemberSettingsAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSettingsAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSettingsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

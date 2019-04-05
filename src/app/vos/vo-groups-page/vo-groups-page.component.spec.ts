import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoGroupsPageComponent } from './vo-groups-page.component';

describe('VoGroupsPageComponent', () => {
  let component: VoGroupsPageComponent;
  let fixture: ComponentFixture<VoGroupsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoGroupsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoGroupsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

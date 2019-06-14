import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoGroupsComponent } from './vo-groups.component';

describe('VoGroupsTabComponent', () => {
  let component: VoGroupsComponent;
  let fixture: ComponentFixture<VoGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

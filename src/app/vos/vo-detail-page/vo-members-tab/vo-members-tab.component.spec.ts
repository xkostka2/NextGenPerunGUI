import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoMembersTabComponent } from './vo-members-tab.component';

describe('VoMembersTabComponent', () => {
  let component: VoMembersTabComponent;
  let fixture: ComponentFixture<VoMembersTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoMembersTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoMembersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

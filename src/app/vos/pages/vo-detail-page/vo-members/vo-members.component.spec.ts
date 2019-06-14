import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoMembersComponent } from './vo-members.component';

describe('VoMembersTabComponent', () => {
  let component: VoMembersComponent;
  let fixture: ComponentFixture<VoMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

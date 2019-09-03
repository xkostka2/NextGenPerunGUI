import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersCandidatesListComponent } from './members-candidates-list.component';

describe('MembersCandidatesListComponent', () => {
  let component: MembersCandidatesListComponent;
  let fixture: ComponentFixture<MembersCandidatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersCandidatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersCandidatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

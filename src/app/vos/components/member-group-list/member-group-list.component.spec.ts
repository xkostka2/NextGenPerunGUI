import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberGroupListComponent } from './member-group-list.component';

describe('MemberGroupListComponent', () => {
  let component: MemberGroupListComponent;
  let fixture: ComponentFixture<MemberGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

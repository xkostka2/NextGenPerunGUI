import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectPageComponent } from './user-select-page.component';

describe('UserSelectPageComponent', () => {
  let component: UserSelectPageComponent;
  let fixture: ComponentFixture<UserSelectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSelectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

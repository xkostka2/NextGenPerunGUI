import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSilentRefreshComponent } from './auth-silent-refresh.component';

describe('AuthSilentRefreshComponent', () => {
  let component: AuthSilentRefreshComponent;
  let fixture: ComponentFixture<AuthSilentRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSilentRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSilentRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormListComponent } from './application-form-list.component';

describe('ApplicationFormListComponent', () => {
  let component: ApplicationFormListComponent;
  let fixture: ComponentFixture<ApplicationFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

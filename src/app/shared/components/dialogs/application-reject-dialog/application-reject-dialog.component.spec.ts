import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRejectDialogComponent } from './application-reject-dialog.component';

describe('ApplicationRejectDialogComponent', () => {
  let component: ApplicationRejectDialogComponent;
  let fixture: ComponentFixture<ApplicationRejectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationRejectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationRejectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

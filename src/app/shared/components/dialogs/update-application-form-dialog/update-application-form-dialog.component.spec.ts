import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplicationFormDialogComponent } from './update-application-form-dialog.component';

describe('UpdateApplicationFormDialogComponent', () => {
  let component: UpdateApplicationFormDialogComponent;
  let fixture: ComponentFixture<UpdateApplicationFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApplicationFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApplicationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

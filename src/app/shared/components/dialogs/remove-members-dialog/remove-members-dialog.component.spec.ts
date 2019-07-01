import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMembersDialogComponent } from './remove-members-dialog.component';

describe('RemoveMembersDialogComponent', () => {
  let component: RemoveMembersDialogComponent;
  let fixture: ComponentFixture<RemoveMembersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMembersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMembersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

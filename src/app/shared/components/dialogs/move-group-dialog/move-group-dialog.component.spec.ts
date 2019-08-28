import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveGroupDialogComponent } from './move-group-dialog.component';

describe('MoveGroupDialogComponent', () => {
  let component: MoveGroupDialogComponent;
  let fixture: ComponentFixture<MoveGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

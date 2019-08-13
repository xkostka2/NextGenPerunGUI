import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveGroupManagerDialogComponent } from './remove-group-manager-dialog.component';

describe('RemoveGroupDialogComponent', () => {
  let component: RemoveGroupManagerDialogComponent;
  let fixture: ComponentFixture<RemoveGroupManagerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveGroupManagerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveGroupManagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveManagerDialogComponent } from './remove-manager-dialog.component';

describe('RemoveManagerDialogComponent', () => {
  let component: RemoveManagerDialogComponent;
  let fixture: ComponentFixture<RemoveManagerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveManagerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveManagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

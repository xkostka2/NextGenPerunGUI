import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceTagDialogComponent } from './delete-resource-tag-dialog.component';

describe('DeleteResourceTagDialogComponent', () => {
  let component: DeleteResourceTagDialogComponent;
  let fixture: ComponentFixture<DeleteResourceTagDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceTagDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceTagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

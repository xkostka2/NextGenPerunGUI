import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResourceTagDialogComponent } from './create-resource-tag-dialog.component';

describe('CreateResourceTagDialogComponent', () => {
  let component: CreateResourceTagDialogComponent;
  let fixture: ComponentFixture<CreateResourceTagDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResourceTagDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResourceTagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

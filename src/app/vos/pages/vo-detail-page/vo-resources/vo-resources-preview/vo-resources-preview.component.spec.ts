import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoResourcesPreviewComponent } from './vo-resources-preview.component';

describe('VoResourcesListComponent', () => {
  let component: VoResourcesPreviewComponent;
  let fixture: ComponentFixture<VoResourcesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoResourcesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoResourcesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoResourcesTagsComponent } from './vo-resources-tags.component';

describe('VoResourcesTagsComponent', () => {
  let component: VoResourcesTagsComponent;
  let fixture: ComponentFixture<VoResourcesTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoResourcesTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoResourcesTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

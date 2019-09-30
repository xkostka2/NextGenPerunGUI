import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesTagsListComponent } from './resources-tags-list.component';

describe('ResourcesTagsListComponent', () => {
  let component: ResourcesTagsListComponent;
  let fixture: ComponentFixture<ResourcesTagsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesTagsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesTagsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

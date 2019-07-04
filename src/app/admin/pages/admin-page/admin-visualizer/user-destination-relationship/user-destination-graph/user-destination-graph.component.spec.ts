import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDestinationGraphComponent } from './user-destination-graph.component';

describe('UserDestinationGraphComponent', () => {
  let component: UserDestinationGraphComponent;
  let fixture: ComponentFixture<UserDestinationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDestinationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDestinationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

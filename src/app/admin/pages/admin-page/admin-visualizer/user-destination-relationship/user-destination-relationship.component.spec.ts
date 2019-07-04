import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDestinationRelationshipComponent } from './user-destination-relationship.component';

describe('UserDestinationRelationshipComponent', () => {
  let component: UserDestinationRelationshipComponent;
  let fixture: ComponentFixture<UserDestinationRelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDestinationRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDestinationRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

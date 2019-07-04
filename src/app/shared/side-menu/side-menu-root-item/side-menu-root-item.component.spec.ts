import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuRootItemComponent } from './side-menu-root-item.component';

describe('SideMenuMainItemComponent', () => {
  let component: SideMenuRootItemComponent;
  let fixture: ComponentFixture<SideMenuRootItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuRootItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuRootItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

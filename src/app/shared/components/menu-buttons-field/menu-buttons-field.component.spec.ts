import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtonsFieldComponent } from './menu-buttons-field.component';

describe('MenuButtonsFieldComponent', () => {
  let component: MenuButtonsFieldComponent;
  let fixture: ComponentFixture<MenuButtonsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuButtonsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuButtonsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

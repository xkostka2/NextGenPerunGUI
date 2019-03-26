import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSelectPageComponent } from './vo-select-page.component';

describe('VoSelectPageComponent', () => {
  let component: VoSelectPageComponent;
  let fixture: ComponentFixture<VoSelectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSelectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

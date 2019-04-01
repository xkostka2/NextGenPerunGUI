import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoDetailPageComponent } from './vo-detail-page.component';

describe('VoDetailPageComponent', () => {
  let component: VoDetailPageComponent;
  let fixture: ComponentFixture<VoDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

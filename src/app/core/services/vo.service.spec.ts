import { TestBed } from '@angular/core/testing';

import { VoService } from './vo.service';

describe('VoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoService = TestBed.get(VoService);
    expect(service).toBeTruthy();
  });
});

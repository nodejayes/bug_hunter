import { TestBed } from '@angular/core/testing';

import { RightService } from './right.service';

describe('RightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RightService = TestBed.get(RightService);
    expect(service).toBeTruthy();
  });
});

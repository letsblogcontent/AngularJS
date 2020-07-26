import { TestBed } from '@angular/core/testing';

import { TeserviceService } from './teservice.service';

describe('TeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeserviceService = TestBed.get(TeserviceService);
    expect(service).toBeTruthy();
  });
});

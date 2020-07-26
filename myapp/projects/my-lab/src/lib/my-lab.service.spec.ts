import { TestBed } from '@angular/core/testing';

import { MyLabService } from './my-lab.service';

describe('MyLabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLabService = TestBed.get(MyLabService);
    expect(service).toBeTruthy();
  });
});

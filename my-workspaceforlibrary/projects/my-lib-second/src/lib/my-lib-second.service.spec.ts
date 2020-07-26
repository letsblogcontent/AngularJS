import { TestBed } from '@angular/core/testing';

import { MyLibSecondService } from './my-lib-second.service';

describe('MyLibSecondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLibSecondService = TestBed.get(MyLibSecondService);
    expect(service).toBeTruthy();
  });
});

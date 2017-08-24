import { TestBed, inject } from '@angular/core/testing';

import { RandomNumService } from './random-num.service';

describe('RandomNumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomNumService]
    });
  });

  it('should be created', inject([RandomNumService], (service: RandomNumService) => {
    expect(service).toBeTruthy();
  }));
});

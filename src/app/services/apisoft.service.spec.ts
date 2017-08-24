import { TestBed, inject } from '@angular/core/testing';

import { ApisoftService } from './apisoft.service';

describe('ApisoftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApisoftService]
    });
  });

  it('should be created', inject([ApisoftService], (service: ApisoftService) => {
    expect(service).toBeTruthy();
  }));
});

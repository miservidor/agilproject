import { TestBed, inject } from '@angular/core/testing';

import { ApiServService } from './api-serv.service';

describe('ApiServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiServService]
    });
  });

  it('should be created', inject([ApiServService], (service: ApiServService) => {
    expect(service).toBeTruthy();
  }));
});

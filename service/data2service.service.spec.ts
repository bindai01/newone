import { TestBed } from '@angular/core/testing';

import { Data2serviceService } from './data2service.service';

describe('Data2serviceService', () => {
  let service: Data2serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data2serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

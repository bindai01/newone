import { TestBed } from '@angular/core/testing';

import { PracticeDataService } from './practice-data.service';

describe('PracticeDataService', () => {
  let service: PracticeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

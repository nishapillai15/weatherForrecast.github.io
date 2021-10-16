import { TestBed } from '@angular/core/testing';

import { ForrecastService } from './forrecast.service';

describe('ForrecastService', () => {
  let service: ForrecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForrecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

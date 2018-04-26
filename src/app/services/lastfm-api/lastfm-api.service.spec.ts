import { TestBed, inject } from '@angular/core/testing';

import { LastfmApiService } from './lastfm-api.service';

describe('LastfmApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastfmApiService]
    });
  });

  it('should be created', inject([LastfmApiService], (service: LastfmApiService) => {
    expect(service).toBeTruthy();
  }));
});

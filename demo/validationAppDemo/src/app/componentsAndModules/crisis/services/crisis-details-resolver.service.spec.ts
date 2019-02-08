import { TestBed } from '@angular/core/testing';

import { CrisisDetailsResolverService } from './crisis-details-resolver.service';

describe('CrisisDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrisisDetailsResolverService = TestBed.get(CrisisDetailsResolverService);
    expect(service).toBeTruthy();
  });
});

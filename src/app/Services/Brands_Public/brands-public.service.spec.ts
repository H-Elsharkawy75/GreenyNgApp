import { TestBed } from '@angular/core/testing';

import { BrandsPublicService } from './brands-public.service';

describe('BrandsPublicService', () => {
  let service: BrandsPublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandsPublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

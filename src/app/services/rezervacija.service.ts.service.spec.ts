import { TestBed } from '@angular/core/testing';

import { RezervacijaServiceTsService } from './rezervacija.service.ts.service';

describe('RezervacijaServiceTsService', () => {
  let service: RezervacijaServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezervacijaServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

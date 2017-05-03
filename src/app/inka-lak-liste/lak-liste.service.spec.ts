/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LakListeService } from './lak-liste.service';

describe('LakListeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LakListeService]
    });
  });

  it('should ...', inject([LakListeService], (service: LakListeService) => {
    expect(service).toBeTruthy();
  }));
});

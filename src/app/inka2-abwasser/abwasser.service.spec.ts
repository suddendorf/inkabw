/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbwasserService } from './abwasser.service';

describe('AbwasserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbwasserService]
    });
  });

  it('should ...', inject([AbwasserService], (service: AbwasserService) => {
    expect(service).toBeTruthy();
  }));
});

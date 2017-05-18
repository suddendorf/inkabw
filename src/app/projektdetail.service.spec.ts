/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjektdetailService } from './projektdetail.service';

describe('ProjektdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjektdetailService]
    });
  });

  it('should ...', inject([ProjektdetailService], (service: ProjektdetailService) => {
    expect(service).toBeTruthy();
  }));
});

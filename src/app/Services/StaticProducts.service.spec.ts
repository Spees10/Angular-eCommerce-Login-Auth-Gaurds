/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StaticProductsService } from './StaticProducts.service';

describe('Service: StaticProducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticProductsService]
    });
  });

  it('should ...', inject([StaticProductsService], (service: StaticProductsService) => {
    expect(service).toBeTruthy();
  }));
});

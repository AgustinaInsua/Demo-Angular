import { TestBed } from '@angular/core/testing';

import { CustomValidationsService } from './custom-validations.service';

describe('CustomValidationsService', () => {
  let service: CustomValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

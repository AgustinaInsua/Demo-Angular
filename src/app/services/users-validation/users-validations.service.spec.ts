import { TestBed } from '@angular/core/testing';

import { UsersValidationsService } from './users-validations.service';

describe('UsersValidationsService', () => {
  let service: UsersValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

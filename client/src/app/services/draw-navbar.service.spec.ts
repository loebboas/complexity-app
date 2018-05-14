import { TestBed, inject } from '@angular/core/testing';

import { DrawNavbarService } from './draw-navbar.service';

describe('DrawNavbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawNavbarService]
    });
  });

  it('should be created', inject([DrawNavbarService], (service: DrawNavbarService) => {
    expect(service).toBeTruthy();
  }));
});

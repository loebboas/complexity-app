import { TestBed, inject } from '@angular/core/testing';

import { PerspectivesService } from './perspectives.service';

describe('PerspectivesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerspectivesService]
    });
  });

  it('should be created', inject([PerspectivesService], (service: PerspectivesService) => {
    expect(service).toBeTruthy();
  }));
});

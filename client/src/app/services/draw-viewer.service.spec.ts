import { TestBed, inject } from '@angular/core/testing';

import { DrawViewerService } from './draw-viewer.service';

describe('DrawViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawViewerService]
    });
  });

  it('should be created', inject([DrawViewerService], (service: DrawViewerService) => {
    expect(service).toBeTruthy();
  }));
});

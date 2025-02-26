import { TestBed } from '@angular/core/testing';

import { TestDirService } from './test-dir.service';

describe('TestDirService', () => {
  let service: TestDirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

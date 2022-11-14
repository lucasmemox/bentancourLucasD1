import { TestBed } from '@angular/core/testing';

import { IdentificarmeGuard } from './identificarme.guard';

describe('IdentificarmeGuard', () => {
  let guard: IdentificarmeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdentificarmeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

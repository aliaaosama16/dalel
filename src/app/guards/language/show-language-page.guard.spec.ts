import { TestBed } from '@angular/core/testing';

import { ShowLanguagePageGuard } from './show-language-page.guard';

describe('ShowLanguagePageGuard', () => {
  let guard: ShowLanguagePageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShowLanguagePageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

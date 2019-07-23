import { TestBed } from '@angular/core/testing';

import { Albums } from './albums.service';

describe('Albums.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Albums = TestBed.get(Albums);
    expect(service).toBeTruthy();
  });
});

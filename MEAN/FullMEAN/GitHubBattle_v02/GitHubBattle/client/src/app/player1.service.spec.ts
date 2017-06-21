import { TestBed, inject } from '@angular/core/testing';

import { Player1Service } from './player1.service';

describe('Player1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Player1Service]
    });
  });

  it('should be created', inject([Player1Service], (service: Player1Service) => {
    expect(service).toBeTruthy();
  }));
});

import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { IdeaService } from './idea.service';

describe('IdeaService', () => {
  let service: IdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });

    service = TestBed.inject(IdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FuturamaService } from './futurama.service';

describe('FuturamaService', () => {
  let service: FuturamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [FuturamaService]
    });
    service = TestBed.inject(FuturamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

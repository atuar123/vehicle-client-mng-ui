import { TestBed } from '@angular/core/testing';

import { EmailDomainService } from './email-domain.service';

describe('EmailDomainService', () => {
  let service: EmailDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

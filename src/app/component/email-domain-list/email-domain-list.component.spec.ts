import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDomainListComponent } from './email-domain-list.component';

describe('EmailDomainListComponent', () => {
  let component: EmailDomainListComponent;
  let fixture: ComponentFixture<EmailDomainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailDomainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDomainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

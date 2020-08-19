import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmailDomainComponent } from './create-email-domain.component';

describe('CreateEmailDomainComponent', () => {
  let component: CreateEmailDomainComponent;
  let fixture: ComponentFixture<CreateEmailDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmailDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmailDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

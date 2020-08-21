import { Component, OnInit } from '@angular/core';
import {EmailDomain} from '../../model/email-domain';
import {EmailDomainService} from '../../service/email-domain.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-email-domain',
  templateUrl: './create-email-domain.component.html',
  styleUrls: ['./create-email-domain.component.css']
})
export class CreateEmailDomainComponent implements OnInit {

  emailDomain: EmailDomain = new EmailDomain();
  submitted = false;
  constructor(private emailDomainService: EmailDomainService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.emailDomainService.createDomain(this.emailDomain)
      .subscribe(data => console.log(data), error => console.log(error));
    this.emailDomain = new EmailDomain();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/domainList']);
  }
}

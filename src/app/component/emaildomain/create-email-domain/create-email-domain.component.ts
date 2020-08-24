import { Component, OnInit } from '@angular/core';
import {EmailDomain} from '../../../model/email-domain';
import {EmailDomainService} from '../../../service/email-domain.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-email-domain',
  templateUrl: './create-email-domain.component.html',
  styleUrls: ['./create-email-domain.component.css']
})
export class CreateEmailDomainComponent implements OnInit {
  constructor(private emailDomainService: EmailDomainService, private router: Router) { }

  emailDomain: EmailDomain = new EmailDomain();
  submitted = false;

  domainNameForm = new FormGroup({
    domainName: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  });

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

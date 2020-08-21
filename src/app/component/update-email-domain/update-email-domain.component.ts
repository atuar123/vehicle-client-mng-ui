import { Component, OnInit } from '@angular/core';
import {EmailDomain} from '../../model/email-domain';
import {EmailDomainService} from '../../service/email-domain.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-email-domain',
  templateUrl: './update-email-domain.component.html',
  styleUrls: ['./update-email-domain.component.css']
})
export class UpdateEmailDomainComponent implements OnInit {

  id: number;
  emailDomain: EmailDomain;
  submitted: any;

  constructor(private emailDomainService: EmailDomainService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emailDomain = new EmailDomain();

    this.id = this.route.snapshot.params.id;

    this.emailDomainService.getDomain(this.id)
      .subscribe(data => {
        console.log(data);
        this.emailDomain = data.content;
      }, error => console.log(error));
  }

  updateDomain() {
    this.emailDomainService.updateDomain(this.id, this.emailDomain)
      .subscribe(data => console.log(data), error => console.log(error));
    this.emailDomain = new EmailDomain();
    this.gotoList();
  }

  onSubmit() {
    this.updateDomain();
  }

  gotoList() {
    this.router.navigate(['domainList']);
  }
}

import { Component, OnInit } from '@angular/core';
import {EmailDomain} from '../../../model/email-domain';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailDomainService} from '../../../service/email-domain.service';

@Component({
  selector: 'app-email-domain-details',
  templateUrl: './email-domain-details.component.html',
  styleUrls: ['./email-domain-details.component.css']
})
export class EmailDomainDetailsComponent implements OnInit {

  id: number;
  emailDomain: EmailDomain;

  constructor(private route: ActivatedRoute, private emailDomainService: EmailDomainService, private router: Router) { }

  ngOnInit(): void {
    this.emailDomain = new EmailDomain();

    this.id = this.route.snapshot.params.id;

    this.emailDomainService.getDomain(this.id)
      .subscribe(data => {
        console.log(data);
        this.emailDomain = data.content;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['domainList']);
  }
}

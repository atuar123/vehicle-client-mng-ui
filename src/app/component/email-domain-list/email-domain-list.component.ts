import { Component, OnInit } from '@angular/core';
import {EmailDomainService} from '../../service/email-domain.service';
import {Observable} from 'rxjs';
import {EmailDomain} from '../../model/email-domain';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email-domain-list',
  templateUrl: './email-domain-list.component.html',
  styleUrls: ['./email-domain-list.component.css']
})
export class EmailDomainListComponent implements OnInit {

  emailDomain: EmailDomain[] = [];

  constructor(private emailDomainService: EmailDomainService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.emailDomainService.getDomains().subscribe(
      (data: any) => {
        this.emailDomain = data.content;
        console.log(this.emailDomain);
      });
  }

  updateDomainName(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteDomainName(id: number) {
    this.emailDomainService.deleteDomain(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error)
      );
  }

  domainNameDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}

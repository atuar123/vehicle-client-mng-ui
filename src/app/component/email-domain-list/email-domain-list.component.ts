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

  emailDomain: Observable<EmailDomain[]>;
  constructor(private emailDomainService: EmailDomainService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.emailDomain = this.emailDomainService.getDomainList();
  }

  updateDomainName(id: number) {
  }

  deleteDomainName(id: number) {
  }

  domainNameDetails(id: number) {
  }

}

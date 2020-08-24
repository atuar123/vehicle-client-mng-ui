import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmailDomainListComponent} from './component/emaildomain/email-domain-list/email-domain-list.component';
import {CreateEmailDomainComponent} from './component/emaildomain/create-email-domain/create-email-domain.component';
import {EmailDomainDetailsComponent} from './component/emaildomain/email-domain-details/email-domain-details.component';
import {UpdateEmailDomainComponent} from './component/emaildomain/update-email-domain/update-email-domain.component';

const routes: Routes = [
  { path: '',   redirectTo: '/domainList', pathMatch: 'full' },
  { path: 'domainList', component: EmailDomainListComponent },
  { path: 'add', component: CreateEmailDomainComponent },
  { path: 'update/:id', component: UpdateEmailDomainComponent },
  { path: 'details/:id', component: EmailDomainDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

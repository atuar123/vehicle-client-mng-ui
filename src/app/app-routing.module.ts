import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmailDomainListComponent} from './component/email-domain-list/email-domain-list.component';
import {CreateEmailDomainComponent} from './component/create-email-domain/create-email-domain.component';
import {EmailDomainDetailsComponent} from './component/email-domain-details/email-domain-details.component';
import {UpdateEmailDomainComponent} from './component/update-email-domain/update-email-domain.component';

const routes: Routes = [
  {path: '', component: EmailDomainListComponent},
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

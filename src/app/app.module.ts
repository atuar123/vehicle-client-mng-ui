import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateEmailDomainComponent } from './component/create-email-domain/create-email-domain.component';
import { EmailDomainListComponent } from './component/email-domain-list/email-domain-list.component';
import { EmailDomainDetailsComponent } from './component/email-domain-details/email-domain-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmailDomainComponent,
    EmailDomainListComponent,
    EmailDomainDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

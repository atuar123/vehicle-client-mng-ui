import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateEmailDomainComponent } from './component/emaildomain/create-email-domain/create-email-domain.component';
import { EmailDomainListComponent } from './component/emaildomain/email-domain-list/email-domain-list.component';
import { EmailDomainDetailsComponent } from './component/emaildomain/email-domain-details/email-domain-details.component';
import { UpdateEmailDomainComponent } from './component/emaildomain/update-email-domain/update-email-domain.component';
import { CreateClientComponent } from './component/client/create-client/create-client.component';
import { ClientListComponent } from './component/client/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmailDomainComponent,
    EmailDomainListComponent,
    EmailDomainDetailsComponent,
    UpdateEmailDomainComponent,
    CreateClientComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

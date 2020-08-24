import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateEmailDomainComponent } from './component/emaildomain/create-email-domain/create-email-domain.component';
import { EmailDomainListComponent } from './component/emaildomain/email-domain-list/email-domain-list.component';
import { EmailDomainDetailsComponent } from './component/emaildomain/email-domain-details/email-domain-details.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { UpdateEmailDomainComponent } from './component/emaildomain/update-email-domain/update-email-domain.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmailDomainComponent,
    EmailDomainListComponent,
    EmailDomainDetailsComponent,
    UpdateEmailDomainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

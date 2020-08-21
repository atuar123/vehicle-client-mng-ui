import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmailDomain} from '../model/email-domain';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailDomainService {

  private baseUrl = 'http://localhost:1234/api/v1/domains';

  constructor( private http: HttpClient) { }

  getDomains(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createDomain(emailDomain: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, emailDomain);
  }

  getDomain(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteDomain(id: number): Observable<any> {
    return  this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateDomain(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailDomainService {

  private baseUrl = 'localhost:1234/api/v1/domains';
  constructor( private http: HttpClient) { }

  getDomainList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

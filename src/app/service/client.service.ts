import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:1234/api/v1/clients';
  constructor(private http: HttpClient) { }

  getClientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createClient(client: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, client);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_BASE_URL: string='http://localhost:3000/';
const API_USERS: string='todos';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  sampleHeader() {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    this.http.get(`${API_BASE_URL}${API_USERS}`, {headers});
  }


  getUser(login:string) {
    return this.http.get(`${API_BASE_URL}${API_USERS}${login}`);
  }

}

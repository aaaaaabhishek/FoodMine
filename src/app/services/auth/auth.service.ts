import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api'; //  Spring Boot backend URL
  constructor(private http: HttpClient) { }
  signin(email: string, password: string): Observable<any> {
    const signinData = { email, password };
    return this.http.post(`${this.baseUrl}/signin`, signinData);
  }
  signup(name:string,email: string, password: string): Observable<any> {
    const signupData = {name, email, password };
    return this.http.post(`${this.baseUrl}/signup`, signupData);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  getData(): string[] {
    return ['data1', 'data2']
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
    // http.get(apiUrl)
  }

  getDemoUser(): Observable<any> {
    return of({name: "Krishna", email: "krishnaagrawal2992@gmail.com"})
  }

}

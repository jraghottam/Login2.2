import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


private baseUrl: string = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}Auth/create`,userObj)
    console.log("login su")

  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}Auth/login`,loginObj)
    console.log("login")

  }
}

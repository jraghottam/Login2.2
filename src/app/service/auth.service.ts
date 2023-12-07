import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

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
    // localStorage.setItem("token",loginObj.token)
    console.log("login")

  }

  aggrid(){
    let headers= new HttpHeaders()
    .set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`)
    return this.http.get<any>(`${this.baseUrl}/users`,{headers}).subscribe((result:any)=>{

    })
  }
}

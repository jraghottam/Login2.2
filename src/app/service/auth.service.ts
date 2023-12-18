import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UpdateBtnComponent } from '../components/update-btn/update-btn.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


private baseUrl: string = 'http://localhost:8080/'
  constructor(private http: HttpClient, private sncakbar: MatSnackBar) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}Auth/create`,userObj)
    console.log("login su")

  }

  update(postData:any) {
    console.log(postData)
    // let headers= new HttpHeaders()
    // .set("Authorization", `Bearer ${localStorage.getItem('jwtToken')}`)
    let jwttoken = localStorage.getItem('jwtToken')
    console.log(jwttoken)
    let headers = new HttpHeaders({
      "Authorization": "Bearer "+jwttoken,
      'Content-Type': 'application/json'
    })
    let id = postData.userid;
    let endPoints = "users/"+ id;
     this.http.put(`${this.baseUrl}` + endPoints, postData,{headers}).subscribe(data => {
      // this.updatemodal.CloseUpdateModal();
      const createmodal = document.getElementById('UpdateModal');
    if(createmodal != null){
      createmodal.style.display='none';
    }
    window.location.reload();
      // alert(postData.name+"has been Updated Successfully")
      this.sncakbar.open(postData.name+"has been Updated Successfully","ok",{
        duration: 5000,
      })
    });
  }

  // delete(data:any){
  //   let jwttoken = localStorage.getItem('jwtToken')
  //   let headers1 = new HttpHeaders({
  //     "Authorization": "Bearer "+jwttoken,
  //     'Content-type': 'application/json'
  //   })
  //   let id = data.userid;
  //   let endPoints = "user/"+ id;
  //   this.http.delete(`${this.baseUrl}`+ endPoints,data,).subscribe(data =>{
  //     console.log(data);
  //   });
  // }

  public getSettings(key: string) {
 
    return localStorage.getItem(key);
 
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}Auth/login`,loginObj)

  }

  

  aggrid(){
    let headers= new HttpHeaders()
    .set("Authorization", `Bearer ${localStorage.getItem('jwtToken')}`)
    return this.http.get<any>(`${this.baseUrl}users`,{headers}).subscribe((result:any)=>{

    })
  }

  delete(data: any){
    let end = data;
    let headers= new HttpHeaders()
    .set("Authorization", `Bearer ${localStorage.getItem('jwtToken')}`)
    return this.http.delete<any>(`${this.baseUrl}user/`+end,{headers}).subscribe((result:any)=>{
      // alert("UserID"+end+"successfully deleted")
      window.location.reload();
    })
    

  }
  show(data: any){
    let headers= new HttpHeaders()
    .set("Authorization", `Bearer ${localStorage.getItem('jwtToken')}`)
    return this.http.delete<any>(`${this.baseUrl}users`,{headers}).subscribe((result:any)=>{

    })
    
  }
}

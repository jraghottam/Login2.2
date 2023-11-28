import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm! :FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]

    })
  }

  onLogin(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
        },
        error(err) {
          alert(err?.error.message)
        },
      })
      console.log(this.loginForm.value)

    }
  }

}

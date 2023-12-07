import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm! :FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private auth: AuthService) {}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required]

    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res: any)=>{
          alert(res.message)
          console.warn(this.loginForm.value)
          localStorage.setItem("jwtToken",res.jwtToken)
          this.router.navigate(['/agGrid'])
          console.log(this.loginForm.value)
        },
        error(err) {
          alert(err.error.message)
        },
      })
      console.log(this.loginForm.value)

    }
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm! :FormGroup;
  // router: any;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(){
    this.signupForm = this.fb.group({
      name: ['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]

    })
  }
  onSignup(){
    if(this.signupForm.valid){
      this.auth.signUp(this.signupForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        error(err) {
          alert(err?.error.message)
        },
      })
      console.log(this.signupForm.value)

    } else{
      
    }
  }

}

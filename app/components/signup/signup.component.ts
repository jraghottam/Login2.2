import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm! :FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {}

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
        },
        error(err) {
          alert(err?.error.message)
        },
      })
      console.log(this.signupForm.value)

    }
  }

}

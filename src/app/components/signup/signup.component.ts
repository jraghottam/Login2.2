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
      email: ['', Validators.compose([Validators.required,
                  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: ['', Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]) ],
      role: ['', Validators.required]

    })
  }
  // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')

  get name(){
    return this.signupForm.get('name');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  onSignup(){
    if(this.signupForm.valid){
      this.auth.signUp(this.signupForm.value)
      .subscribe({
        next:(res)=>{
          // alert(res.message)
          this.signupForm.reset();
          this.router.navigate(['/']);
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

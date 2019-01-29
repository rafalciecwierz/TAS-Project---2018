import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserDataService } from 'src/app/shared/user-data.service';
import { User } from 'src/app/shared/user.model';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  body = new User('Tomek','tomek@gmail.com','password1');
  signUpForm: FormGroup;

  constructor(private http: UserDataService,
    private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });

  }

 

  onSubmit(){
    this.http.signUp(this.signUpForm.value)
    .subscribe(
      (wynik: User) => {
        console.log(wynik);
        this.router.navigate(['/']);
      }
    );
  }

  onSignUp(){
    this.http.signUp(this.body)
    .subscribe(
      (wynik: User) => {
        console.log(wynik);
      }
    );
  }


}

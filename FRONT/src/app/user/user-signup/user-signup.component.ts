import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserDataService } from 'src/app/shared/user-data.service';
import { User } from 'src/app/shared/user.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup;
  errorMsg: string;

  constructor(private http: UserDataService,
    private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnDestroy(){
    this.http.resetErrorMsg();
  }

  onSubmit(){
    this.http.signUp(this.signUpForm.value)
    .subscribe(
      (wynik: User) => {
        console.log(wynik);
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  };



}

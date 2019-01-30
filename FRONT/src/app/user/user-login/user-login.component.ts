import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/shared/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  signInForm: FormGroup;
  loginUser: Object;
  errorMsg: string;

  constructor(private auth: UserDataService,
    private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(){
    this.loginUser = new Object({
      'email': this.signInForm.value.email,
      'password': this.signInForm.value.password
    });
    
      this.auth.logIn(this.loginUser)
      .subscribe(
        (tk: Object) => {
          this.auth.setToken(tk['token'],tk['isAdmin']);
          this.router.navigate(['']);
        },
        (error) =>  this.errorMsg = error
      );


  }
}

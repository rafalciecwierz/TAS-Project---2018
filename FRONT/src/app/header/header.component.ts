import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: UserDataService,
    private router: Router) { }


  ngOnInit() {
  }
  isAuthenticated(){
    return this.auth.isAuthenticated();
  }

  isAdmin(){
    return this.auth.isAdmin();
  }
  onLogOut(){
    this.auth.resetToken();
    this.router.navigate(['']);

  }
}

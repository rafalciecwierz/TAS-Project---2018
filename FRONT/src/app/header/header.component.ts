import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { Router } from '@angular/router';
import { UsernameService } from '../shared/username.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string = ''

  constructor(private auth: UserDataService,
    private router: Router,
    private usernameService: UsernameService) { }


  ngOnInit() {
    this.usernameService.userHasName.subscribe(
      (name: string) => {
        this.username= name;
      }
    );
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

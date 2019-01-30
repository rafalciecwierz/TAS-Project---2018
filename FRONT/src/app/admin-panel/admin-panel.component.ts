import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private auth: UserDataService, private router: Router) { }

  ngOnInit() {
    if(!this.auth.isAdmin()){
      this.router.navigate(['']);
    }
  }

}

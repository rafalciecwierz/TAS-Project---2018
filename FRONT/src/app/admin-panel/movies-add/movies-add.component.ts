import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  movieAddForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.movieAddForm = new FormGroup({
      'title': new FormControl(null, ),
      'description': new FormControl(null,),
      'year': new FormControl(null,),
      'imagePath': new FormControl(null,),
      'numberInStock': new FormControl(null,),
      'dailyRentalRate': new FormControl(null,),
    });
  }

}

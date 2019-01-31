import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/shared/genre.model';

@Component({
  selector: 'app-genres-item',
  templateUrl: './genres-item.component.html',
  styleUrls: ['./genres-item.component.css']
})
export class GenresItemComponent implements OnInit {

  @Input() genre: Genre;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/film.model';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() movie: Movie;
  @Input() index: number;

  ngOnInit() {
  }

}

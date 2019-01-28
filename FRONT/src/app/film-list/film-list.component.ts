import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/film.model';
import { FilmServices } from '../shared/film.services';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  movies: Movie[];

  constructor(private filmService: FilmServices) { }

  ngOnInit() {
    this.movies = this.filmService.getMovies();
  }

}

import { Component, OnInit} from '@angular/core';
import { Movie } from '../shared/film.model';
import { FilmServices } from '../shared/film.services';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  movie: Movie;
  id: number;

  constructor(private filmService: FilmServices,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.filmService.getMovie(this.id);
      }
    );
  }

}

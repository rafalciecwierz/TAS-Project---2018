import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FilmServices } from 'src/app/shared/film.services';
import { Genre } from 'src/app/shared/genre.model';


@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit, OnDestroy {

  movieAddForm: FormGroup;
  movieMsg: string;
  errorMsg: string;
  genres: Genre[];


  constructor(private filmService: FilmServices) { }


  ngOnInit() {
    this.movieAddForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(1), this.noWhitespaceValidator]),
      'description': new FormControl(null,[Validators.required]),
      'year': new FormControl(null,[Validators.required, Validators.min(0)]),
      'genreId': new FormControl(null,[Validators.required]),
      'imagePath': new FormControl(null,[Validators.required]),
      'numberInStock': new FormControl(null,[Validators.required, Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$')]),
      'dailyRentalRate': new FormControl(null,[Validators.required, Validators.max(100), Validators.min(1)]),
    });
    this.filmService.getGenresData()
    .subscribe(
      (newGenres: Genre[])=>{
        this.genres = newGenres;
      }
    );
  }

  ngOnDestroy(){
    this.movieMsg = null;
    this.errorMsg = null;
  }

  onSubmit(){
    console.log(this.movieAddForm);
    this.movieAddForm.value
    this.filmService.postMovie(this.movieAddForm.value)
    .subscribe(
      () => {
        console.log('Movie Added!');
        this.movieMsg = this.movieAddForm.value.title;
        this.movieAddForm.reset();
        console.log(this.movieMsg);
        
      },
      (error) => {
        console.log("Something Bad Happened. Please try again later");
      }
    );
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}

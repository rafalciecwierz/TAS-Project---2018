import { Component, OnInit, OnDestroy } from '@angular/core';
import { Genre } from 'src/app/shared/genre.model';
import { FilmServices } from 'src/app/shared/film.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-genres-control',
  templateUrl: './genres-control.component.html',
  styleUrls: ['./genres-control.component.css']
})
export class GenresControlComponent implements OnInit, OnDestroy {

  genreAddForm: FormGroup;
  genres: Genre[];
  genreMsg: string;
  errorMsg: string;

  constructor(private filmService: FilmServices) { }

  ngOnInit() {

    this.genreAddForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(1), this.noWhitespaceValidator]),
    });

    this.filmService.getGenresData()
    .subscribe(
      (newGenres: Genre[])=>{
        this.genres = newGenres;
      }
    );
  }

  onSubmit(){
    this.filmService.postGenresData(this.genreAddForm.value)
    .subscribe(
      () => {
        console.log('Genre Added!'); 
        this.errorMsg=null; 
        const newGenre = new Genre('', this.genreAddForm.value.name);
        this.genres.push(newGenre);
        this.genreMsg = this.genreAddForm.value.name;
        this.genreAddForm.reset();
      },
      (error) => {
        this.genreMsg = null;
        this.errorMsg = error
        console.log("Something Bad Happened. Please try again later");
      }
    );
  }

  ngOnDestroy(){
    this.genreMsg = null;
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}

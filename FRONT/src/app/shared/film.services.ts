import { Movie } from './film.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDataService } from './user-data.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Genre } from './genre.model';
import { Subject } from 'rxjs';

@Injectable()
export class FilmServices {
    
    private movies: Movie[] = [
        new Movie('Terminator', 'Description', 2003,'Action', 'https://images-na.ssl-images-amazon.com/images/I/7124A8OOL6L._SY550_.jpg', 2, 10),
        new Movie('Moonlight', 'Descritpion 2', 2014, 'Comedy', 'https://img.moviepostershop.com/moonlight-movie-poster-2016-1020776692.jpg', 3, 10)
    ];
    private genres: Genre[];

    //checking if movies/genres has changed - subject works like observable/observer
    moviesChanged = new Subject<Movie[]>()
    genreChanged = new Subject<Genre[]>();
    

    constructor(private httpClient: HttpClient,
        private userDataService: UserDataService) { }


    // MOVIES 
    // get all copy of movies
    getMovies(){
        return this.movies.slice();
    }

    //get one movie
    getMovie(id: number){
        return this.movies[id];
    }

    //set new movies and change copy with subject
    setMovies(newMovies: Movie[]){
        this.movies = newMovies;
        this.moviesChanged.next(this.movies.slice());
    }

    //Post one movie form admin panel
    postMovie(body){
        return this.httpClient.post<Movie>('http://127.0.0.1:3000/api/movies', body)
        .pipe(
            // this.userDataService.handleError(error: HttpErrorResponse);
            catchError(this.userDataService.handleError)
        );
    }

    //Grab movies from db
    getMoviesData(){
        return this.httpClient.get<Movie[]>('http://127.0.0.1:3000/api/movies')
        .pipe(
            catchError(this.userDataService.handleError)
        );

    }

    // GENRES

    //get all genres
    getGenres(){
        return this.genres.slice();
    }

    //set genres and get copy
    setGenres(newGenres: Genre[]){
        this.genres = newGenres;
        this.genreChanged.next(newGenres.slice());
    }

    //Get genres data from db
    getGenresData() {
        return this.httpClient.get<Genre[]>('http://127.0.0.1:3000/api/genres')
        .pipe(
            catchError(this.userDataService.handleError)
        );
    }

    //Post genres data to db with token on header
    postGenresData(body){
        return this.httpClient.post<Movie>('http://127.0.0.1:3000/api/genres', body,{
            headers: new HttpHeaders().append('x-auth-token', this.userDataService.getToken())
        })
        .pipe(
            // this.userDataService.handleError(error: HttpErrorResponse);
            catchError(this.userDataService.handleError)
        );
        
    }

}
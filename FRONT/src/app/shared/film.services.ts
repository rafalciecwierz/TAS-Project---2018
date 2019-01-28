import { Movie } from './film.model';

export class FilmServices {
    
    private movies: Movie[] = [
        new Movie('Terminator', 'Description', 2003, 'https://images-na.ssl-images-amazon.com/images/I/7124A8OOL6L._SY550_.jpg', 2, 10),
        new Movie('Moonlight', 'Descritpion 2', 2014, 'https://img.moviepostershop.com/moonlight-movie-poster-2016-1020776692.jpg', 3, 10)
    ];

    getMovies(){
        return this.movies.slice();
    }

    getMovie(id: number){
        return this.movies[id];
    }
}
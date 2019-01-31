import { Genre } from './genre.model';

export class Movie {
    public title: string;
    public description: string;
    public year: number;
    public genreId: string;
    public imagePath: string;
    public numberInStock: number;
    public dailyRentalRate: number;

    constructor(title: string, desc: string, year: number, genre: string ,imagePath: string, nIS: number, dRR: number ){
        this.title = title;
        this.description = desc;
        this.year = year;
        this.genreId = genre;
        this.imagePath = imagePath;
        this.numberInStock = nIS;
        this.dailyRentalRate = dRR;
    }
}
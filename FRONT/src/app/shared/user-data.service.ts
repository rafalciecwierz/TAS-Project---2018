import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserDataService {

    token: string = null;
    admin: boolean = false;
    errorMsg: string;

    constructor(private httpClient: HttpClient) { }
    isAdmin(){
        return this.isAdmin;
    }
    isAuthenticated() {
        return this.token != null;
    }

    setToken(newToken: string, isAdmin: boolean) {
        this.token = newToken;
        this.admin = isAdmin
    }
    resetToken() {
        this.token = null;
        this.admin = false;
    }

    //GetGenres - not finished method
    getGenres() {
        this.httpClient.get<string>('http://127.0.0.1:3000/api/genres')
            .subscribe(
                (response: string) => {
                    console.log(response);
                }
            );
    }

    //SingUpMethod
    signUp(body) {
        return this.httpClient.post<User>('http://127.0.0.1:3000/api/users', body)
            .pipe(
                catchError(this.handleError)
            );
    }

    logIn(body) {
        return this.httpClient.post<string>('http://127.0.0.1:3000/api/auth', body)
            .pipe(
                catchError(this.handleError)
            );
    }

    getErrorMsg(){
        return this.errorMsg;
    }

    resetErrorMsg(){
        this.errorMsg = null;
    }

    //Method for error handling
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
           // console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
                //console.log(error.error);
                
        }
        // return an observable with a user-facing error message
        return throwError(error.error);
        //'Something bad happened; please try again later.'
    };
}
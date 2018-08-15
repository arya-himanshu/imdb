import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { AppConfiguration } from '../../appconstant';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../../pojo/movie/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  private heroesUrl = AppConfiguration.Server + 'movie';  // URL to web api

  constructor(private http: HttpClient) { }


  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.heroesUrl + '/getallmovies')
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}

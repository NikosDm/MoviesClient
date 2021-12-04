import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginationResult } from '../_models/PaginationResult';
import { MovieDetails } from '../_models/MovieDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<PaginationResult> {
    return this.http.get<PaginationResult>(
      `${this.baseUrl}discover/movie?page`
    );
  }

  getMovie(movieID: Number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.baseUrl}movie/${movieID}`);
  }

  searchMovies(query: string): Observable<PaginationResult> {
    return this.http.get<PaginationResult>(
      `${this.baseUrl}search/movie?query=${query}`
    );
  }
}

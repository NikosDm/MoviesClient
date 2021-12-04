import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginationResult } from '../_models/PaginationResult';

/**ONLY FOR TEST REASONS */
import * as MovieData from '../../data.json';
import { MovieDetails } from '../_models/MovieDetails';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(): any {
    // return this.http.get<PaginationResult>(`${this.baseUrl}discover/popular`, {
    //   params: this.getHttpParams(),
    // });

    return MovieData;
  }

  getMovie(movieID: Number) {
    // return this.http.get<MovieDetails>(`${this.baseUrl}movie/${movieID}`, {
    //   params: this.getHttpParams(),
    // });

    return MovieData;
  }

  searchMovies(query: string) {
    // let params = this.getHttpParams();
    // params = params.append('query', query);
    // return this.http.get<MovieDetails>(`${this.baseUrl}search/movie`, {
    //   params: this.getHttpParams(),
    // });
  }

  private getHttpParams(): HttpParams {
    let params = new HttpParams();
    params = params.append('apiKey', this.apiKey);
    return params;
  }
}

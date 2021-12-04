import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginationResult } from '../_models/PaginationResult';
import { MovieDetails } from '../_models/MovieDetails';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(): any {
    return this.http.get<PaginationResult>(`${this.baseUrl}discover/movie`, {
      params: this.getHttpParams(),
    });
  }

  getMovie(movieID: Number) {
    return this.http.get<MovieDetails>(`${this.baseUrl}movie/${movieID}`, {
      params: this.getHttpParams(),
    });
  }

  searchMovies(query: string) {
    let params = this.getHttpParams();
    params = params.append('query', query);
    return this.http.get<MovieDetails>(`${this.baseUrl}search/movie`, {
      params: this.getHttpParams(),
    });
  }

  private getHttpParams(): HttpParams {
    let params = new HttpParams();
    params = params.append('api_key', this.apiKey);
    return params;
  }
}

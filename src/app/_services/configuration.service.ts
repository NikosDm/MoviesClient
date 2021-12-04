import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Configuration } from '../_models/Configuration';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  baseUrl = environment.apiUrl;
  configuration: Configuration;

  constructor(private http: HttpClient) {}

  getImageConfiguration() {
    return this.http
      .get<Configuration>(`${this.baseUrl}configuration`)
      .subscribe((response) => {
        this.configuration = response;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './_services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MoviesClient';
  searchQuery: string;

  constructor(private configuration: ConfigurationService) {}

  ngOnInit(): void {
    this.configuration.getImageConfiguration();
  }

  handleMovieSearch(query: string) {
    this.searchQuery = query;
  }
}

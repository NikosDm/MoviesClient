import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchQuery: string;

  handleMovieSearch(query: string) {
    this.searchQuery = query;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css'],
})
export class MovieContainerComponent implements OnInit {
  @Input() searchQuery: string;
  selectedMovieID: Number;

  constructor() {}

  ngOnInit(): void {}

  handleMovieSelection(selectedMovieID: Number) {
    this.selectedMovieID = selectedMovieID;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css'],
})
export class MovieContainerComponent implements OnInit {
  @Input() searchQuery: string;
  selectedMovieID: number;
  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {}

  handleMovieSelection(selectedMovieID: number) {
    this.selectedMovieID = selectedMovieID;
  }

  handleMovieDetailsVisibility() {
    if (this.screenWidth < 768) {
      return this.selectedMovieID ? 'block' : 'none';
    }

    return 'block';
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  handleBackToList() {
    this.selectedMovieID = null;
  }
}

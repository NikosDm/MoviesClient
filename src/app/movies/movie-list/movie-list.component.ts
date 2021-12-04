import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PaginationResult } from 'src/app/_models/PaginationResult';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Output() selectedMovie = new EventEmitter<any>();
  paginationResult: PaginationResult;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((response) => {
      this.paginationResult = response;
      debugger;
    });
  }

  selectMovie(movieId: Number) {
    this.selectedMovie.emit(movieId);
  }

  pageChanged(event: any) {
    debugger;
  }
}

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
    // this.movieService.getMovies().subscribe((response) => {
    //   debugger;
    //   this.movies = response.results;
    //   delete response.results;
    //   this.pagination = response;
    // });
    this.paginationResult = this.movieService.getMovies().default;
  }

  selectMovie(movieId: Number) {
    this.selectedMovie.emit(movieId);
  }

  pageChanged(event: any) {
    debugger;
  }
}

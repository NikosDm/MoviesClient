import {
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PaginationResult } from 'src/app/_models/PaginationResult';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnChanges {
  @Output() selectedMovie = new EventEmitter<any>();
  @Input() searchQuery: string;
  paginationResult: PaginationResult;

  constructor(private movieService: MovieService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.searchQuery?.currentValue) {
      this.searchMovies();
    } else {
      this.loadMovies();
    }
  }

  ngOnInit(): void {
    if (this.searchQuery) this.searchMovies();
    else this.loadMovies();
  }

  selectMovie(movieId: Number) {
    this.selectedMovie.emit(movieId);
  }

  pageChanged(event: any) {
    const page = event.page;
    if (this.searchQuery) this.searchMovies(page);
    else this.loadMovies(page);
  }

  searchMovies(page?: number) {
    this.movieService
      .searchMovies(this.searchQuery, page)
      .subscribe((response) => {
        this.paginationResult = response;
      });
  }

  private loadMovies(page?: Number) {
    this.movieService.getMovies(page).subscribe((response) => {
      this.paginationResult = response;
    });
  }
}

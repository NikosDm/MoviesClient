import { MovieList } from './MovieList';

export interface PaginationResult {
  page: Number;
  total_results: Number;
  total_pages: Number;
  results: MovieList[];
}

import { MovieList } from './MovieList';

export interface PaginationResult {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieList[];
}

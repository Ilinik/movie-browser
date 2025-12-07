import type { TMovie } from '../entities/TMovie';

export type TFetchPopularMovies = {
  page: number;
  results: TMovie[];
  total_pages: number;
  total_results: number;
};

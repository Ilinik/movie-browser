import { useQuery } from '@tanstack/react-query';
import MoviesService from '../services/MovieService';
import type { TFetchPopularMovies } from '../types/api/IMovieService';

export const usePopularMovies = () => {
  return useQuery<TFetchPopularMovies>({
    queryKey: ['movies', 'popular'],
    queryFn: MoviesService.getPopularMovies,
  });
};

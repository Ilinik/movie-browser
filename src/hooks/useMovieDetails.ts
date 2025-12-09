import MoviesService from '../services/MovieService';
import type { TGetMovieDetails } from './../types/api/TMovieService';
import { useQuery } from '@tanstack/react-query';

export const useMovieDetails = (id: number) => {
  return useQuery<TGetMovieDetails>({
    queryKey: ['movies', 'details', id],
    queryFn: () => MoviesService.getMovieDetailsById(id),
  });
};

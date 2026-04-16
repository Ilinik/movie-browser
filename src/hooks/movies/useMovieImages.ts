import { useQuery } from '@tanstack/react-query';
import type { TGetImages } from '../../types/api/TMovieService';
import MoviesService from '../../services/MovieService';

export const useMovieImages = (id: number) => {
  return useQuery<TGetImages>({
    queryKey: ['movies', 'images', id],
    queryFn: () => MoviesService.getMovieImages(id),
  });
};

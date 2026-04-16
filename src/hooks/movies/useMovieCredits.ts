import { useQuery } from '@tanstack/react-query';
import type { TGetCredits } from '../../types/api/TMovieService';
import MoviesService from '../../services/MovieService';

export const useMovieCredits = (id: number) => {
  return useQuery<TGetCredits>({
    queryKey: ['movies', 'credits', id],
    queryFn: () => MoviesService.getMovieCredits(id),
  });
};

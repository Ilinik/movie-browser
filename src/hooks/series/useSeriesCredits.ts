import { useQuery } from '@tanstack/react-query';
import type { TGetCredits } from '../../types/api/TMovieService';
import SeriesService from '../../services/SeriesService';

export const useSeriesCredits = (id: number) => {
  return useQuery<TGetCredits>({
    queryKey: ['series', 'credits', id],
    queryFn: () => SeriesService.getSeriesCredits(id),
  });
};

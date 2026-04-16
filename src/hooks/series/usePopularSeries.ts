import { useQuery } from '@tanstack/react-query';
import type { TFetchPopularSeries } from '../../types/api/TSeriesService';
import SeriesService from '../../services/SeriesService';

export const usePopularSeries = () => {
  return useQuery<TFetchPopularSeries>({
    queryKey: ['series', 'popular'],
    queryFn: SeriesService.getPopularSeries,
  });
};

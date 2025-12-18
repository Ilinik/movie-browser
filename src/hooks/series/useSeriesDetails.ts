import type { TGetSeriesDetails } from './../../types/api/TSeriesService';
import { useQuery } from '@tanstack/react-query';
import SeriesService from '../../services/SeriesService';

export const useSeriesDetails = (id: number) => {
  return useQuery<TGetSeriesDetails>({
    queryKey: ['series', 'details', id],
    queryFn: () => SeriesService.getSeriesDetailsById(id),
  });
};

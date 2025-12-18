import { useQuery } from '@tanstack/react-query';
import type { TGetImages } from '../../types/api/TMovieService';
import SeriesService from '../../services/SeriesService';

export const useSeriesImages = (id: number) => {
  return useQuery<TGetImages>({
    queryKey: ['series', 'images', id],
    queryFn: () => SeriesService.getSeriesImages(id),
  });
};

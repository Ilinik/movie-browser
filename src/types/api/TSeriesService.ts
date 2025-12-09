import type { TSeries } from '../entities/TSeries';

export type TFetchPopularSeries = {
  page: number;
  results: TSeries[];
  total_pages: number;
  total_results: number;
};

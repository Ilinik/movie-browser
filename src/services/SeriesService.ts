import type { TFetchPopularSeries } from './../types/api/TSeriesService';
import { axiosClient } from '../api/axiosClient';
import { ENDPOINTS } from '../api/endpoints';

export default class SeriesService {
  static async getPopularSeries(): Promise<TFetchPopularSeries> {
    const response = await axiosClient.get<TFetchPopularSeries>(
      ENDPOINTS.tvSeries.popular,
    );
    return response.data;
  }
}

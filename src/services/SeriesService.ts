import type {
  TFetchPopularSeries,
  TGetSeriesDetails,
} from './../types/api/TSeriesService';
import { axiosClient } from '../api/axiosClient';
import { ENDPOINTS } from '../api/endpoints';
import type { TGetCredits, TGetImages } from '../types/api/TMovieService';

export default class SeriesService {
  static async getPopularSeries(): Promise<TFetchPopularSeries> {
    const response = await axiosClient.get<TFetchPopularSeries>(
      ENDPOINTS.tvSeries.popular,
    );
    return response.data;
  }

  static async getSeriesDetailsById(id: number): Promise<TGetSeriesDetails> {
    const response = await axiosClient.get<TGetSeriesDetails>(
      ENDPOINTS.tvSeries.getDetailsById(id),
    );
    return response.data;
  }

  static async getSeriesCredits(id: number): Promise<TGetCredits> {
    const response = await axiosClient.get<TGetCredits>(
      ENDPOINTS.tvSeries.getCredits(id),
    );
    return response.data;
  }

  static async getSeriesImages(id: number): Promise<TGetImages> {
    const response = await axiosClient.get<TGetImages>(
      ENDPOINTS.tvSeries.getImages(id),
    );
    return response.data;
  }
}

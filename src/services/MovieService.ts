import { axiosClient } from '../api/axiosClient';
import { ENDPOINTS } from '../api/endpoints';
import type {
  TFetchPopularMovies,
  TGetCredits,
  TGetImages,
  TGetMovieDetails,
} from '../types/api/TMovieService';

export default class MoviesService {
  static async getPopularMovies(): Promise<TFetchPopularMovies> {
    const response = await axiosClient.get<TFetchPopularMovies>(
      ENDPOINTS.movies.popular,
    );
    return response.data;
  }

  static async getMovieDetailsById(id: number): Promise<TGetMovieDetails> {
    const response = await axiosClient.get<TGetMovieDetails>(
      ENDPOINTS.movies.getDetailsById(id),
    );
    return response.data;
  }

  static async getMovieCredits(id: number): Promise<TGetCredits> {
    const response = await axiosClient.get<TGetCredits>(
      ENDPOINTS.movies.getCredits(id),
    );
    return response.data;
  }

  static async getMovieImages(id: number): Promise<TGetImages> {
    const response = await axiosClient.get<TGetImages>(
      ENDPOINTS.movies.getImages(id),
    );
    return response.data;
  }
}

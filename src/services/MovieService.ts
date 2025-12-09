import { axiosClient } from '../api/axiosClient';
import { ENDPOINTS } from '../api/endpoints';
import type {
  TFetchPopularMovies,
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
}

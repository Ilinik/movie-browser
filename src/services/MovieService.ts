import { axiosClient } from '../api/axiosClient';
import { ENDPOINTS } from '../api/endpoints';
import type { TFetchPopularMovies } from '../types/api/TMovieService';

export default class MoviesService {
  static async getPopularMovies(): Promise<TFetchPopularMovies> {
    const response = await axiosClient.get<TFetchPopularMovies>(
      ENDPOINTS.movies.popular,
    );
    return response.data;
  }
}

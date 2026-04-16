import type {
  TEpisode,
  TGenre,
  TNetwork,
  TSeason,
  TSeries,
  TSpokenLanguage,
} from '../entities/TSeries';

export type TFetchPopularSeries = {
  page: number;
  results: TSeries[];
  total_pages: number;
  total_results: number;
};

export type TGetSeriesDetails = {
  adult: boolean;
  backdrop_path: string | null;
  created_by: unknown[];
  episode_run_time: number[];
  first_air_date: string;
  genres: TGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TEpisode | null;
  name: string;
  next_episode_to_air: TEpisode | null;
  networks: TNetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: unknown[];
  production_countries: unknown[];
  seasons: TSeason[];
  spoken_languages: TSpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

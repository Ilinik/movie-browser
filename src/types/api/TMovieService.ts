import type {
  TActor,
  TCollection,
  TGenre,
  TImage,
  TLanguage,
  TMovie,
  TProductionCompany,
  TProductionCountry,
} from '../entities/TMovie';

export type TFetchPopularMovies = {
  page: number;
  results: TMovie[];
  total_pages: number;
  total_results: number;
};

export type TGetMovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: TCollection | null;
  budget: number;
  genres: TGenre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: TProductionCompany[];
  production_countries: TProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: TLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TGetCredits = {
  id: number;
  cast: TActor[];
};

export type TGetImages = {
  backdrops: TImage[];
};

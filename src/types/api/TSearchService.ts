export type TSearchResult = {
  id: number;
  media_type: 'movie' | 'tv';
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  // movie fields
  title?: string;
  release_date?: string;
  // tv fields
  name?: string;
  first_air_date?: string;
};

export type TSearchMulti = {
  page: number;
  results: TSearchResult[];
  total_pages: number;
  total_results: number;
};

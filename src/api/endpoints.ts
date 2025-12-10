export const ENDPOINTS = {
  movies: {
    popular: '/movie/popular',
    getDetailsById: (id: number) => `/movie/${id}`,
    getCredits: (id: number) => `/movie/${id}/credits`,
  },

  tvSeries: {
    popular: '/tv/popular',
  },
};

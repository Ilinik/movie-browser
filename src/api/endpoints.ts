export const ENDPOINTS = {
  movies: {
    popular: '/movie/popular',
    getDetailsById: (id: number | string) => `/movie/${id}`,
  },

  tvSeries: {
    popular: '/tv/popular',
  },
};

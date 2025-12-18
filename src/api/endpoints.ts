export const ENDPOINTS = {
  movies: {
    popular: '/movie/popular',
    getDetailsById: (id: number) => `/movie/${id}`,
    getCredits: (id: number) => `/movie/${id}/credits`,
    getImages: (id: number) => `/movie/${id}/images`,
  },

  tvSeries: {
    popular: '/tv/popular',
    getDetailsById: (id: number) => `/tv/${id}`,
    getCredits: (id: number) => `/tv/${id}/credits`,
    getImages: (id: number) => `/tv/${id}/images`,
  },
};

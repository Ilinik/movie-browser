# Movie Browser

A responsive web application for browsing popular movies and TV series, built with React and powered by The Movie Database (TMDB) API.

## Features

- Browse popular movies and TV series on the home page
- Detailed pages for each movie and series with tabbed navigation:
  - **General** — overview, release date, runtime, genres, ratings
  - **Cast** — actor cards with profile photos and character names
  - **Artwork** — image gallery (posters, backdrops)
- Responsive layout with a touch-friendly Swiper slider
- Client-side routing with React Router

## Tech Stack

| Category      | Libraries                            |
| ------------- | ------------------------------------ |
| Framework     | React 19                             |
| Language      | TypeScript                           |
| Routing       | React Router 7                       |
| Data Fetching | TanStack Query (React Query) + Axios |
| Styling       | Tailwind CSS 4                       |
| Slider        | Swiper                               |
| Icons         | Lucide React                         |
| Build         | Vite (rolldown-vite)                 |

## Getting Started

### Prerequisites

- Node.js 18+
- A free [TMDB API](https://www.themoviedb.org/settings/api) key and read access token

### Installation

```bash
git clone https://github.com/your-username/movie-browser.git
cd movie-browser
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_API_TOKEN=your_tmdb_read_access_token
```

### Running the App

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── api/            # Axios client and API endpoint definitions
├── components/
│   ├── layouts/    # Header, Footer, Container, PageWrapper
│   └── ui/         # ItemCard, MovieSlider, Tabs
├── config/         # Static and dynamic route paths
├── hooks/
│   ├── movies/     # usePopularMovies, useMovieDetails, useMovieCredits, useMovieImages
│   └── series/     # usePopularSeries, useSeriesDetails, useSeriesCredits, useSeriesImages
├── pages/
│   ├── HomePage/
│   ├── MovieDetails/
│   └── SeriesDetails/
├── services/       # MovieService, SeriesService (API call wrappers)
├── types/          # TypeScript types for entities and API responses
└── routing/        # React Router configuration
```

## License

MIT

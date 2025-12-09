import { createBrowserRouter } from 'react-router';
import App from '../App';
import { staticLinks } from '../config/staticLinks';
import { HomePage } from '../pages/HomePage/HomePage';
import { dynamicLinks } from '../config/dynamicLinks';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { SeriesDetails } from '../pages/SeriesDetails/SeriesDetails';

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { path: staticLinks.main, Component: HomePage },
      { path: dynamicLinks.movieDetails, Component: MovieDetails },
      { path: dynamicLinks.seriesDetails, Component: SeriesDetails },
    ],
  },
]);

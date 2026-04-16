import { createBrowserRouter } from 'react-router';
import App from '../App';
import { staticLinks } from '../config/staticLinks';
import { HomePage } from '../pages/HomePage/HomePage';
import { dynamicLinks } from '../config/dynamicLinks';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { SeriesDetails } from '../pages/SeriesDetails/SeriesDetails';
import { MovieGeneral } from '../pages/MovieDetails/tabs/MovieGeneral/MovieGeneral';
import { MovieCast } from '../pages/MovieDetails/tabs/MovieCast/MovieCast';
import { MovieArtwork } from '../pages/MovieDetails/tabs/MovieArtwork/MovieArtwork';
import { SeriesGeneral } from '../pages/SeriesDetails/tabs/SeriesGeneral/SeriesGeneral';
import { SeriesCast } from '../pages/SeriesDetails/tabs/SeriesCast/SeriesCast';
import { SeriesArtwork } from '../pages/SeriesDetails/tabs/SeriesArtwork/SeriesArtwork';
import { SearchResultPage } from '../pages/SearchResultPage/SearchResultPage';

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { path: staticLinks.main, Component: HomePage },
      { path: staticLinks.search, Component: SearchResultPage },
      {
        path: dynamicLinks.movieDetails,
        Component: MovieDetails,
        children: [
          { index: true, Component: MovieGeneral },
          { path: 'cast', Component: MovieCast },
          { path: 'artwork', Component: MovieArtwork },
        ],
      },
      {
        path: dynamicLinks.seriesDetails,
        Component: SeriesDetails,
        children: [
          { index: true, Component: SeriesGeneral },
          { path: 'cast', Component: SeriesCast },
          { path: 'artwork', Component: SeriesArtwork },
        ],
      },

      { path: '*', Component: HomePage },
    ],
  },
]);

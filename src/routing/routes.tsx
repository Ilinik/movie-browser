import { createBrowserRouter } from 'react-router';
import App from '../App';
import { staticLinks } from '../config/staticLinks';
import { HomePage } from '../pages/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    Component: App,
    children: [{ path: staticLinks.main, Component: HomePage }],
  },
]);

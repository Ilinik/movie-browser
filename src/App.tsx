import { Outlet } from 'react-router';
import { PageWrapper } from './components/layouts/PageWrapper/PageWrapper';

const App = () => {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
};

export default App;

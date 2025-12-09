import clsx from 'clsx';
import { Container } from '../Container/Container';
import { useNavigate } from 'react-router';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      className={clsx(
        'bg-white dark:bg-slate-800 h-16 shadow-sm sticky top-0 left-0 right-0 z-999',
      )}
    >
      <Container className="h-full">
        <div className="flex items-center h-full">
          <div
            className="font-bold text-2xl cursor-pointer"
            onClick={() => navigate('/')}
          >
            Movie Browser
          </div>
        </div>
      </Container>
    </header>
  );
};

import clsx from 'clsx';
import { Container } from '../Container/Container';

export const Header = () => {
  return (
    <header className={clsx('bg-white dark:bg-slate-800 h-16 shadow-sm')}>
      <Container>Header</Container>
    </header>
  );
};

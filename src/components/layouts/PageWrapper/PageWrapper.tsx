import { type PropsWithChildren } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Container } from '../Container/Container';
import clsx from 'clsx';

type TPageWrapperProps = PropsWithChildren & {
  contentClassName?: string;
};

export const PageWrapper = ({ children }: TPageWrapperProps) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <main className={clsx('flex-1')}>
        <Container>{children}</Container>
      </main>

      <Footer />
    </div>
  );
};

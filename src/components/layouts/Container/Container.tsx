import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type TContainerProps = PropsWithChildren & {
  className?: string;
};

export const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={clsx('max-w-[1400px] mx-auto px-3 lg:px-5 xl:px-6', className)}
    >
      {children}
    </div>
  );
};

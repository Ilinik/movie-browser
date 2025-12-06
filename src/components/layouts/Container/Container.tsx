import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type TContainerProps = PropsWithChildren & {
  className?: string;
};

export const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={clsx('max-w-[1400px] mx-auto px-5', className)}>
      {children}
    </div>
  );
};

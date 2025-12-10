import type { ReactNode } from 'react';

export const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) => {
  return (
    <li className="flex">
      <span className="w-40 text-gray-700 dark:text-gray-400 flex-1">
        {label}
      </span>
      <span className="font-semibold">{value}</span>
    </li>
  );
};

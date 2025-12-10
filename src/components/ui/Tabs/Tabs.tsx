import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import type { TTab } from '../../../types/entities/TTab';

type TabsProps = {
  tabs: TTab[];
};

export const Tabs = ({ tabs }: TabsProps) => {
  return (
    <div className="flex gap-8 py-6">
      {tabs.map((tab) => (
        <NavLink
          key={tab.label}
          to={tab.to}
          end
          className={({ isActive }) =>
            clsx(
              'text-md font-bold max-w-60 w-full px-3 py-2 text-center transition-colors duration-300',
              isActive
                ? 'text-green-500 border-b-2 border-green-500'
                : 'text-slate-500',
            )
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

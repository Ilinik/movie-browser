import type { PropsWithChildren } from 'react';
import type { TActor } from '../../../../../types/entities/TMovie';

type ActorCardProps = PropsWithChildren & {
  actor: TActor;
  clasName?: string;
};

export const ActorCard = ({ actor }: ActorCardProps) => {
  return (
    <div className="relative w-full aspect-2/3 max-w-[300px] max-h-[400px] md:max-w-[300px] xl:max-w-[220px] overflow-hidden rounded-md mx-auto">
      <img
        src={`${import.meta.env.VITE_API_IMAGE}/original${actor.profile_path}`}
        alt={actor.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full bg-black/60 p-1 md:p-2 overflow-hidden">
        <p className="font-semibold text-xs md:text-sm text-white">
          {actor.name}
        </p>
        <p className="text-xs text-gray-200 dark:text-gray-300 truncate">
          as {actor.character}
        </p>
      </div>
    </div>
  );
};

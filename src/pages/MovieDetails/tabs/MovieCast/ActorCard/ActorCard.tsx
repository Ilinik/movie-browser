import type { PropsWithChildren } from 'react';
import type { TActor } from '../../../../../types/entities/TMovie';

type ActorCardProps = PropsWithChildren & {
  actor: TActor;
  clasName?: string;
};

export const ActorCard = ({ actor }: ActorCardProps) => {
  return (
    <div className="relative w-[200px] h-[300px] overflow-hidden rounded-t-md">
      <img
        src={`${import.meta.env.VITE_API_IMAGE}/w300${actor.profile_path}`}
        alt={actor.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2 overflow-hidden">
        <p className="font-semibold text-sm text-white">{actor.name}</p>
        <p className="text-xs text-gray-200 dark:text-gray-300">
          as {actor.character}
        </p>
      </div>
    </div>
  );
};

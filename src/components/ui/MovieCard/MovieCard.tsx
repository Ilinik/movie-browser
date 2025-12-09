import type { TMovie } from '../../../types/entities/TMovie';

export const MovieCard = ({ movie }: { movie: TMovie }) => {
  return (
    <div className="group flex flex-col items-center gap-3 w-full h-full cursor-pointer">
      <img
        src={`${import.meta.env.VITE_API_IMAGE}/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-xl border-2 border-transparent group-hover:border-slate-900 dark:group-hover:border-white transition duration-250"
      />
      <div className="text-center">{movie.title}</div>
    </div>
  );
};

MovieCard.displayName = 'MovieCard';

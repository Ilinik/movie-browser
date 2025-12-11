import { useNavigate } from 'react-router';
import type { TMovie } from '../../../types/entities/TMovie';
import type { TSeries } from '../../../types/entities/TSeries';

export const ItemCard = ({ movie }: { movie: TMovie | TSeries }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group flex flex-col items-center gap-3 w-full h-full cursor-pointer"
      onClick={() =>
        'title' in movie
          ? navigate(`/movie/${movie.id}`)
          : navigate(`/series/${movie.id}`)
      }
    >
      <img
        src={`${import.meta.env.VITE_API_IMAGE}/original${movie.poster_path}`}
        alt={'title' in movie ? movie.title : movie.name}
        className="rounded-xl border-2 border-transparent group-hover:border-slate-900 dark:group-hover:border-white transition duration-250"
      />
      <div className="text-center text-sm md:text-md">
        {'title' in movie ? movie.title : movie.name}
      </div>
    </div>
  );
};

ItemCard.displayName = 'ItemCard';

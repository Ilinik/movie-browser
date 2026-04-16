import { useNavigate } from 'react-router';
import type { TMovie } from '../../../types/entities/TMovie';
import type { TSeries } from '../../../types/entities/TSeries';

const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'%3E%3Crect width='200' height='300' fill='%23374151'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%236b7280'%3E%F0%9F%8E%AC%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='%236b7280'%3EPoster not found%3C/text%3E%3C/svg%3E`;

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = PLACEHOLDER_SVG;
};

export const ItemCard = ({ movie }: { movie: TMovie | TSeries }) => {
  const navigate = useNavigate();
  const title = 'title' in movie ? movie.title : movie.name;
  const src = movie.poster_path
    ? `${import.meta.env.VITE_API_IMAGE}/original${movie.poster_path}`
    : PLACEHOLDER_SVG;

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
        src={src}
        alt={title}
        onError={handleImageError}
        className="rounded-xl border-2 border-transparent group-hover:border-slate-900 dark:group-hover:border-white transition duration-250 w-full aspect-2/3 object-cover"
      />
      <div className="text-center text-sm md:text-md">{title}</div>
    </div>
  );
};

ItemCard.displayName = 'ItemCard';

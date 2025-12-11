import { useParams } from 'react-router';
import { useMovieCredits } from '../../../../hooks/movies/useMovieCredits';
import { ActorCard } from './ActorCard/ActorCard';

export const MovieCast = () => {
  const { id } = useParams();
  const { data: credits, isLoading, isError } = useMovieCredits(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 items-center justify-center">
      {credits.cast.slice(0, 12).map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </div>
  );
};

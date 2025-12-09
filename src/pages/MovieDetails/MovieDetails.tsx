import { useParams } from 'react-router';
import { useMovieDetails } from '../../hooks/useMovieDetails';

export const MovieDetails = () => {
  const { id } = useParams();

  const { data: movieDetails } = useMovieDetails(Number(id));

  console.log(movieDetails);

  return <div>{movieDetails?.title}</div>;
};

import { usePopularMovies } from '../../hooks/usePopularMovies';

export const HomePage = () => {
  const { data, isLoading, isError } = usePopularMovies();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {data.results.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

import { useParams } from 'react-router-dom';
import { useMovieImages } from '../../../../hooks/movies/useMovieImages';

export const MovieArtwork = () => {
  const { id } = useParams();
  const { data: images, isLoading, isError } = useMovieImages(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="grid grid-cols-4 gap-5">
      {images.backdrops.slice(0, 10).map((image) => (
        <img
          className="rounded-md cursor-pointer hover:scale-102 transition duration-250"
          key={image.file_path}
          src={`${import.meta.env.VITE_API_IMAGE}/w300${image.file_path}`}
        />
      ))}
    </div>
  );
};

import { Outlet, useParams } from 'react-router';
import { useMovieDetails } from '../../hooks/movies/useMovieDetails';
import type { TTab } from '../../types/entities/TTab';
import { Tabs } from '../../components/ui/Tabs/Tabs';

export const MovieDetails = () => {
  const { id } = useParams();

  const {
    data: movieDetails,
    isLoading,
    isError,
  } = useMovieDetails(Number(id));

  const tabs: TTab[] = [
    { to: '', label: 'General' },
    { to: 'cast', label: 'Cast' },
    { to: 'artwork', label: 'Artwork' },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <section className="section">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
        <img
          className="object-cover rounded-lg max-w-[200px] lg:max-w-[220px] w-full h-auto"
          src={`${import.meta.env.VITE_API_IMAGE}/original${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className="pt-6 pb-6 flex flex-col gap-5">
          <div className="flex flex-col gap-3 max-w-220 w-full">
            <h2 className="font-bold text-xl xl:text-3xl">
              {movieDetails.title}
            </h2>
            <p className="text-sm lg:text-md text-gray-600 dark:text-gray-300">
              {movieDetails.overview}
            </p>
          </div>
          <div
            className="flex flex-col gap-3 relative 
            before:content-[''] before:absolute before:left-0 before:top-0 
            before:w-full before:h-px before:bg-gray-600 before:opacity-30 py-5"
          >
            {movieDetails.status === 'Released' ? (
              <p
                className="px-4 py-2 bg-green-500 rounded-full font-medium self-start 
              transition-all duration-300 hover:scale-105 hover:shadow-lg text-white text-sm xl:text-md"
              >
                {movieDetails.status}
              </p>
            ) : (
              <p
                className="px-4 py-2 bg-red-500 rounded-full font-medium self-start 
              transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
              >
                {movieDetails.status}
              </p>
            )}

            <div className="flex flex-col gap-2">
              <p className="font-bold">Tagline</p>
              <p>
                {movieDetails.tagline.length === 0
                  ? 'Tagline not found'
                  : movieDetails.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Tabs tabs={tabs} className="justify-center" />

      <Outlet />
    </section>
  );
};

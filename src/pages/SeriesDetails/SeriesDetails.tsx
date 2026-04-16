import { Outlet, useParams } from 'react-router-dom';
import { Tabs } from '../../components/ui/Tabs/Tabs';
import { useSeriesDetails } from '../../hooks/series/useSeriesDetails';
import type { TTab } from '../../types/entities/TTab';

const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'%3E%3Crect width='200' height='300' fill='%23374151'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%236b7280'%3E%F0%9F%8E%AC%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='%236b7280'%3EPoster not found%3C/text%3E%3C/svg%3E`;

export const SeriesDetails = () => {
  const { id } = useParams();

  const {
    data: seriesDetails,
    isLoading,
    isError,
  } = useSeriesDetails(Number(id));

  const src = seriesDetails?.poster_path
    ? `${import.meta.env.VITE_API_IMAGE}/original${seriesDetails.poster_path}`
    : PLACEHOLDER_SVG;

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
          src={src}
          alt={seriesDetails.name}
        />
        <div className="pt-6 pb-6 flex flex-col gap-5">
          <div className="flex flex-col gap-3 max-w-220 w-full">
            <h2 className="font-bold text-xl xl:text-3xl">
              {seriesDetails.name}
            </h2>
            <p className="text-sm lg:text-md text-gray-600 dark:text-gray-300">
              {seriesDetails.overview}
            </p>
          </div>
          <div
            className="flex flex-col gap-3 relative 
            before:content-[''] before:absolute before:left-0 before:top-0 
            before:w-full before:h-px before:bg-gray-600 before:opacity-30 py-5"
          >
            {seriesDetails.status === 'Released' ? (
              <p
                className="px-4 py-2 bg-green-500 rounded-full font-medium self-start 
              transition-all duration-300 hover:scale-105 hover:shadow-lg text-white text-sm xl:text-md"
              >
                {seriesDetails.status}
              </p>
            ) : (
              <p
                className="px-4 py-2 bg-red-500 rounded-full font-medium self-start 
              transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
              >
                {seriesDetails.status}
              </p>
            )}

            <div className="flex flex-col gap-2">
              <p className="font-bold">Tagline</p>
              <p>
                {seriesDetails.tagline.length === 0
                  ? 'Tagline not found'
                  : seriesDetails.tagline}
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

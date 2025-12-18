import { useParams } from 'react-router-dom';
import { InfoRow } from './InfoRow/InfoRow';
import { useSeriesDetails } from '../../../../hooks/series/useSeriesDetails';

export const SeriesGeneral = () => {
  const { id } = useParams();

  const {
    data: generalDetails,
    isLoading,
    isError,
  } = useSeriesDetails(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const formatRuntime = (runtimes: number[]): string => {
    if (!runtimes || runtimes.length === 0) return '—';
    return runtimes.length === 1
      ? `${runtimes[0]} minutes`
      : `${runtimes.join(', ')} minutes`;
  };

  const formatCountries = (countries: string[]): string => {
    if (!countries || countries.length === 0) return '—';
    return countries.join(', ');
  };

  return (
    <ul className="py-5 w-full space-y-6">
      <InfoRow label="Title" value={generalDetails.name} />
      <InfoRow label="Original Title" value={generalDetails.original_name} />

      <InfoRow label="Status" value={generalDetails.status} />
      <InfoRow label="Type" value={generalDetails.type} />
      <InfoRow
        label="In Production"
        value={generalDetails.in_production ? 'Yes' : 'No'}
      />

      <InfoRow label="Release Date" value={generalDetails.first_air_date} />
      <InfoRow
        label="Last Air Date"
        value={generalDetails.last_air_date || '—'}
      />

      <InfoRow
        label="Number of Seasons"
        value={String(generalDetails.number_of_seasons)}
      />
      <InfoRow
        label="Number of Episodes"
        value={String(generalDetails.number_of_episodes)}
      />
      <InfoRow
        label="Runtime"
        value={formatRuntime(generalDetails.episode_run_time)}
      />

      <InfoRow
        label="Genres"
        value={
          generalDetails.genres && generalDetails.genres.length > 0
            ? generalDetails.genres.map((g) => g.name).join(', ')
            : '—'
        }
      />
      <InfoRow
        label="Original Language"
        value={generalDetails.original_language?.toUpperCase() || '—'}
      />
      <InfoRow
        label="Languages"
        value={generalDetails.languages?.join(', ') || '—'}
      />
      <InfoRow
        label="Spoken Languages"
        value={
          generalDetails.spoken_languages &&
          generalDetails.spoken_languages.length > 0
            ? generalDetails.spoken_languages
                .map((l) => l.english_name || l.name)
                .join(', ')
            : '—'
        }
      />

      <InfoRow
        label="Origin Country"
        value={formatCountries(generalDetails.origin_country)}
      />

      <InfoRow
        label="Homepage"
        value={
          generalDetails.homepage && generalDetails.homepage.trim() ? (
            <a
              href={generalDetails.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300"
            >
              {generalDetails.homepage}
            </a>
          ) : (
            '—'
          )
        }
      />

      <InfoRow
        label="Rating"
        value={`${generalDetails.vote_average} / 10 (${generalDetails.vote_count} votes)`}
      />

      {generalDetails.last_episode_to_air && (
        <>
          <InfoRow
            label="Last Episode"
            value={`${generalDetails.last_episode_to_air.name} (S${generalDetails.last_episode_to_air.season_number}E${generalDetails.last_episode_to_air.episode_number})`}
          />
          <InfoRow
            label="Last Episode Air Date"
            value={generalDetails.last_episode_to_air.air_date}
          />
        </>
      )}

      {generalDetails.adult && (
        <InfoRow label="Adult Content" value="Yes (18+)" />
      )}
    </ul>
  );
};

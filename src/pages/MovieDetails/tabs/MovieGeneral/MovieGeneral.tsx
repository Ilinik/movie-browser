import { useParams } from 'react-router-dom';
import { InfoRow } from './InfoRow/InfoRow';
import { useMovieDetails } from '../../../../hooks/movies/useMovieDetails';

export const MovieGeneral = () => {
  const { id } = useParams();

  const {
    data: generalDetails,
    isLoading,
    isError,
  } = useMovieDetails(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(generalDetails);

  return (
    <ul className="py-5 w-full space-y-6">
      <InfoRow label="Title" value={generalDetails.title} />

      <InfoRow label="Original Title" value={generalDetails.original_title} />

      <InfoRow label="Status" value={generalDetails.status} />

      <InfoRow
        label="Release Date"
        value={`${generalDetails.release_date} (${generalDetails.production_countries?.[0]?.name ?? ''})`}
      />

      <InfoRow
        label="Runtime"
        value={
          generalDetails.runtime ? `${generalDetails.runtime} minutes` : '—'
        }
      />

      <InfoRow
        label="Genres"
        value={generalDetails.genres?.map((g) => g.name).join(', ')}
      />

      <InfoRow
        label="Production Countries"
        value={
          generalDetails.production_countries?.map((c) => c.name).join(', ') ||
          '—'
        }
      />

      <InfoRow
        label="Original Language"
        value={generalDetails.original_language?.toUpperCase()}
      />

      <InfoRow
        label="Spoken Languages"
        value={
          generalDetails.spoken_languages
            ?.map((l) => l.english_name || l.name)
            .join(', ') || '—'
        }
      />

      <InfoRow
        label="Budget"
        value={
          generalDetails.budget
            ? `$${generalDetails.budget.toLocaleString()}`
            : '—'
        }
      />

      <InfoRow
        label="Revenue"
        value={
          generalDetails.revenue
            ? `$${generalDetails.revenue.toLocaleString()}`
            : '—'
        }
      />

      <InfoRow
        label="Homepage"
        value={
          generalDetails.homepage ? (
            <a
              href={generalDetails.homepage}
              target="_blank"
              className="text-green-400 underline"
            >
              {generalDetails.homepage}
            </a>
          ) : (
            '—'
          )
        }
      />

      <InfoRow
        label="IMDB"
        value={
          generalDetails.imdb_id ? (
            <a
              href={`https://www.imdb.com/title/${generalDetails.imdb_id}`}
              target="_blank"
              className="text-green-500 underline"
            >
              {generalDetails.imdb_id}
            </a>
          ) : (
            '—'
          )
        }
      />

      <InfoRow label="Rating" value={`${generalDetails.vote_average} / 10`} />
    </ul>
  );
};

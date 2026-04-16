import { useSearchParams } from 'react-router';
import { useSearchMulti } from '../../hooks/useSearchMulti';
import { ItemCard } from '../../components/ui/ItemCard/ItemCard';
import type { TSearchResult } from '../../types/api/TSearchService';
import type { TMovie } from '../../types/entities/TMovie';
import type { TSeries } from '../../types/entities/TSeries';

const toItemCardProp = (item: TSearchResult): TMovie | TSeries => {
  if (item.media_type === 'movie') {
    return item as unknown as TMovie;
  }
  return item as unknown as TSeries;
};

export const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  const { data: searchMulti, isLoading, isError } = useSearchMulti(query);

  if (query.length <= 2) {
    return (
      <p className="mt-6 text-slate-400">
        Enter at least 3 characters to search...
      </p>
    );
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  if (!searchMulti?.results.length) {
    return (
      <p className="mt-6 text-slate-400">
        Nothing found for &ldquo;{query}&rdquo;
      </p>
    );
  }

  return (
    <div className="mt-6 flex flex-col gap-4">
      <h2 className="font-bold text-xl">
        Results for &ldquo;{query}&rdquo;{' '}
        <span className="text-slate-400 font-normal text-base">
          ({searchMulti.total_results})
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {searchMulti.results.map((item) => (
          <ItemCard key={item.id} movie={toItemCardProp(item)} />
        ))}
      </div>
    </div>
  );
};

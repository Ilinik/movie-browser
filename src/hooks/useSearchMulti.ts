import { useQuery } from '@tanstack/react-query';
import SearchService from '../services/SearchService';
import type { TSearchMulti } from '../types/api/TSearchService';

export const useSearchMulti = (query: string) => {
  return useQuery<TSearchMulti>({
    queryKey: ['multi', 'search', query],
    queryFn: () => SearchService.searchMulti(query),
    enabled: query.length > 2,
  });
};

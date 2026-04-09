import { axiosClient } from '../api/axiosClient';
import { ENDPOINTS } from '../api/endpoints';
import type { TSearchMulti } from '../types/api/TSearchService';

export default class SearchService {
  static async searchMulti(query: string): Promise<TSearchMulti> {
    const response = await axiosClient.get<TSearchMulti>(
      ENDPOINTS.search.multi(query),
    );
    return response.data;
  }
}

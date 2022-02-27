import { useQuery } from 'react-query';
import { getCities } from '../../../../../services/api/methods';
import { GeocodingAPIResponse } from '../../../types';

const getCitiesDebounced = (searchTerm: string) => getCities(searchTerm || '');

export const useGetLocationSuggestions = (searchTerm?: string) => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError
  } = useQuery<GeocodingAPIResponse>(['location', searchTerm], () => getCitiesDebounced(searchTerm || ''), {
    enabled: !!searchTerm && searchTerm.length >= 2,
    retry: false,
    refetchOnWindowFocus: false
  });

  return { suggestions: data, loadingSuggestions: isLoading, fetchingSuggestions: isFetching, suggestionsError: isError };
};

import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { ClearIcon, Search, Suggestions, Wrapper } from './search-input.styles';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { SearchResults } from './components/search-results/search-results.components';
import { useOutsideAlerter } from './hooks/useOutsideClick';
import { useWeather } from '../../context';
import { useGetLocationSuggestions } from './hooks/useGetLocationSuggestions';
import { useDebounce } from './hooks/useDebounce';
import { GeocodingAPI } from '../../types';

interface ISearchInputProps {}
export const SearchInput: React.FC<ISearchInputProps> = () => {
  const { state, dispatch } = useWeather();
  const [searchTerm, setSearchTerm] = React.useState(state.locationName);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const searchRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    setSearchTerm(state.locationName);
  }, [state.locationName]);

  const outsideAlerterHandler = React.useCallback(() => {
    setShowSuggestions(false);
  }, []);

  useOutsideAlerter(searchRef, outsideAlerterHandler);

  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const { suggestions, loadingSuggestions, fetchingSuggestions, suggestionsError } = useGetLocationSuggestions(debouncedSearchTerm);

  const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSearchInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setShowSuggestions(true);
  };

  const onSearchResultClick = (item: GeocodingAPI) => {
    const locationName = `${item.name}, ${item.state}, ${item.country}`;
    setSearchTerm(locationName);
    dispatch({ type: 'SET_LOCATION', payload: { latitude: item.lat, longitude: item.lon, name: `${item.name}, ${item.state}` } });
    dispatch({ type: 'SET_LOCATION_NAME', payload: locationName });
    setShowSuggestions(false);
  };

  const onClear = () => setSearchTerm('');

  return (
    <Wrapper ref={searchRef}>
      <Search>
        <input type="text" placeholder="Enter City, State, Country" value={searchTerm} onChange={onSearchTermChange} onFocus={onSearchInputFocus} />
        {!!searchTerm && (
          <ClearIcon onClick={onClear}>
            <IoMdCloseCircleOutline size="1.3em" />
          </ClearIcon>
        )}
      </Search>

      {showSuggestions && (
        <Suggestions emptyListMessage={suggestionsError ? 'Oops, something went wrong' : debouncedSearchTerm ? 'No results' : 'Please type at least two characters'}>
          {loadingSuggestions || fetchingSuggestions ? (
            <TailSpin ariaLabel="loading-indicator" color="gray" width={30} height={30} />
          ) : (
            <SearchResults suggestions={suggestions as Array<GeocodingAPI>} onSearchResultClick={onSearchResultClick} />
          )}
        </Suggestions>
      )}
    </Wrapper>
  );
};

import React from 'react';
import { GeocodingAPI } from '../../../../types';
import { ResultItem } from './search-results.styles';

interface ISearchResultsProps {
  suggestions: Array<GeocodingAPI>;
  onSearchResultClick: any;
}
export const SearchResults: React.FC<ISearchResultsProps> = ({ suggestions, onSearchResultClick }) => {
  return (
    <>
      {suggestions.map((item, index: number) => (
        <ResultItem key={`${item.name}_${item.state}_${item.country}_${index}`} onClick={() => onSearchResultClick(item)}>
          <p>{`${item.name}, ${item.state}, ${item.country}`}</p>
        </ResultItem>
      ))}
    </>
  );
};

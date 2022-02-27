import React from 'react';
import { useQuery } from 'react-query';
import { useWeather } from '../../pages/home/context';
import { GeocodingAPIResponse } from '../../pages/home/types';
import { getCurrentCountry } from '../../services/api/methods';

export const useCurrentLocation = () => {
  const [error, setError] = React.useState<{ code: number; message: string } | null>(null);
  const { state, dispatch } = useWeather();

  const response = useQuery('coordsToLocation', () => getCurrentCountry({ lat: state.location?.latitude, lon: state.location?.longitude }), {
    enabled: !!state.location,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (data: GeocodingAPIResponse) => {
      let locationName = '';
      let location = '';
      if (Array.isArray(data)) {
        const [firstLocation] = data;
        locationName = `${firstLocation.name}, ${firstLocation.state}, ${firstLocation.country}`;
        location = `${firstLocation.name}, ${firstLocation.state}`;
      } else {
        const { name, state, country } = data;
        locationName = `${name}, ${state}, ${country}`;
        location = `${name}, ${state}`;
      }
      dispatch({ type: 'SET_LOCATION_NAME', payload: locationName });
      dispatch({ type: 'SET_LOCATION', payload: { ...state.location, name: location } });
    }
  });

  React.useEffect(() => {
    // If the geolocation is not defined in the used browser you can handle it as an error
    if (!navigator.geolocation) {
      setError({ code: 2, message: 'Geolocation is not supported.' });
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  const handleSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    dispatch({ type: 'SET_LOCATION', payload: { latitude, longitude } });
  };

  const handleError = ({ code, message }: GeolocationPositionError) => {
    setError({ code, message });
  };

  return { location: state.location, error };
};

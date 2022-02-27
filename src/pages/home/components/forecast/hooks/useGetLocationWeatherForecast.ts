import { useQuery } from 'react-query';
import { getWeatherForecast } from '../../../../../services/api/methods';
import { useWeather } from '../../../context';

export const useGetLocationWeatherForecast = () => {
  const {
    state: { location, locationName, temperatureUnit }
  } = useWeather();

  const { data, isLoading, isFetching, isError } = useQuery(
    ['weather', locationName, temperatureUnit],
    () => getWeatherForecast({ lat: location?.latitude, lon: location?.longitude, tempUnit: temperatureUnit }),
    {
      enabled: !!location?.latitude && !!location?.longitude,
      refetchOnWindowFocus: false,
      retry: false
    }
  );

  return { forecastData: { current: data?.current, weekly: data?.daily }, loadingForecase: isLoading, fetchingForecase: isFetching, forecaseError: isError };
};

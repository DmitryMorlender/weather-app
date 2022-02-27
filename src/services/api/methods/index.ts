import { photoClient, weatherClient } from '../clients';
import QueryString, { StringifyOptions } from 'query-string';
import { GeocodingAPI, GeocodingAPIResponse, PhotoAPIResponse, WeatherAPIResponse } from '../../../pages/home/types';
import { TemperatureUnit } from '../../../pages/home/context';

const queryStringOptions: StringifyOptions = {
  skipNull: true
};

const seperator: StringifyOptions = {
  arrayFormat: 'separator',
  arrayFormatSeparator: ','
};

export const getCities = async (searchTerm: string, limit: number = 5) => {
  const path = `/geo/1.0/direct?appid=${process.env.REACT_APP_WEATHER_APPID}`;
  const queryString = QueryString.stringify({ q: searchTerm, limit });
  const { data } = await weatherClient().get(`${path}&${queryString}`);
  return data;
};

export const getWeatherForecast = async ({ lat, lon, tempUnit }: { lat?: number; lon?: number; tempUnit: TemperatureUnit }) => {
  const path = `/data/2.5/onecall?appid=${process.env.REACT_APP_WEATHER_APPID}`;
  const queryString = QueryString.stringify(
    {
      lat,
      lon,
      units: tempUnit === 'CELSIUS' ? 'metric' : 'imperial',
      exclude: ['minutely', 'hourly']
    },
    {
      ...queryStringOptions,
      ...seperator
    }
  );

  const { data } = await weatherClient().get<WeatherAPIResponse>(`${path}&${queryString}`);
  return data;
};

export const getCurrentCountry = async ({ lat, lon }: { lat?: number; lon?: number }) => {
  if (!lat || !lon) {
    return;
  }
  const path = `/geo/1.0/reverse?appid=${process.env.REACT_APP_WEATHER_APPID}`;
  const queryString = QueryString.stringify(
    {
      lat,
      lon
    },
    {
      ...queryStringOptions,
      ...seperator
    }
  );

  const { data } = await weatherClient().get<GeocodingAPIResponse | GeocodingAPI>(`${path}&${queryString}`);
  return data;
};

export const getPhoto = async (location: string = '') => {
  const path = `/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
  const query = QueryString.stringify({ query: encodeURI(location) });
  const { data } = await photoClient().get<PhotoAPIResponse>(`${path}&${query}`);
  return data;
};

export const getRandomPhoto = async () => {
  const path = `/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
  const { data } = await photoClient().get<PhotoAPIResponse>(`${path}`);
  return data;
};

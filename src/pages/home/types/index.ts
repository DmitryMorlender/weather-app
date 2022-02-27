export type GeocodingAPI = {
  name: string;
  lat: number;
  lon: number;
  state?: string;
  country: string;
};

export type GeocodingAPIResponse = Array<GeocodingAPI> | GeocodingAPI;

export type CurrentWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: 'Rain';
      description: 'light rain';
      icon: '10d';
    }
  ];
  rain: {
    '1h': number;
  };
};

export type DailyForecast = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};

export type WeatherAPIResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeather;
  daily: Array<DailyForecast>;
};

export type WeatherForecast = {
  current?: CurrentWeather;
  weekly?: Array<DailyForecast>;
};

export type Photo = {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};
export type PhotoAPIResponse = {
  total: number;
  total_pages: number;
  results: Array<Photo>;
};

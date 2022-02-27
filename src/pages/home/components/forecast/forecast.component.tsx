import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { MinMaxTemperature } from '../../../../components/min-max-temperature/min-max-temperature.component';
import { Temperature } from '../../../../components/temparture/temparture.component';
import { WeatherIcon } from '../../../../components/weather-icon/weather-icon.component';
import { useGetLocationWeatherForecast } from './hooks/useGetLocationWeatherForecast';
import { WeatherCaption } from '../weather-caption/weather-caption.component';
import { EmptyListMessage, ErrorMessage, Forcast, Icon, LoaderContainer, Primary, Secondary, WeatherIconAndTemperature, WeekDay, Weekly } from './forecast.styles';
import { useWeather } from '../../context';

interface IForecastProps {}
export const Forecast: React.FC<IForecastProps> = () => {
  const {
    forecastData: { timeZoneOffset = 0, current, weekly = [] },
    loadingForecase,
    fetchingForecase,
    forecaseError
  } = useGetLocationWeatherForecast();
  const {
    state: { temperatureUnit, locationName }
  } = useWeather();

  if (loadingForecase) {
    return (
      <LoaderContainer>
        <TailSpin ariaLabel="loading-indicator" color="gray" width={60} height={60} />
      </LoaderContainer>
    );
  }

  if (forecaseError) {
    return (
      <ErrorMessage>
        <h3>Oops, could not retrieve data, please try again later.</h3>
      </ErrorMessage>
    );
  }

  if (weekly.length === 0) {
    return <EmptyListMessage emptyListMessage={locationName ? 'No results found' : 'Please enter a location'} />;
  }

  return (
    <Forcast>
      {!!current ? (
        <Primary>
          <WeekDay>{'Now'}</WeekDay>
          <WeatherIconAndTemperature>
            <Icon>
              <WeatherIcon iconId={current?.weather[0]?.id} className="primary" />
            </Icon>
            <WeatherCaption className="primary-caption" text={current?.weather[0]?.description} />
          </WeatherIconAndTemperature>

          <MinMaxTemperature min={<Temperature temperature={current.temp} temperatureUnit={temperatureUnit} />} />
        </Primary>
      ) : null}

      <Weekly>
        {weekly.slice(1).map(({ dt, weather, temp: { min, max } }, index: number) => {
          const [dayWeather] = weather;
          const { id, description } = dayWeather;
          const dayname = new Date(dt * 1000).toLocaleDateString('en', {
            weekday: 'long'
          });

          return (
            <Secondary key={dt}>
              <WeekDay>{dayname}</WeekDay>
              <Icon>
                <WeatherIcon iconId={id} className="secondary" />
              </Icon>
              <WeatherCaption className="secondary-caption" text={description} />
              <MinMaxTemperature min={<Temperature temperature={min} temperatureUnit={temperatureUnit} />} max={<Temperature temperature={max} temperatureUnit={temperatureUnit} />} seperator="/" />
            </Secondary>
          );
        })}
      </Weekly>
    </Forcast>
  );
};

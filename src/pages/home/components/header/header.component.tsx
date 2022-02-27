import React from 'react';
import { useWeather } from '../../context';
import { SearchInput } from '../search-input/search-input.component';
import { TimeAndDate } from '../time-and-date/time-and-date.component';
import { InputContainer, Wrapper } from './header.styles';
import { Switch } from '../../../../components/switch/switch.component';

interface IHeaderProps {}
export const Header: React.FC<IHeaderProps> = () => {
  const {
    state: { temperatureUnit },
    dispatch
  } = useWeather();
  return (
    <Wrapper>
      <TimeAndDate />
      <InputContainer>
        <SearchInput />
        <Switch checked={temperatureUnit === 'CELSIUS'} onChange={() => dispatch({ type: 'TOGGLE_TEMPERATURE', payload: temperatureUnit === 'CELSIUS' ? 'FAHRENHEIT' : 'CELSIUS' })} />
      </InputContainer>
    </Wrapper>
  );
};

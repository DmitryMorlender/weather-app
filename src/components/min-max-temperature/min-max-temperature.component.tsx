import React from 'react';
import { Wrapper } from './min-max-temperature.styles';

interface IMinMaxTemperatureProps {
  min: React.ReactNode;
  max?: React.ReactNode;
  seperator?: string;
}
export const MinMaxTemperature: React.FC<IMinMaxTemperatureProps> = ({ min, seperator, max }) => {
  return (
    <Wrapper className="temp-wrapper">
      {min}
      {seperator ? seperator : null}
      {max ? max : null}
    </Wrapper>
  );
};

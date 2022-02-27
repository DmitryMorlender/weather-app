import React from 'react';
import { TemperatureUnit, TemperatureUnits } from '../../pages/home/context';
import { PrimaryTempeture } from './temparture.styles';

interface ITemperatureProps {
  temperature: number;
  temperatureUnit?: TemperatureUnit;
}
export const Temperature: React.FC<ITemperatureProps> = ({ temperature, temperatureUnit = 'CELSIUS' }) => {
  const roundedTemperature = Math.round(temperature);
  return (
    <PrimaryTempeture>
      {roundedTemperature}
      <Sign sign={temperatureUnit} />
    </PrimaryTempeture>
  );
};

export const Sign = ({ sign }: { sign: TemperatureUnit }) => <span>{TemperatureUnits[sign]}</span>;

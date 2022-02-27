import React from 'react';
import { dateOptions } from './utils';
import { FormattedDate } from './date.styles';
interface IDateProps {
  date?: Date | number;
}
export const AppDate: React.FC<IDateProps> = ({ date }) => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', dateOptions).format(date || new Date());
  return <FormattedDate>{formattedDate}</FormattedDate>;
};

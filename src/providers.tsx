import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryClientProvider } from './hooks/query-client';
import { WeatherProvider } from './pages/home/context';

interface IProviderProps {}
export const Providers: React.FC<IProviderProps> = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      <BrowserRouter>
        <WeatherProvider>{children}</WeatherProvider>
      </BrowserRouter>
    </ReactQueryClientProvider>
  );
};

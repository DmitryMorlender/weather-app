import React from 'react';
import { Blurhash } from 'react-blurhash';
import { useCurrentLocation } from '../../hooks/location';
import { Forecast } from './components/forecast/forecast.component';
import { Header } from './components/header/header.component';
import { Background, Container, Details } from './home.styles';
import { useGetLocationPhoto } from './hooks/useGetLocationPhoto';

interface IHomeProps {}
export const Home: React.FC<IHomeProps> = () => {
  useCurrentLocation();

  const { photo } = useGetLocationPhoto();

  return (
    <Container>
      {!photo.isReady && !!photo.src ? <Blurhash hash={photo.src} width={'100vw'} height={'100vh'} /> : <Background backgroundImageUrl={`${photo.src}`} />}
      <Details>
        <Header />
        <Forecast />
      </Details>
    </Container>
  );
};

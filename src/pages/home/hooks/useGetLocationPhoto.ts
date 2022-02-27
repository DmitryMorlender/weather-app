import React from 'react';
import { useQuery } from 'react-query';
import { getPhoto } from '../../../services/api/methods';
import { useWeather } from '../context';

export const useGetLocationPhoto = () => {
  const {
    state: { location }
  } = useWeather();
  const [backgroundImageUrl, setBackgroundImageUrl] = React.useState({ isReady: false, src: '' });

  const { isLoading, isFetching, isError } = useQuery(['locationName', location?.name], () => getPhoto(location?.name), {
    enabled: !!location && !!location.name,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: data => {
      const imageSrc = !!data && !!data.results ? data.results[0].urls.regular : '';
      const blurHash = !!data && !!data.results ? data.results[0].blur_hash : '';
      setBackgroundImageUrl({ isReady: false, src: blurHash });
      const imageLoader = new Image();
      imageLoader.src = imageSrc;

      imageLoader.onload = () => {
        setBackgroundImageUrl({ isReady: true, src: imageSrc });
      };
    }
  });

  return { photo: backgroundImageUrl, loadingPhoto: isLoading, fetchingPhoto: isFetching, photoError: isError };
};

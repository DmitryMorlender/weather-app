import { client } from '../base-client';

export const photoClient = () => {
  const baseURL = process.env.REACT_APP_UNSPLASH_API_BASE;

  if (!baseURL) {
    throw new Error('No BaseURL');
  }
  return client().create({
    baseURL
  });
};

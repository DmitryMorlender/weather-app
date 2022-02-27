import { client } from "../base-client";

export const weatherClient = () => {
  const baseURL = process.env.REACT_APP_OPEN_WEATHER_BASE_URL;

  if (!baseURL) {
    throw new Error("No BaseURL");
  }

  return client().create({
    baseURL,
  });
};

import React from "react";

interface IWeatherCaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
}

export const WeatherCaption: React.FC<IWeatherCaptionProps> = ({
  text,
  ...props
}) => {
  return <span {...props}>{text}</span>;
};

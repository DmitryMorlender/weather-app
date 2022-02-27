import React from "react";
import { WeatherIcon as Icon } from "weather-react-icons";
import { IconWrapper } from "./weather-icon.styles";

interface IWeatherIconProps {
  iconId: number | string;
  night?: boolean;
  className?: string;
  caption?: React.ReactNode;
}
export const WeatherIcon: React.FC<IWeatherIconProps> = ({
  iconId,
  night = false,
  className,
  caption,
}) => {
  const iconClass = ["weather-icon", className].join(" ");
  const id = Number(iconId);

  return (
    <IconWrapper>
      <Icon iconId={id} name={"owm"} night={night} className={iconClass} />
      {caption && caption}
    </IconWrapper>
  );
};

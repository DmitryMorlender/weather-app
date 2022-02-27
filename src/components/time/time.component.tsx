import React from "react";
import { Time } from "./time.styles";

const getTime = (is24Hours: boolean = false) =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: !is24Hours,
  }).format(new Date());

interface IAppTimeProps {
  is24Hours?: boolean;
}
export const AppTime: React.FC<IAppTimeProps> = ({ is24Hours = false }) => {
  const date = getTime(is24Hours);
  return <Time>{date}</Time>;
};

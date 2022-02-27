import React from "react";
import { AppDate } from "../../../../components/date/date.component";
import { AppTime } from "../../../../components/time/time.component";
import { Wrapper } from "./time-and-date.styles";

interface ITimeAndDateProps {}
export const TimeAndDate: React.FC<ITimeAndDateProps> = () => {
  return (
    <Wrapper>
      <AppTime />
      <AppDate />
    </Wrapper>
  );
};

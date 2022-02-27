import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home/home.component";

export const WeatherApp: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" render={() => <Redirect to={"/"} />} />
    </Switch>
  );
};

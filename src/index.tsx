import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "weather-react-icons/lib/css/weather-icons.css";
import { Providers } from "./providers";
import reportWebVitals from "./reportWebVitals";
import { WeatherApp } from "./weather-app.component";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <WeatherApp />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';

export const TemperatureUnits = {
  CELSIUS: '\u2103',
  FAHRENHEIT: '\u2109'
} as const;
export type TemperatureUnit = keyof typeof TemperatureUnits;
export type LocationType = { latitude: number; longitude: number; name: string };
type Location = LocationType | null;
type ActionTypes = 'TOGGLE_TEMPERATURE' | 'SET_LOCATION' | 'SET_BACKGROUND_IMAGE' | 'SET_LOCATION_NAME';
type Action = { type: ActionTypes; payload?: any };
type Dispatch = (action: Action) => void;
type State = { temperatureUnit: TemperatureUnit; location: Location; locationName?: string; backgroundImageUrl: string };

const WeatherStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const initialState: State = {
  temperatureUnit: 'CELSIUS',
  location: null,
  backgroundImageUrl: '',
  locationName: ''
};
const weatherReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_TEMPERATURE':
      return { ...state, temperatureUnit: state.temperatureUnit === 'CELSIUS' ? 'FAHRENHEIT' : 'CELSIUS' };
    case 'SET_LOCATION':
      return { ...state, location: { ...payload } };
    case 'SET_BACKGROUND_IMAGE':
      return { ...state, backgroundImageUrl: payload };
    case 'SET_LOCATION_NAME':
      return { ...state, locationName: payload };
    default:
      return state;
  }
};

export const WeatherProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(weatherReducer, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [state]);
  return <WeatherStateContext.Provider value={value}>{children}</WeatherStateContext.Provider>;
};

export const useWeather = () => {
  const context = React.useContext(WeatherStateContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

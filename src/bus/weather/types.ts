// fetching
export const WEATHER_START_FETCHING = 'WEATHER_START_FETCHING';
export const WEATHER_STOP_FETCHING = 'WEATHER_STOP_FETCHING';
export const WEATHER_FILL = 'WEATHER_FILL';
export const WEATHER_SET_FETCHING_ERROR = 'WEATHER_SET_FETCHING_ERROR';

// async
export const WEATHER_FETCH_ASYNC = 'WEATHER_FETCH_ASYNC';

// filtration
export const WEATHER_SET_MIN_TEMPERATURE = 'WEATHER_SET_MIN_TEMPERATURE';
export const WEATHER_SET_MAX_TEMPERATURE = 'WEATHER_SET_MAX_TEMPERATURE';
export const WEATHER_SET_TYPE_OF_WEATHER = 'WEATHER_SET_TYPE_OF_WEATHER';
export const WEATHER_SET_MINTEMPVALID_ERROR = 'WEATHER_SET_MINTEMPVALID_ERROR';
export const WEATHER_SET_MAXTEMPVALID_ERROR = 'WEATHER_SET_MAXTEMPVALID_ERROR';
export const WEATHER_SET_STATUS_OF_FILTER = 'WEATHER_SET_STATUS_OF_FILTER';


// Typescripts Types

// ---------------------Reducer Types----------------------------
export type dataType = {
  day: number;
  humidity: number;
  readonly id: string;
  rain_probability: number;
  temperature: number;
  type: string;
};

export type initialStateType = {
  data: dataType[] | [];
  isFetching: boolean;
  error: boolean | number | null;
  weatherType: string;
  minTemperature: string;
  maxTemperature: string;
  minTempValidError: boolean;
  maxTempValidError: boolean;
  filterStatus: boolean;
}


// ---------------------Actions Types----------------------------

export type actionTypeObjType = {
  type: string;
  payload?: any;
  error?: any; 
}

type actionObjType = {
  type: string;
}

type fillActionObjType = actionObjType & {
  payload: dataType[] | null;
}

type errorType = {
  status: boolean | number | null;
}

type fetchingErrorObjType = actionObjType & {
  error: errorType;
  payload: errorType;
}

type minMaxTemperatureObjType = actionObjType & {
  payload: string;
}

type typeOfWeatherObjType = actionObjType & {
  payload: string;
}

type minMaxTempValidationErrorObjType = actionObjType & {
  payload: boolean;
}

type filterStatusObjType = actionObjType & {
  payload: boolean;
}

// Types of methods in the Action object

type startFetchingType = () => actionObjType;
type stopFetchingType = () => actionObjType;
type fillType = (payload: dataType[] | null) => fillActionObjType;
type fetchingErrorType = (error: errorType) => fetchingErrorObjType;
type fetchAsyncType = () => void;
type setTemperatureType = (payload: string) => minMaxTemperatureObjType;
type setTypeOfWeatherType = (payload: string) => typeOfWeatherObjType;
type setminMaxTempValidationError = (payload: boolean) => minMaxTempValidationErrorObjType;
type setFilterStatusType = (payload: boolean) => filterStatusObjType;

export type forecastActionsType = {
  startFetching: startFetchingType;
  stopFetching: stopFetchingType;
  fill: fillType;
  setFetchingError: fetchingErrorType;
  fetchAsync: fetchAsyncType;
  setMinTemperature: setTemperatureType;
  setMaxTemperature: setTemperatureType;
  setTypeOfWeather: setTypeOfWeatherType;
  setMinTempValidationError: setminMaxTempValidationError;
  setMaxTempValidationError: setminMaxTempValidationError;
  setFilterStatus: setFilterStatusType;
}


// ---------------------Store Types-------------------------------

type weatherDayIdType = {
  activeId: number;
}

export type stateType = {
  weather: initialStateType;
  weatherDayId: weatherDayIdType;
}
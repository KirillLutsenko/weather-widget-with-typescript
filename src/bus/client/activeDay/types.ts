export const types = Object.freeze({
  WEATHER_SET_ACTIVE_DAY: 'WEATHER_SET_ACTIVE_DAY',
});

// Typescript types

// --------------Action types--------------------

type userIdObj = {
  type: string;
  payload: number;
}

type setUserIdType = (payload: number) => userIdObj;

export type weatherDayIdActionsType = {
  setUserId: setUserIdType;
}

// -------------Reducer types--------------------

export type initialStateType = {
  activeId: Number;
}

export type actionTypeObj = {
  type: string;
  payload: number;
}

// ---------------------Store Types-------------------------------

type weatherDayIdType = {
  activeId: number;
}

export type stateType = {
  weather: initialStateType;
  weatherDayId: weatherDayIdType;
}
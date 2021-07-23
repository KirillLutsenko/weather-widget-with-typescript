import { types, weatherDayIdActionsType } from './types';

export const weatherDayIdActions: weatherDayIdActionsType = Object.freeze({
  setUserId: payload => ({
    type: types.WEATHER_SET_ACTIVE_DAY,
    payload,
  }),
});

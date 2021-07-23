import { actionTypeObj, initialStateType, types } from './types';

const initialState: initialStateType = {
  activeId: 0,
};

export const clientReducer = (state = initialState, action: actionTypeObj) => {
  switch (action.type) {
    case types.WEATHER_SET_ACTIVE_DAY:
      return {
        activeId: action.payload,
      };

    default:
      return state;
  }
};

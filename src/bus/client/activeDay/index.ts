// core
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from './types';

// actions
import { weatherDayIdActions } from './actions';

// types & reducers
export * from './types';
export * from './reducer';

export const useWeatherDayId = () => {
  const dispatch = useDispatch();
  const useDayId = (id: number) => dispatch(weatherDayIdActions.setUserId(id));

  const dayId = useSelector((state: stateType) => state.weatherDayId.activeId);

  return {
    dayId,
    useDayId,
  };
};

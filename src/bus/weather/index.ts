// core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from './types';

// actions
import { forecastActions } from './actions';

// types & reducers
export * from './types';
export * from './reducer';


export const useForecast = () => {
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    error,
    minTemperature,
    maxTemperature,
    weatherType,
    minTempValidError,
    maxTempValidError,
    filterStatus,
  } = useSelector((state: stateType) => state.weather);

  useEffect(() => {
    dispatch(forecastActions.fetchAsync());
  }, [dispatch]);

  const minTemperatureChange = (value: string) => {
    const numberValidation = value.replace(/[^\d.]/g, '');

    dispatch(forecastActions.setMinTempValidationError(false));
    dispatch(forecastActions.setMinTemperature(numberValidation));
  };

  const maxTemperatureChange = (value: string) => {
    const numberValidation = value.replace(/[^\d.]/g, '');

    dispatch(forecastActions.setMaxTempValidationError(false));
    dispatch(forecastActions.setMaxTemperature(numberValidation));
  };

  const setWeatherType = (type: string) => dispatch(
    forecastActions.setTypeOfWeather(type),
  );

  const filterWeather = async() => {
    if (minTemperature === '' && maxTemperature === '') {
      dispatch(forecastActions.setMinTempValidationError(true));
      dispatch(forecastActions.setMaxTempValidationError(true));
    } else if (minTemperature === '') {
      dispatch(forecastActions.setMinTempValidationError(true));
    } else if (maxTemperature === '') {
      dispatch(forecastActions.setMaxTempValidationError(true));
    } else {
      await dispatch(forecastActions.fetchAsync());

      const filteredData = !(data === null)
        ? data.filter(day => day.type === weatherType
          && day.temperature >= Number(minTemperature)
          && day.temperature <= Number(maxTemperature))
        : null

      dispatch(forecastActions.fill(filteredData));
      dispatch(forecastActions.setFilterStatus(true));
    }
  };

  const resetFilters = () => {
    dispatch(forecastActions.fetchAsync());

    dispatch(forecastActions.setMinTemperature(''));
    dispatch(forecastActions.setMaxTemperature(''));
    dispatch(forecastActions.setTypeOfWeather('sunny'));

    dispatch(forecastActions.setFilterStatus(false));
  };

  return {
    data,
    isFetching,
    error,
    minTemperature,
    maxTemperature,
    weatherType,
    minTempValidError,
    maxTempValidError,
    filterStatus,
    minTemperatureChange,
    maxTemperatureChange,
    setWeatherType,
    filterWeather,
    resetFilters,
  };
};

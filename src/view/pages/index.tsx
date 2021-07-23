// Core
import React from 'react';

// Components
import { useForecast } from '../../bus/weather';
import { FilterBlock } from './FilterBlock';
import { HeadBlock } from './HeadBlock';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';

// Styles
import './index.css';

// Types
import { getTemperatureType } from './pagesTypes';

export const Weather = () => {
  const {
    isFetching,
    data,
    error,
    resetFilters,
  } = useForecast();

  if (error) {
    return <p className="error">Sorry, weather forecast is not found</p>;
  }

  if (error) {
    return <p className="error">Sorry, something went wrong</p>;
  }

  if (!isFetching && data && data.length === 0) {
    return (
      <div className="error">
        <p>By given criteria no days available</p>
        <button
          type="button"
          onClick={resetFilters}
          className="reset-button"
        >
          Reset filters
        </button>
      </div>
    );
  }

  const getTemperature: getTemperatureType = id => data
    && data.length
    && data[id].temperature;

  return (
    <div className="weather-widget">
      {isFetching && (
        <p className="error">Loading data from api</p>
      )}

      <main className="weather-widget__main-block">
        <FilterBlock />
        <HeadBlock />
        <CurrentWeather getTemperature={getTemperature} />
        <Forecast getTemperature={getTemperature} />
      </main>
    </div>
  );
};

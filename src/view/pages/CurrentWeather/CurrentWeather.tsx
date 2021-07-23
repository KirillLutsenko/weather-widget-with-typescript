// Core
import React, { FC, DetailedHTMLProps } from 'react';

// Components
import { useForecast } from '../../../bus/weather';
import { useWeatherDayId } from '../../../bus/client/activeDay';

// Styles
import './CurrentWeather.css';

// Types
import { getHumidityType, getRainProbabilityType, getTemperatureType } from '../pagesTypes';

interface CurrentWeatherProps extends 
  DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement> {
    getTemperature: getTemperatureType;
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({ getTemperature }) => {
  const { data, isFetching } = useForecast();
  const { dayId } = useWeatherDayId();

  const getRainProbability: getRainProbabilityType = id => data
    && data.length
    && data[id].rain_probability;

  const getHumidity: getHumidityType = id => data
    && data.length
    && data[id].humidity;

  return (
    <div className="current-weather">
      <p className="temperature">
        {!isFetching && getTemperature(dayId)
        }
      </p>
      <p className="meta">
        <span className="rainy">
          {`%${!isFetching && getRainProbability(dayId)}`}
        </span>
        <span className="humidity">
          {`%${!isFetching && getHumidity(dayId)}`}
        </span>
      </p>
    </div>
  );
};

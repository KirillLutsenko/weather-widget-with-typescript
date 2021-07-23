// Core
import React, { FC, DetailedHTMLProps } from 'react';
import PropTypes from 'prop-types';

// Components
import { useWeatherDayId } from '../../../bus/client';
import { useForecast } from '../../../bus/weather';

// Styles
import './Forecast.css';

// Tpes
import { getTemperatureType, handleDayType } from '../pagesTypes';

const classNames = require('classnames');
const moment = require('moment');

interface ForecastWeatherProps extends 
  DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement> {
  getTemperature: getTemperatureType;
}

export const Forecast: FC<ForecastWeatherProps> = ({ getTemperature }) => {
  const { dayId, useDayId } = useWeatherDayId();
  const { isFetching, data } = useForecast();

  const HandleDay: handleDayType = (index) => useDayId(index);

  return (
    <div className="forecast">
      {!isFetching
        && data
        && data.length
        && data
          .slice(0, 7)
          .map((obj, index) => (
            <div
              key={obj.id}
              onClick={() => HandleDay(index)}
              onKeyDown={() => HandleDay(index)}
              tabIndex={0}
              role="button"
              className={classNames(
                'day', {
                  'day selected': index === dayId,
                  'day sunny': obj.type === 'sunny',
                  'day cloudy': obj.type === 'cloudy',
                  'day rainy': obj.type === 'rainy',
                },
              )
              }
            >
              <p>
                {moment(obj.day).format('dddd')}
              </p>
              <span>
                {getTemperature(index)}
              </span>
            </div>
          ))}
    </div>
  );
};

Forecast.propTypes = {
  getTemperature: PropTypes.func.isRequired,
};

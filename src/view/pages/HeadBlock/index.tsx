// Core
import React from 'react';

// Components
import { useForecast } from '../../../bus/weather';
import { useWeatherDayId } from '../../../bus/client/activeDay';

// Styles
import './index.css';

const classNames = require('classnames');
const moment = require('moment');

export const HeadBlock = () => {
  const { data, isFetching } = useForecast();
  const { dayId } = useWeatherDayId();

  const getDayOfWeek = () => data
    && data.length
    && moment(data[dayId].day).format('dddd');

  const getDate = () => data
    && data.length
    && moment(data[dayId].day).format('MMMM do');

  return (
    <div className="head">
      <div
        className={data
          && data.length
          && classNames(
            'icon', {
              'icon sunny': data && data.length && data[dayId].type === 'sunny',
              'icon cloudy': data && data.length && data[dayId].type === 'cloudy',
              'icon rainy': data &&  data.length && data[dayId].type === 'rainy',
            },
          )
          }
      />
      <div className="current-date">
        <p>
          {!isFetching && getDayOfWeek()}
        </p>
        <span>
          {!isFetching && getDate()
          }
        </span>
      </div>
    </div>
  );
};

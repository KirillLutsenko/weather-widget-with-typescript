// Core
import React from 'react';

// Components
import { TemperatureInputs } from './TemperatureInputs';
import { TypeOfWeather } from './TypeOfWeather';

// Styles
import './index.css';

export const FilterBlock = () => (
  <div className="filter">
    <TypeOfWeather />
    <TemperatureInputs />
  </div>
);

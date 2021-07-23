// Core
import React from 'react';

// Components
import { TemperatureInputs } from './TemperatureInputs';
import { TypeOfWeather } from './TypeOfWeather.js/TypeOfWeather';

// Styles
import './FilterBlock.css';

export const FilterBlock = () => (
  <div className="filter">
    <TypeOfWeather />
    <TemperatureInputs />
  </div>
);

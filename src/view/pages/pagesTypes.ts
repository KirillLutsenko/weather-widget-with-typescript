// Weather

export type getTemperatureType = (id: number) => number;

// Current weather

export type getRainProbabilityType = (id: number) => number;
export type getHumidityType = getRainProbabilityType;

// Forecast

export type handleDayType = (index: number) => void;

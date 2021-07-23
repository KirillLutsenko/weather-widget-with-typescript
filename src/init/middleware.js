import { compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// функция которая вызывается и получает в себя обьект параметров
export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: { // настройка нашего логгера
    title: action => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#FF0005',
  },
});


const developmentEnvironment = process.env.NODE_ENV === 'development';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

console.log(devtools);

const composeEnhancers = developmentEnvironment
  && devtools
  ? devtools
  : compose;

const middleware = [thunk];

// если у нас режим разработки добавляем в массив logger
if (developmentEnvironment) {
  middleware.push(logger);
}

export { composeEnhancers, middleware };

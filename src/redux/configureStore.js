import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import rocketReducer from './rocket/rocket';
import { missionReducer, loadFromAPI } from './mission/mission';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
});

const getMissionsMiddleware = (store) => (next) => (action) => {
  if (action.type === 'redux/mission/UPDATE_ALL') {
    fetch('https://api.spacexdata.com/v3/missions',
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then((json) => store.dispatch(loadFromAPI(json)));
  }
  next(action);
};

const composedEnhancer = compose(
  applyMiddleware(getMissionsMiddleware),
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;

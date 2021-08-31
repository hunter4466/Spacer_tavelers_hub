import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { rocketReducer, getRocketMiddleware } from './rocket/rocket';
import { missionReducer, getMissionsMiddleware } from './mission/mission';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
});

const composedEnhancer = compose(
  applyMiddleware(getMissionsMiddleware),
  applyMiddleware(getRocketMiddleware),
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;

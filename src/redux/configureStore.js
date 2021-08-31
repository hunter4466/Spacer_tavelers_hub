import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import rocketReducer from './rocket/rocket';
import { missionReducer, getMissionsMiddleware, updMissStateMiddleware } from './mission/mission';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
});

const composedEnhancer = compose(
  applyMiddleware(getMissionsMiddleware),
  applyMiddleware(updMissStateMiddleware),
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;

import {combineReducers} from 'redux-immutable';
import winsize from './winsize';
import fact from './fact';
import config from './config';
import routing from './routing';

const reducer = combineReducers({
  winsize,
  fact,
  config,
  routing
});

export default reducer;

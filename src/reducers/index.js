import {combineReducers} from 'redux-immutable';
import winsize from './winsize';
import fact from './fact';
import config from './config';

const reducer = combineReducers({
  winsize,
  fact,
  config
});

export default reducer;

import {combineReducers} from 'redux-immutable';
import winsize from './winsize';
import fact from './fact';

const reducer = combineReducers({
  winsize,
  fact
});

export default reducer;

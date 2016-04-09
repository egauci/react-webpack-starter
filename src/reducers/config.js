import Immutable from 'immutable';
import {pathPref} from '../config';

const initState = Immutable.Map({
  viewportPath: `${pathPref}/viewport`,
  numberfactPath: `${pathPref}/numberfact`
});

export default (state = initState) => state;

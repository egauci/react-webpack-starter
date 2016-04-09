// I am not convinced that putting configuration into the app state is a good
// idea. Just trying it out in a small way.
import Immutable from 'immutable';
import {pathPref} from '../config';

const initState = Immutable.Map({
  viewportPath: `${pathPref}/viewport`,
  numberfactPath: `${pathPref}/numberfact`
});

export default (state = initState) => state;

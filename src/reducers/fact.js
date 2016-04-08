import Immutable from 'immutable';

const initState = Immutable.Map({});

const fact = (state = initState, action) => {
  switch (action.type) {
  case 'GET_FACT':
    if (action.payload && action.payload.data) {
      return Immutable.Map(action.payload.data);
    }
    return state;
  default:
    return state;
  }
};

export default fact;

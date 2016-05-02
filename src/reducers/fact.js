import Immutable from 'immutable';

const initState = Immutable.Map({});

const fact = (state = initState, action) => {
  switch (action.type) {
  case 'GET_FACT':
    if (action.error) {
      let text = 'Failed to get a number fact';
      if (action.payload.data && action.payload.data.message) {
        text = `Error: ${action.payload.data.message}`;
      } else if (action.payload.statusText) {
        text = `Error: ${action.payload.status} ${action.payload.statusText}`;
      }
      return Immutable.Map({number: '', text});
    }
    if (action.payload && action.payload.data) {
      return Immutable.Map(action.payload.data);
    }
    return state;
  case 'CLEAR_FACT':
    return initState;
  default:
    return state;
  }
};

export default fact;

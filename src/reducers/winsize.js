import Immutable from 'immutable';

const initState = Immutable.Map({
  height: 0,        // win height
  width: 0,         // win width
  docHeight: 0,     // document height
  scrollY: 0        // window vertical scroll position
});

const winsize = (state = initState, action) => {
  switch (action.type) {
  case 'SET_WINSIZE':
    state = state.set('height', action.payload.height);
    state = state.set('width', action.payload.width);
    state = state.set('docHeight', action.payload.docHeight);
    return state;
  case 'SET_SCROLLY':
    return state.set('scrollY', action.payload);
  default:
    return state;
  }
};

export default winsize;

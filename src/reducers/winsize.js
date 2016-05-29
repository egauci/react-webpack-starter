import Immutable from 'immutable';

const initState = Immutable.Map({
  height: 0,        // win height
  width: 0,         // win width
  clientHeight: 0,  // height without scrollbars
  clientWidth: 0,   // width without scrollbars
  docHeight: 0,     // document height
  scrollY: 0,       // window vertical scroll position
  scrollX: 0        // window horizontal scroll position
});

const winsize = (state = initState, action) => {
  switch (action.type) {
  case 'SET_WINSIZE':
    return Immutable.Map(action.payload);
  default:
    return state;
  }
};

export default winsize;

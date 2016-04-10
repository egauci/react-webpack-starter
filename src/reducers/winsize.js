import Immutable from 'immutable';

const initState = Immutable.Map({
  height: 0,        // win height
  width: 0,         // win width
  docHeight: 0,     // document height
  scrollY: 0,       // window vertical scroll position
  scrollX: 0        // window horizontal scroll position
});

const winsize = (state = initState, action) => {
  switch (action.type) {
  case 'SET_WINSIZE':
    return state.withMutations(map => {
      map.set('height', action.payload.height).
          set('width', action.payload.width).
          set('docHeight', action.payload.docHeight);
    });
  case 'SET_SCROLL':
    return state.withMutations(map => {
      map.set('scrollY', action.payload.y).
          set('scrollX', action.payload.x);
    });
  default:
    return state;
  }
};

export default winsize;

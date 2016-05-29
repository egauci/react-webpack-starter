// This module monitors the viewport. It should be called once
// with the redux store. It will call winResize and
// scroll redux action creators.
// Note that the documentElement height is included but it is not monitored
// for change. It is just reported along with viewport size.
import {setWinsize} from '../actions';
import viewport from 'viewport-event';

let dispatch;

const sendViewport = vp => {
  vp.docHeight = document.documentElement.offsetHeight;
  dispatch(setWinsize(vp));
};

function setViewportMonitor(store) {
  if (dispatch) {
    return; // just once
  }
  dispatch = store.dispatch;

  viewport.on('viewport', sendViewport);

  sendViewport(viewport.getViewport());
}

export default setViewportMonitor;

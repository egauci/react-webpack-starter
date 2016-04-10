// This module monitors the viewport. It should be called once
// with the redux store. It will call winResize and
// scroll redux action creators.
// Note that the documentElement height is included but it is not monitored
// for change. It is just reported along with viewport size.
import {setWinsize, scroll} from '../actions';
import {winResize, getWinSize} from 'winresize-event';

let store;

function setViewportMonitor(newStore) {
  if (store) {
    return; // just once
  }
  store = newStore;
  const newWinSize = (winsize, docHeight) => {
    let width = winsize.width;
    if (document.body.scrollWidth !== undefined && document.body.scrollWidth < width) {
      width = document.body.scrollWidth;
    }
    if (document.documentElement.offsetWidth !== undefined && document.documentElement.offsetWidth < width) {
      width = document.documentElement.offsetWidth;
    }
    const size = Object.assign({}, winsize, {width}, {docHeight});
    store.dispatch(setWinsize(size));
  };

  winResize.on(() => {
    setTimeout(() => newWinSize(getWinSize(), document.documentElement.offsetHeight), 10);
  });
  newWinSize(getWinSize(), document.documentElement.offsetHeight);
  setTimeout(() => newWinSize(getWinSize(), document.documentElement.offsetHeight), 1000);

  let lastKnownScrollPosition = {x: 0, y: 0};
  let ticking = false;
  window.addEventListener('scroll', function() {
    lastKnownScrollPosition = {x: window.scrollX, y: window.scrollY};
    if (!ticking) {
      window.requestAnimationFrame(function() {
        store.dispatch(scroll(lastKnownScrollPosition));
        ticking = false;
      });
    }
    ticking = true;
  });
}

export default setViewportMonitor;

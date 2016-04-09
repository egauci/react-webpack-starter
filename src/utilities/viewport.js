// This module monitors the viewport. It should be called once
// with the redux store. It will call winResize and
// scrollY redux action creators.
import {setWinsize, scrollY} from '../actions';
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

  let lastKnownScrollPosition = 0;
  let ticking = false;
  window.addEventListener('scroll', function() {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        store.dispatch(scrollY(lastKnownScrollPosition));
        ticking = false;
      });
    }
    ticking = true;
  });
}

export default setViewportMonitor;

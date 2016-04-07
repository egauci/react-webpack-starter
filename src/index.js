/* eslint new-cap:0, camelcase: 0 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import App from './components/App';
import {setWinsize, scrollY} from './actions';
import {winResize, getWinSize} from 'winresize-event';
import Immutable from 'immutable';
import {Router, Route, browserHistory} from 'react-router';
import {pathPref} from './config';

let store = createStore(reducer, Immutable.Map());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={`${pathPref}/`} component={App} />
    </Router>
  </Provider>,
  document.getElementById('the-app')
);

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
setTimeout(() => newWinSize(getWinSize(), document.documentElement.offsetHeight), 500);

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

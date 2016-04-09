/* eslint new-cap:0, camelcase: 0 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducers';
import App from './components/App';
import Viewport from './components/viewport';
import NumberFact from './components/numberfact';
import {setWinsize, scrollY} from './actions';
import {winResize, getWinSize} from 'winresize-event';
import Immutable from 'immutable';
import {Router, Route, browserHistory} from 'react-router';
import {pathPref} from './config';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
let store = createStoreWithMiddleware(reducer, Immutable.Map());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={`${pathPref}/`} component={App}>
        <Route path="viewport" component={Viewport} />
        <Route path="numberfact" component={NumberFact} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('the-app')
);

// The code below deals with window size and vertical scroll values.
// Changes in these trigger redux actions
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

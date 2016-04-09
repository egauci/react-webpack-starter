import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducers';
import App from './components/App';
import Viewport from './components/viewport';
import NumberFact from './components/numberfact';
import Immutable from 'immutable';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {pathPref} from './config';
import setViewportMonitor from './utilities/viewport';

// Create the redux store - apply middleware and add support
// for the Chrome Redux Devtools Extention
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
const createStoreWithMiddleware =
  compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
let store = createStoreWithMiddleware(reducer, Immutable.Map());
// enable redux hot module replacment
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index').default;
    store.replaceReducer(nextReducer);
  });
}

// react-router-redux needs some help in dealing with Immutable
// Also see reducers/routing.js.
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: () => store.getState().get('routing').toJS()
});

setViewportMonitor(store); // pass store to viewport size monitor

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={`${pathPref}/`} component={App}>
        <Route path="viewport" component={Viewport} />
        <Route path="numberfact" component={NumberFact} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('the-app')
);

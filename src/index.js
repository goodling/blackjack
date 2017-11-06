// import createHistory from 'history/createBrowserHistory';
// import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createStore from './Services/Store';
import axe from 'react-axe';
import Main from "./Containers";
import './index.styl';

const store = createStore();
// const browserHistory = createHistory();
// const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Main store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
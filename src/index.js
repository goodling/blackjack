// import createHistory from 'history/createBrowserHistory';
// import { syncHistoryWithStore } from 'react-router-redux';
// import publicRoutes from './routes';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createStore from './Services/Store';
import { Provider } from 'react-redux';
import axe from 'react-axe';
import App from './App';


const store = createStore();
// const browserHistory = createHistory();
// const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
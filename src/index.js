import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

import App from './containers/App';
import CardDetail from './components/CardDetail';
import configureStore from './configureStore';
import './global-styles';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/card/:id" component={CardDetail} />
      </Switch>
    </Router>
  </Provider>,
  MOUNT_NODE
);
registerServiceWorker();

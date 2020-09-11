import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { get } from 'lodash';
import reducers from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, applyMiddleware(thunk));

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken,
  type: get(state, 'form.type.values.type', null),
  limit: get(state, 'form.limit.values.limit', null),
  state: state,
});

const WrappedApp = connect(mapStateToProps, null)(App);


ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reduxObservable } from 'redux-observable';
import artists from './reducers';
import Example from './components/Example';

const store = createStore(
  combineReducers({ artists }),
  applyMiddleware(reduxObservable())
);

render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById('app')
)

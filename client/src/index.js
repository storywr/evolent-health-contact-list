import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router';
import App from './App'
import './index.css';

const middleWare = [thunk];

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
)

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="/contacts" component={Contacts} />
        <Route path="/contacts/new" component={ContactsNew} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
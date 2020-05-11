import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import App from './components/App';
import {store} from './store';
import './style.scss';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);

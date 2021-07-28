import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import WarningState from 'store/warning';
import { Provider } from 'react-redux';
import {store} from "store/store";
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <WarningState>
    <App />
  </WarningState>
  </Provider>
  ,
  document.getElementById('root')
);
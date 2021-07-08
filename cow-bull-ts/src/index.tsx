import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import WarningState from './context/warning/WarningState';
import './index.scss';

ReactDOM.render(
  <WarningState>
    <App />
  </WarningState>,
  document.getElementById('root')
);

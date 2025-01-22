import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { defineComponents } from '@tylertech/forge';

import '@tylertech/forge-extended/quantity-field';
import '@tylertech/forge-extended/busy-indicator';

defineComponents();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

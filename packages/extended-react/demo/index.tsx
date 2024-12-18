import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { defineComponents } from '@tylertech/forge';

import { defineBusyIndicatorElementComponent, defineQuantityFieldElementComponent } from '@tylertech/forge-extended';

defineComponents();
defineQuantityFieldElementComponent();
defineBusyIndicatorElementComponent();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

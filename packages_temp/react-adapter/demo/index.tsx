import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { defineComponents } from '@tylertech/forge';
// import type { ForgeCustomElements } from '@tylertech/forge/types/react-types';

// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace JSX {
//     interface IntrinsicElements extends ForgeCustomElements {}
//   }
// }

defineComponents();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

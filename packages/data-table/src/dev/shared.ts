import './shared.scss';
import '@tylertech/forge/dist/forge-core.css';
import '@tylertech/forge/dist/forge.css';

import '@tylertech/forge/esm/scaffold';
import '@tylertech/forge/esm/app-bar';
import '@tylertech/forge/esm/card';
import '@tylertech/forge/esm/icon';
import '@tylertech/forge/esm/toolbar';

import { IconRegistry } from '@tylertech/forge';
import { tylIconForgeLogo } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconForgeLogo]);

await Promise.allSettled([
  window.customElements.whenDefined('forge-scaffold'),
  window.customElements.whenDefined('forge-app-bar'),
  window.customElements.whenDefined('forge-card'),
  window.customElements.whenDefined('forge-toolbar')
]);

document.body.classList.add('ready');

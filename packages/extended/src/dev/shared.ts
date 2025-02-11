// Styles
import './shared.scss';
import '@tylertech/forge/dist/forge-core.css';
import '@tylertech/forge/dist/forge.css';

// Components
import '@tylertech/forge/esm/scaffold';
import '@tylertech/forge/esm/app-bar';
import '@tylertech/forge/esm/card';
import '@tylertech/forge/esm/icon-button';
import '@tylertech/forge/esm/icon';
import '@tylertech/forge/esm/toolbar';
import '@tylertech/forge/esm/toast';

// Icons
import { tylIconForgeLogo } from '@tylertech/tyler-icons/custom';
import { tylIconBrightness3, tylIconWbSunny } from '@tylertech/tyler-icons/standard';
import { IconRegistry } from '@tylertech/forge';

IconRegistry.define([tylIconForgeLogo, tylIconWbSunny, tylIconBrightness3]);

await Promise.allSettled([
  window.customElements.whenDefined('forge-app-bar'),
  window.customElements.whenDefined('forge-scaffold'),
  window.customElements.whenDefined('forge-card')
]);

document.body.classList.add('ready');

import '$dev/shared';
import '$lib/busy-indicator';
import { type BusyIndicatorComponent } from '$lib/busy-indicator';
import './busy-indicator.scss';

let busyIndicator: BusyIndicatorComponent | undefined;

const showFullscreenButton = document.getElementById('show-fullscreen-button') as HTMLButtonElement;
showFullscreenButton.addEventListener('click', () => {
  busyIndicator = document.createElement('forge-ext-busy-indicator');
  busyIndicator.open = true;
  document.body.appendChild(busyIndicator);

  setTimeout(() => {
    if (busyIndicator?.isConnected) {
      busyIndicator.open = false;
      busyIndicator.remove();
      busyIndicator = undefined;
    }
  }, 3000);
});

const showInlineButton = document.getElementById('show-inline-button') as HTMLButtonElement;
const inlineBusyIndicator = document.querySelector('forge-ext-busy-indicator[mode=inline]') as BusyIndicatorComponent;
showInlineButton.addEventListener('click', () => {
  inlineBusyIndicator.open = true;
});

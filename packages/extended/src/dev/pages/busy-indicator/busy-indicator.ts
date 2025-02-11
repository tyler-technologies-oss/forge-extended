import '$dev/shared';
import '$lib/busy-indicator';
import { type BusyIndicatorComponent } from '$lib/busy-indicator';

const busyIndicator = document.getElementById('busy-indicator') as BusyIndicatorComponent;

const showButton = document.getElementById('show-button');
showButton?.addEventListener('click', () => {
  busyIndicator.open = true;
  setTimeout(() => busyIndicator.open = false, 3000);
});

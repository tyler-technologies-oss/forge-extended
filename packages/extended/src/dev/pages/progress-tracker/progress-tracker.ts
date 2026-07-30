import '$dev/shared';
import '$lib/progress-tracker';
import './progress-tracker.scss';
import { defineButtonComponent, defineCardComponent, defineDialogComponent, defineIconButtonComponent, defineToolbarComponent, IconRegistry } from '@tylertech/forge';
import { tylIconClose } from '@tylertech/tyler-icons';
import type { ProgressTrackerComponent, ProgressTrackerStep, ProgressTrackerStepInfoEventData } from '$lib/progress-tracker';

defineButtonComponent();
defineCardComponent();
defineDialogComponent();
defineIconButtonComponent();
defineToolbarComponent();
IconRegistry.define([tylIconClose]);

const DEFAULT_STEPS: ProgressTrackerStep[] = [
  { label: 'Application Received', completed: true, description: 'Your application was received and logged.' },
  { label: 'Fees Paid', completed: true },
  { label: 'Internal Review', completed: true, description: 'Staff are reviewing your submission for completeness and compliance.' },
  { label: 'Documents Approved', description: 'All submitted documents are verified and approved.' },
  { label: 'Record Issued' }
];

const THEMED_STEPS: ProgressTrackerStep[] = [
  { label: 'Application Received', completed: true, theme: 'success', description: 'Your application was received and logged.' },
  { label: 'Fees Paid', completed: true, theme: 'success' },
  { label: 'Internal Review', completed: true, theme: 'warning', description: 'Review completed with conditions.' },
  { label: 'Documents Approved', theme: 'info', description: 'All submitted documents are verified and approved.' },
  { label: 'Record Issued' }
];

const horizontalTracker = document.getElementById('horizontal-tracker') as ProgressTrackerComponent;
const horizontalThemedTracker = document.getElementById('horizontal-themed-tracker') as ProgressTrackerComponent;
const verticalTracker = document.getElementById('vertical-tracker') as ProgressTrackerComponent;
const verticalThemedTracker = document.getElementById('vertical-themed-tracker') as ProgressTrackerComponent;

horizontalTracker.steps = DEFAULT_STEPS;
horizontalThemedTracker.steps = THEMED_STEPS;
verticalTracker.steps = DEFAULT_STEPS;
verticalThemedTracker.steps = THEMED_STEPS;

document.addEventListener('forge-progress-tracker-step-info', evt => {
  const { step } = (evt as CustomEvent<ProgressTrackerStepInfoEventData>).detail;
  showStepInfoDialog(step);
});

/** Demonstrates the consumer-owned dialog pattern for the step info event. */
function showStepInfoDialog(step: ProgressTrackerStep): void {
  const dialog = document.createElement('forge-dialog');
  dialog.label = step.label;
  dialog.description = step.description ?? '';

  const container = document.createElement('div');
  container.className = 'step-info-dialog';

  const toolbar = document.createElement('forge-toolbar');
  toolbar.setAttribute('no-divider', '');

  const title = document.createElement('h2');
  title.slot = 'start';
  title.className = 'forge-typography--heading4';
  title.textContent = step.label;

  const closeButton = document.createElement('forge-icon-button');
  closeButton.slot = 'end';
  closeButton.setAttribute('aria-label', 'Close dialog');
  closeButton.innerHTML = '<forge-icon name="close"></forge-icon>';
  closeButton.addEventListener('click', () => (dialog.open = false));

  toolbar.append(title, closeButton);

  const description = document.createElement('p');
  description.className = 'forge-typography--body2 step-info-dialog__description';
  description.textContent = step.description ?? '';

  container.append(toolbar, description);
  dialog.append(container);
  dialog.addEventListener('forge-dialog-close', () => dialog.remove());

  document.body.append(dialog);
  dialog.open = true;
}

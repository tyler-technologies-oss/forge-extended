import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import {
  defineButtonComponent,
  defineCardComponent,
  defineDialogComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineToolbarComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconClose } from '@tylertech/tyler-icons';
import type { ProgressTrackerStep, ProgressTrackerStepInfoEventData } from '$lib/progress-tracker';

import '$lib/progress-tracker';

defineButtonComponent();
defineCardComponent();
defineDialogComponent();
defineIconButtonComponent();
defineIconComponent();
defineToolbarComponent();
IconRegistry.define([tylIconClose]);

const component = 'forge-progress-tracker';

const DEFAULT_STEPS: ProgressTrackerStep[] = [
  { label: 'Application Received', completed: true, description: 'Your application was received and logged.' },
  { label: 'Fees Paid', completed: true },
  {
    label: 'Internal Review',
    completed: true,
    description: 'Staff are reviewing your submission for completeness and compliance.'
  },
  { label: 'Documents Approved', description: 'All submitted documents are verified and approved.' },
  { label: 'Record Issued' }
];

/**
 * Demonstrates the consumer-owned dialog pattern: the component only dispatches the step info
 * event and the consuming application decides how to present the information.
 */
function onStepInfo(evt: CustomEvent<ProgressTrackerStepInfoEventData>): void {
  const { step } = evt.detail;
  const dialog = document.createElement('forge-dialog');
  dialog.label = step.label;
  dialog.description = step.description ?? '';

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.maxInlineSize = '400px';
  container.style.minInlineSize = '320px';

  const toolbar = document.createElement('forge-toolbar');
  toolbar.setAttribute('no-divider', '');

  const title = document.createElement('h2');
  title.slot = 'start';
  title.className = 'forge-typography--heading4';
  title.textContent = step.label;
  title.style.margin = '0';

  const closeButton = document.createElement('forge-icon-button');
  closeButton.slot = 'end';
  closeButton.setAttribute('aria-label', 'Close dialog');
  closeButton.innerHTML = '<forge-icon name="close"></forge-icon>';
  closeButton.addEventListener('click', () => (dialog.open = false));

  toolbar.append(title, closeButton);

  const description = document.createElement('p');
  description.className = 'forge-typography--body2';
  description.textContent = step.description ?? '';
  description.style.margin = '0';
  description.style.padding = '0 16px 16px';

  container.append(toolbar, description);
  dialog.append(container);
  dialog.addEventListener('forge-dialog-close', () => dialog.remove());

  document.body.append(dialog);
  dialog.open = true;
}

const meta = {
  title: 'Components/Progress Tracker',
  component,
  render: args => {
    return html`
      <forge-card>
        <forge-progress-tracker
          .steps=${DEFAULT_STEPS}
          orientation=${args.orientation}
          completed-label=${args.completedLabel || nothing}
          incomplete-label=${args.incompleteLabel || nothing}
          @forge-progress-tracker-step-info=${onStepInfo}>
          ${args.showTitle ? html`<h2 slot="title">${args.titleText}</h2>` : nothing}
          ${args.showActions ? html`<forge-button slot="actions" variant="text">Show Workflow</forge-button>` : nothing}
        </forge-progress-tracker>
      </forge-card>
    `;
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the steps',
      table: { category: 'Properties' }
    },
    completedLabel: {
      control: 'text',
      description: 'Accessible status text announced for completed steps',
      table: { category: 'Properties' }
    },
    incompleteLabel: {
      control: 'text',
      description: 'Accessible status text announced for incomplete steps',
      table: { category: 'Properties' }
    },
    showTitle: {
      control: 'boolean',
      description: 'Toggle the title slot',
      table: { category: 'Slots' }
    },
    showActions: {
      control: 'boolean',
      description: 'Toggle the actions slot',
      table: { category: 'Slots' }
    },
    titleText: {
      control: 'text',
      description: 'Title text content',
      table: { category: 'Content' }
    }
  },
  args: {
    orientation: 'horizontal',
    completedLabel: 'Completed',
    incompleteLabel: 'Not completed',
    showTitle: true,
    showActions: true,
    titleText: 'Record Progress'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const Vertical: Story = {
  args: {
    orientation: 'vertical'
  }
};

const THEMED_STEPS: ProgressTrackerStep[] = [
  {
    label: 'Application Received',
    completed: true,
    theme: 'success',
    description: 'Your application was received and logged.'
  },
  { label: 'Fees Paid', completed: true, theme: 'success' },
  { label: 'Internal Review', completed: true, theme: 'warning', description: 'Review completed with conditions.' },
  { label: 'Documents Approved', theme: 'info', description: 'All submitted documents are verified and approved.' },
  { label: 'Record Issued' }
];

export const ColorCodedSteps: Story = {
  render: () => {
    return html`
      <forge-card>
        <forge-progress-tracker .steps=${THEMED_STEPS} @forge-progress-tracker-step-info=${onStepInfo}>
          <h2 slot="title">Record Progress</h2>
          <forge-button slot="actions" variant="text">Show Workflow</forge-button>
        </forge-progress-tracker>
      </forge-card>
    `;
  }
};

export const VerticalColorCodedSteps: Story = {
  render: () => {
    return html`
      <forge-card>
        <forge-progress-tracker
          .steps=${THEMED_STEPS}
          orientation="vertical"
          @forge-progress-tracker-step-info=${onStepInfo}>
          <h2 slot="title">Record Progress</h2>
          <forge-button slot="actions" variant="text">Show Workflow</forge-button>
        </forge-progress-tracker>
      </forge-card>
    `;
  }
};

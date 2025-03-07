import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/confirmation-dialog';
import { ConfirmationDialogComponent } from '$lib/confirmation-dialog';

import { createRef, ref } from 'lit/directives/ref.js';

const component = 'forge-confirmation-dialog';

const meta = {
  title: 'Components/Confirmation Dialog',
  render: args => {
    const confirmationDialogRef = createRef<ConfirmationDialogComponent>();

    function handleClick() {
      confirmationDialogRef.value!.open = true;
    }

    function closeDialog() {
      confirmationDialogRef.value!.open = false;
    }

    function onConfirmationDialogAction(e: IConfirmationDialogAction) {
      const isPrimary = e.detail.primaryAction;
      console.log('Primary action:', isPrimary);
      if (!isPrimary) {
        confirmationDialogRef.value!.open = false;
        return;
      } else {
        // This logic (whether async or synchronous) would be managed by the consumer
        if (!args.simulateAsync) {
          closeDialog();
          return;
        } else {
          confirmationDialogRef.value!.isBusy = true;
          setTimeout(() => {
            closeDialog();
          }, 2500);
        }
      }
    }

    return html`
      <forge-button variant="raised" @click=${handleClick}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${ref(confirmationDialogRef)}
        @forge-confirmation-dialog-action=${(e: IConfirmationDialogAction) => onConfirmationDialogAction(e)}
        @forge-dialog-close=${closeDialog}
        ?open=${args.open}
        .theme=${args.theme}
        aria-label-loading=${args.ariaLabelLoading}
        .isBusy=${args.isBusy}>
        ${args.title.length ? html`<div slot="title">${args.title}</div>` : ''}
        ${args.message.length ? html`<div slot="message">${args.message}</div>` : ''}
        ${args.secondaryButtonText.length
          ? html`<div slot="secondary-button-text">${args.secondaryButtonText}</div>`
          : ''}
        <div slot="primary-button-text">${args.primaryButtonText}</div>
      </forge-confirmation-dialog>
    `;
  },
  component,
  argTypes: {
    open: { control: 'boolean' },
    isBusy: { control: 'boolean' },
    title: { control: 'text' },
    message: { control: 'text' },
    ariaLabelLoading: { control: 'text' },
    theme: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error']
    },
    secondaryButtonText: { control: 'text' },
    primaryButtonText: { control: 'text' },
    simulateAsync: { control: 'boolean' }
  },
  args: {
    open: false,
    isBusy: false,
    title: 'Delete selected images?',
    message: 'Images will be permanently removed from your account and all synced devices.',
    ariaLabelLoading: 'Loading data',
    theme: 'info',
    secondaryButtonText: 'No',
    primaryButtonText: 'Yes',
    simulateAsync: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

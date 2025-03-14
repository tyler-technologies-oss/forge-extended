import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ConfirmationDialogActionEventData, ConfirmationDialogComponent } from '$lib/confirmation-dialog';
import { createRef, ref } from 'lit/directives/ref.js';
import { action } from '@storybook/addon-actions';

import '$lib/confirmation-dialog';

const component = 'forge-confirmation-dialog';
const actionAction = action('forge-confirmation-dialog-action');

const meta = {
  title: 'Components/Confirmation Dialog',
  render: args => {
    const confirmationDialogRef = createRef<ConfirmationDialogComponent>();

    function toggleDialog() {
      confirmationDialogRef.value!.open = !confirmationDialogRef.value!.open;
    }

    function closeDialog(evt: CustomEvent<ConfirmationDialogActionEventData>) {
      if (args.preventDefault) {
        evt.preventDefault();
      }
    }

    return html`
      <forge-button variant="raised" @click=${toggleDialog}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${ref(confirmationDialogRef)}
        @forge-confirmation-dialog-action=${closeDialog}
        busy-label=${args.busyLabel}
        .isBusy=${args.isBusy}>
        ${args.title.length ? html`<span slot="title">${args.title}</span>` : ''}
        ${args.message.length ? html`<span slot="message">${args.message}</span>` : ''}
        ${args.secondaryButtonText.length
          ? html`<span slot="secondary-button-text">${args.secondaryButtonText}</span>`
          : ''}
        ${args.primaryButtonText.length ? html`<span slot="primary-button-text">${args.primaryButtonText}</span>` : ''}
      </forge-confirmation-dialog>
    `;
  },
  component,
  argTypes: {
    isBusy: { control: 'boolean' },
    title: { control: 'text' },
    message: { control: 'text' },
    busyLabel: { control: 'text' },
    secondaryButtonText: { control: 'text' },
    primaryButtonText: { control: 'text' },
    preventDefault: { control: 'boolean' }
  },
  args: {
    isBusy: false,
    title: 'Delete selected images?',
    message: 'Images will be permanently removed from your account and all synced devices.',
    busyLabel: 'Loading data',
    secondaryButtonText: 'No',
    primaryButtonText: 'Yes',
    preventDefault: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

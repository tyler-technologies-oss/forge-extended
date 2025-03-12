import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/confirmation-dialog';
import { ConfirmationDialogActionEventData, ConfirmationDialogComponent } from '$lib/confirmation-dialog';

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

    function onConfirmationDialogAction(e: CustomEvent<ConfirmationDialogActionEventData>) {
      console.log(e.detail.primaryAction);
      const isPrimary = e.detail.primaryAction;
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
        @forge-confirmation-dialog-action=${(e: CustomEvent<ConfirmationDialogActionEventData>) =>
          onConfirmationDialogAction(e)}
        @forge-dialog-close=${closeDialog}
        ?open=${args.open}
        busy-label=${args.ariaLabelLoading}
        .isBusy=${args.isBusy}>
        ${args.title.length ? html`<span slot="title">${args.title}</span>` : ''}
        ${args.message.length ? html`<span slot="message">${args.message}</span>` : ''}
        ${args.secondaryButtonText.length
          ? html`<span slot="secondary-button-text">${args.secondaryButtonText}</span>`
          : ''}
        <span slot="primary-button-text">${args.primaryButtonText}</span>
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
    secondaryButtonText: 'No',
    primaryButtonText: 'Yes',
    simulateAsync: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

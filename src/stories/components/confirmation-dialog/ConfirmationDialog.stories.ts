import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import '$lib/confirmation-dialog/confirmation-dialog';
import { ConfirmationDialogElement } from '$lib';

const component = 'forge-confirmation-dialog';

const meta = {
  title: 'Components/Confirmation Dialog',
  component,

  render: args => {
    const confirmationDialogRef = createRef<ConfirmationDialogElement>();

    function handleClick() {
      confirmationDialogRef.value!.open = true;
    }

    function onConfirmationDialogAction(e: IConfirmationDialogAction) {
      const isPrimary = e.detail.primaryAction;
      if (!isPrimary) {
        confirmationDialogRef.value!.open = false;
        return;
      } else {
        confirmationDialogRef.value!.isBusy = true;
        setTimeout(() => {
          confirmationDialogRef.value!.open = false;
        }, args.simulateLoading);
      }
    }

    return html`
      <forge-button variant="raised" @click=${handleClick}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${ref(confirmationDialogRef)}
        @forge-confirmation-dialog-action=${(e: IConfirmationDialogAction) => onConfirmationDialogAction(e)}
        ?open=${args.open}
        .isBusy=${args.isBusy}
        .showTitleText=${args.showTitleText}
        .titleText="${args.titleText}"
        .message=${args.message}
        .showSecondaryButton=${args.showSecondaryButton}
        .secondaryButtonText=${args.secondaryButtonText}
        .primaryButtonText=${args.primaryButtonText}>
      </forge-confirmation-dialog>
    `;
  },
  args: {
    open: false,
    isBusy: false,
    showTitleText: true,
    titleText: 'Reset settings?',
    message: 'Are you sure you want to reset your device to its default settings?',
    showSecondaryButton: true,
    secondaryButtonText: 'No',
    primaryButtonText: 'Yes',
    simulateLoading: '500'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

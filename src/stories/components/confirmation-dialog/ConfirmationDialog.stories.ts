import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import '$lib/confirmation-dialog/confirmation-dialog';
import { ConfirmationDialogElement } from '$lib';
import { DialogComponent } from '@tylertech/forge';

const component = 'forge-confirmation-dialog';

const meta = {
  title: 'Components/Confirmation Dialog',
  component,
  render: args => {
    const confirmationDialogRef = createRef<ConfirmationDialogElement>();
    const dialogRef = createRef<DialogComponent>();

    function handleClick() {
      dialogRef.value!.open = true;
    }

    function onConfirmationDialogAction() {
      console.log('button clicked');
    }

    return html`
      <forge-button variant="raised" @click=${handleClick}>Show Confirmation Dialog</forge-button>
      <forge-dialog ${ref(dialogRef)}>
        <forge-confirmation-dialog
          ${ref(confirmationDialogRef)}
          @forge-confirmation-dialog-action=${onConfirmationDialogAction}
          .titleText="${args.titleText}"
          .message=${args.message}
          .showSecondaryActionButton=${args.showSecondaryActionButton}
          .secondaryActionButtonText=${args.secondaryActionButtonText}
          .primaryActionButtonText=${args.primaryActionButtonText}>
        </forge-confirmation-dialog>
      </forge-dialog>
    `;
  },
  args: {
    titleText: 'This is the title',
    message: 'Are you sure you want to permanently delete this file?',
    showSecondaryActionButton: true,
    secondaryActionButtonText: 'No',
    primaryActionButtonText: 'Yes'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  args: {
    cancelable: true
  }
};

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

    return html`
      <forge-button variant="raised" @click=${handleClick}>Show Confirmation Dialog</forge-button>
      <forge-dialog ${ref(dialogRef)}>
        <forge-confirmation-dialog
          ${ref(confirmationDialogRef)}
          .titleText="${args.titleText}"
          .message=${args.message}
          .showSecondaryActionButton=${args.showSecondaryActionButton}
          .secondaryActionButtonText=${args.secondaryActionButtonText}
          .primaryActionButtonText=${args.primaryActionButtonText}>
        </forge-confirmation-dialog>
      </forge-dialog>
    `;
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean'
      }
    },
    direction: {
      control: 'select',
      options: ['row', 'column']
    }
  },
  args: {
    open: false,
    titleText: 'This is the title',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    showSecondaryActionButton: true,
    secondaryActionButtonText: 'Secondary Action',
    primaryActionButtonText: 'Save & Close'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  args: {
    cancelable: true
  }
};

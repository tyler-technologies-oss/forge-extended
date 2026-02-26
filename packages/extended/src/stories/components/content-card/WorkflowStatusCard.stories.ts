import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';
import {
  defineButtonComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineSelectComponent,
  defineOptionComponent,
  defineTextFieldComponent,
  defineStackComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconClose, tylIconSave } from '@tylertech/tyler-icons';

import '$lib/content-card';

defineButtonComponent();
defineIconButtonComponent();
defineIconComponent();
defineSelectComponent();
defineOptionComponent();
defineTextFieldComponent();
defineStackComponent();
IconRegistry.define([tylIconClose, tylIconSave]);

const component = 'forge-content-card';

const meta = {
  title: 'Components/Content Card',
  component,
  decorators: [
    storyStyles(`
      .workflow-card-container {
        max-width: 320px;
      }

    `)
  ],
  render: () => {
    return html`
      <div class="workflow-card-container">
        <forge-content-card heading-level="2">
          <div slot="title">Workflow Status</div>

          <div slot="body">
            <forge-stack gap="16">
              <forge-select label="Update status" label-position="block-start" variant="outlined" value="pending">
                <forge-option value="pending">Pending Review</forge-option>
                <forge-option value="approved">Approved</forge-option>
                <forge-option value="rejected">Rejected</forge-option>
                <forge-option value="revision">Needs Revision</forge-option>
              </forge-select>
              <forge-stack gap="8">
                <forge-button variant="filled">
                  <forge-icon name="calendar" external></forge-icon>
                  Schedule interview
                </forge-button>
                <forge-button variant="tonal">
                  <forge-icon name="send" external></forge-icon>
                  Send reference request
                </forge-button>
              </forge-stack>
            </forge-stack>
          </div>
        </forge-content-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WorkflowStatusCard: Story = {};

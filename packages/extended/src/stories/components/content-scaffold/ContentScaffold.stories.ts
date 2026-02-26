import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';

import '$lib/content-scaffold';
import { defineToolbarComponent } from '@tylertech/forge';

defineToolbarComponent();

const component = 'forge-content-scaffold';

const meta = {
  title: 'Components/Content Scaffold',
  component,
  decorators: [
    storyStyles(`

      * {
        box-sizing: border-box;
      }

      forge-content-scaffold::part(header) {
        background: var(--forge-theme-primary-container-minimum);
        padding: 8px;
      }

      forge-content-scaffold::part(footer) {
        background: var(--forge-theme-primary-container-minimum);
        padding: 8px;
      }

      .dash-container {
        background-color: var(--forge-theme-surface-container-lowest);
        border: 2px dashed var(--forge-theme-primary-container-high);
        padding: var(--forge-spacing-xxxsmall);
        isolation: isolate;
      }

      .body {
        background: var(--forge-theme-primary-container-minimum);
        height: 400px;
      }

      .body-inner {
        display: grid;
        place-content: center;
        height: 100%;
      }
    `)
  ],
  render: () => {
    return html`
      <forge-content-scaffold>
        <div class="dash-container" slot="before-header-start">before-header-start</div>
        <div class="dash-container" slot="header-start">header-start</div>
        <div class="dash-container" slot="header-end">header-end</div>
        <div class="body" slot="body">
          <div class="dash-container body-inner">body</div>
        </div>
        <div class="dash-container" slot="footer-start">footer-start</div>
        <div class="dash-container" slot="footer-end">footer-end</div>
      </forge-content-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

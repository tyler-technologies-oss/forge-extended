import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineFooterComponent } from '$lib/footer/footer';
import { defineFooterItemComponent } from '$lib/footer/footer-item';

import '$lib/footer/footer';
import '$lib/footer/footer-item';

const component = 'forge-footer';

defineFooterComponent();
defineFooterItemComponent();

const meta = {
  title: 'Components/Footer',
  component,
  render: args => html`
    <div class="page-shell">
      <main class="content">
        <h1>Page content</h1>
        <p>Use the footer to display persistent page navigation, policy links, or application information.</p>
      </main>

      <forge-footer .layout=${args.layout} .layoutBreakpoint=${args.layoutBreakpoint}>
        <forge-footer-item><a href="#">About</a></forge-footer-item>
        <forge-footer-item><a href="#">Contact</a></forge-footer-item>
        <forge-footer-item><a href="#">Privacy</a></forge-footer-item>
        <forge-footer-item><span>© 2026 Tyler Technologies</span></forge-footer-item>
      </forge-footer>
    </div>
  `,
  argTypes: {
    layout: {
      control: 'select',
      options: ['standard', 'alternative', 'auto']
    },
    layoutBreakpoint: {
      control: 'number',
      description: 'Breakpoint used when layout is set to auto'
    }
  },
  args: {
    layout: 'auto',
    layoutBreakpoint: 900
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

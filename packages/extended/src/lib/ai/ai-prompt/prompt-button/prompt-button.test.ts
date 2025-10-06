import { expect } from '@open-wc/testing';
import { fixture, html } from '@open-wc/testing-helpers';
import type { PromptButtonComponent } from './prompt-button';
import './prompt-button';

describe('PromptButtonComponent', () => {
  it('should be accessible', async () => {
    const el = await fixture<PromptButtonComponent>(html`<forge-prompt-button>Click me</forge-prompt-button>`);

    await expect(el).to.be.accessible();
  });

  it('should render with default values', async () => {
    const el = await fixture<PromptButtonComponent>(html`<forge-prompt-button>Click me</forge-prompt-button>`);

    expect(el.disabled).to.be.false;
  });

  it('should set disabled property', async () => {
    const el = await fixture<PromptButtonComponent>(html`<forge-prompt-button disabled>Click me</forge-prompt-button>`);

    expect(el.disabled).to.be.true;
  });

  it('should render slotted content', async () => {
    const el = await fixture<PromptButtonComponent>(html`<forge-prompt-button>Test Content</forge-prompt-button>`);
    const slot = el.shadowRoot?.querySelector('slot');

    expect(slot).to.exist;
  });
});

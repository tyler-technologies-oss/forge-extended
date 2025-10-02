import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiPromptComponent } from './ai-prompt.js';

describe('AiPromptComponent', () => {
  it('should be accessible', async () => {
    const element = await fixture<AiPromptComponent>(html`<forge-ai-prompt></forge-ai-prompt>`);
    await expect(element).to.be.accessible();
  });

  it('should emit send event when send button is clicked', async () => {
    const element = await fixture<AiPromptComponent>(html`<forge-ai-prompt></forge-ai-prompt>`);
    element.value = 'Test message';

    let eventFired = false;
    let eventData: any;
    element.addEventListener('forge-ai-prompt-send', (e: Event) => {
      eventFired = true;
      eventData = (e as CustomEvent).detail;
    });

    const sendButton = element.shadowRoot!.querySelector('button[aria-label="Send message"]') as HTMLButtonElement;
    sendButton.click();

    expect(eventFired).to.be.true;
    expect(eventData.value).to.equal('Test message');
    expect(element.value).to.equal(''); // Should clear after sending
  });

  it('should emit send event when Enter key is pressed', async () => {
    const element = await fixture<AiPromptComponent>(html`<forge-ai-prompt></forge-ai-prompt>`);
    const input = element.shadowRoot!.querySelector('input') as HTMLInputElement;

    input.value = 'Test message';
    input.dispatchEvent(new InputEvent('input', { bubbles: true }));

    let eventFired = false;
    element.addEventListener('forge-ai-prompt-send', () => {
      eventFired = true;
    });

    const enterEvent = new KeyboardEvent('keypress', { key: 'Enter', bubbles: true });
    input.dispatchEvent(enterEvent);

    expect(eventFired).to.be.true;
  });
});

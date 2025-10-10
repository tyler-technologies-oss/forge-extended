import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';

import { AiVoiceInputComponent } from './ai-voice-input';

import './ai-voice-input';

describe('AiVoiceInputComponent', () => {
  it('should create', async () => {
    const el = await fixture<AiVoiceInputComponent>(html`<forge-ai-voice-input></forge-ai-voice-input>`);

    expect(el).to.be.instanceOf(AiVoiceInputComponent);
  });

  it('should render a microphone button', async () => {
    const el = await fixture<AiVoiceInputComponent>(html`<forge-ai-voice-input></forge-ai-voice-input>`);
    const button = el.shadowRoot?.querySelector('forge-icon-button');

    expect(button).to.exist;
  });
});

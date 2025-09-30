import { expect } from '@open-wc/testing';
import { html } from 'lit';
import { AiChatWidgetComponent } from './ai-chat-widget';
import { fixture } from '../test-utils/fixture';

describe('AiChatWidgetComponent', () => {
  let component: AiChatWidgetComponent;

  beforeEach(async () => {
    component = await fixture<AiChatWidgetComponent>(html`<forge-ai-chat-widget></forge-ai-chat-widget>`);
  });

  it('should render', () => {
    expect(component).to.be.instanceOf(AiChatWidgetComponent);
    expect(component.shadowRoot).not.to.be.null;
  });

  it('should render hello world content', async () => {
    await component.updateComplete;

    const widget = component.shadowRoot!.querySelector('.ai-chat-widget');
    expect(widget).not.to.be.null;

    const heading = widget!.querySelector('h1');
    expect(heading?.textContent).to.equal('Hello World');

    const paragraph = widget!.querySelector('p');
    expect(paragraph?.textContent).to.equal('This is a blank AI Chat Widget ready for customization!');
  });
});

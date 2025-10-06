import { expect, fixture, html } from '@open-wc/testing';
import type { AiFloatingChatComponent } from './ai-floating-chat';
import './ai-floating-chat';

describe('AiFloatingChat', () => {
  it('should be accessible', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat></forge-ai-floating-chat>`);

    await expect(el).to.be.accessible();
  });

  it('should render with default properties', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat></forge-ai-floating-chat>`);

    expect(el.open).to.be.false;
    expect(el.expanded).to.be.false;
  });

  it('should open when show() is called', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat></forge-ai-floating-chat>`);

    el.show();

    expect(el.open).to.be.true;
  });

  it('should close when close() is called', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat open></forge-ai-floating-chat>`);

    el.close();

    expect(el.open).to.be.false;
  });

  it('should toggle open state when toggle() is called', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat></forge-ai-floating-chat>`);

    expect(el.open).to.be.false;

    el.toggle();
    expect(el.open).to.be.true;

    el.toggle();
    expect(el.open).to.be.false;
  });

  it('should expand when expand() is called', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat></forge-ai-floating-chat>`);

    el.expand();

    expect(el.expanded).to.be.true;
  });

  it('should collapse when collapse() is called', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat expanded></forge-ai-floating-chat>`);

    el.collapse();

    expect(el.expanded).to.be.false;
  });

  it('should dispatch open event when shown', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat></forge-ai-floating-chat>`);
    let eventFired = false;

    el.addEventListener('forge-ai-floating-chat-open', () => {
      eventFired = true;
    });

    el.show();

    expect(eventFired).to.be.true;
  });

  it('should dispatch close event when closed', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat open></forge-ai-floating-chat>`);
    let eventFired = false;

    el.addEventListener('forge-ai-floating-chat-close', () => {
      eventFired = true;
    });

    el.close();

    expect(eventFired).to.be.true;
  });

  it('should dispatch expand event when expanded', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat></forge-ai-floating-chat>`);
    let eventFired = false;

    el.addEventListener('forge-ai-floating-chat-expand', () => {
      eventFired = true;
    });

    el.expand();

    expect(eventFired).to.be.true;
  });

  it('should dispatch collapse event when collapsed', async () => {
    const el = await fixture<AiFloatingChatComponent>(html`<forge-ai-floating-chat expanded></forge-ai-floating-chat>`);
    let eventFired = false;

    el.addEventListener('forge-ai-floating-chat-collapse', () => {
      eventFired = true;
    });

    el.collapse();

    expect(eventFired).to.be.true;
  });
});

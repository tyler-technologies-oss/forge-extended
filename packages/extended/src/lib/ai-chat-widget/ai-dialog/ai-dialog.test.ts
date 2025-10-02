import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { AiDialogComponent } from './ai-dialog';

describe('AiDialogComponent', () => {
  it('should create component instance', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog></forge-ai-dialog>`);
    expect(el).to.be.instanceOf(AiDialogComponent);
  });
});

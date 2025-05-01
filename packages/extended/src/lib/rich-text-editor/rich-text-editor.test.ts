import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { RichTextEditorComponent } from './rich-text-editor';

import './rich-text-editor';

describe('RichTextEditor', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<RichTextEditorComponent>(html`<forge-rich-text-editor></forge-rich-text-editor>`);

    expect(el.shadowRoot).to.be.ok;
  });
});

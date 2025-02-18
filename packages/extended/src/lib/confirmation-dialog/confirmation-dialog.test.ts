import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ConfirmationDialogComponent } from './confirmation-dialog';

import './confirmation-dialog';

describe('ConfirmationDialog', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ConfirmationDialogComponent>(
      html`<forge-confirmation-dialog></forge-confirmation-dialog>`
    );

    expect(el.shadowRoot).to.be.ok;
  });
});

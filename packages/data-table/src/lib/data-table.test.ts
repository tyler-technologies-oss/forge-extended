import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { DataTableElement } from './data-table';

import './data-table';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
    }
  }
}

// This is needed by tanstack core...
if (!globalThis.process) {
  globalThis.process = { env: { NODE_ENV: 'production' } } as NodeJS.Process;
}

describe('Data Table', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<DataTableElement>(html`<forge-data-table></forge-data-table>`);

    expect(el.shadowRoot).to.be.ok;
    expect(el.shadowRoot?.childNodes.length).to.be.greaterThan(0);
  });
});

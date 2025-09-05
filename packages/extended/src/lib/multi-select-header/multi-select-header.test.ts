import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { MultiSelectHeaderComponent } from './multi-select-header';

import './';

describe('MultiSelectHeaderComponent', () => {
  it('should render', async () => {
    const el = await fixture<MultiSelectHeaderComponent>(html`<forge-multi-select-header></forge-multi-select-header>`);
    expect(el).to.be.instanceOf(MultiSelectHeaderComponent);
  });
});

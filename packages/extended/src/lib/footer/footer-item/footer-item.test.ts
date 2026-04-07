import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import { FooterItemComponent } from './footer-item';

import './footer-item';

describe('FooterItem', () => {
  it('should contain shadow root', async () => {
    const harness = await createFixture();
    expect(harness.el.shadowRoot).to.be.ok;
  });

  describe('Accessibility', () => {
    it('should have role="listitem" attribute', async () => {
      const harness = await createFixture();
      expect(harness.el.getAttribute('role')).to.equal('listitem');
    });

    it('should set role during connectedCallback', async () => {
      const el = document.createElement('forge-footer-item') as FooterItemComponent;
      expect(el.getAttribute('role')).to.be.null;

      document.body.appendChild(el);
      await nextFrame();

      expect(el.getAttribute('role')).to.equal('listitem');
      document.body.removeChild(el);
    });
  });

  describe('Rendering', () => {
    it('should render slot for content', async () => {
      const harness = await createFixture(html`<forge-footer-item><span>Test Content</span></forge-footer-item>`);
      expect(harness.slot).to.exist;
    });

    it('should render wrapper div with correct class', async () => {
      const harness = await createFixture();
      expect(harness.wrapper).to.exist;
      expect(harness.wrapper?.tagName).to.equal('DIV');
    });

    it('should display slotted content correctly', async () => {
      const harness = await createFixture(html`<forge-footer-item><a href="#">Link Text</a></forge-footer-item>`);
      const assigned = harness.slot?.assignedElements();
      expect(assigned).to.have.lengthOf(1);
      expect(assigned?.[0].tagName).to.equal('A');
    });
  });
});

class FooterItemHarness {
  constructor(public el: FooterItemComponent) {}

  public get wrapper(): HTMLDivElement | null {
    return this.el.shadowRoot?.querySelector('.forge-footer-item') as HTMLDivElement;
  }

  public get slot(): HTMLSlotElement | null {
    return this.el.shadowRoot?.querySelector('slot') as HTMLSlotElement;
  }
}

async function createFixture(
  template: ReturnType<typeof html> = html`<forge-footer-item></forge-footer-item>`
): Promise<FooterItemHarness> {
  const el = await fixture<FooterItemComponent>(template);
  return new FooterItemHarness(el);
}

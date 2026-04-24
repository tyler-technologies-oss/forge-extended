import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { FooterComponent } from './footer';

import './footer';

describe('FooterComponent', () => {
  it('should contain shadow root', async () => {
    const harness = await createFixture();
    expect(harness.el.shadowRoot).to.be.ok;
  });

  describe('Default properties', () => {
    it('should resolve auto layout to "alternative" when viewport is narrow', async () => {
      window.matchMedia = (query: string): MediaQueryList => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => true
      });

      const harness = await createFixture();
      expect(harness.el.matches(':state(alternative)')).to.be.true;
    });

    it('should resolve auto layout to "standard" when viewport is wide', async () => {
      window.matchMedia = (query: string): MediaQueryList => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => true
      });

      const harness = await createFixture();
      expect(harness.el.matches(':state(standard)')).to.be.true;
    });

    it('should have default layoutBreakpoint value of 900', async () => {
      const harness = await createFixture();
      expect(harness.el.layoutBreakpoint).to.equal(900);
    });
  });

  describe('Layout property', () => {
    it('should set layout attribute to "standard"', async () => {
      const harness = await createFixture(html`<forge-footer layout="standard"></forge-footer>`);
      expect(harness.el.layout).to.equal('standard');
      expect(harness.el.getAttribute('layout')).to.equal('standard');
    });

    it('should update layout state when property changes', async () => {
      const harness = await createFixture(html`<forge-footer layout="standard"></forge-footer>`);
      harness.el.layout = 'alternative';
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(alternative)')).to.be.true;
    });
  });

  describe('Rendering', () => {
    it('should render footer element', async () => {
      const harness = await createFixture();
      expect(harness.footer).to.exist;
    });

    it('should render ul with role="list"', async () => {
      const harness = await createFixture();
      expect(harness.ul).to.exist;
      expect(harness.ul?.getAttribute('role')).to.equal('list');
    });

    it('should render slot for content projection', async () => {
      const harness = await createFixture();
      expect(harness.slot).to.exist;
    });

    it('should project slotted content', async () => {
      const harness = await createFixture(
        html`<forge-footer><a href="#">Link 1</a><a href="#">Link 2</a></forge-footer>`
      );
      const assigned = harness.slot?.assignedElements();
      expect(assigned?.length).to.equal(2);
      expect(assigned?.[0].tagName).to.equal('A');
    });
  });
});

class FooterHarness {
  constructor(public el: FooterComponent) {}

  public get footer(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('footer');
  }

  public get ul(): HTMLUListElement | null {
    return this.el.shadowRoot!.querySelector('ul');
  }

  public get slot(): HTMLSlotElement | null {
    return this.el.shadowRoot!.querySelector('slot');
  }
}

async function createFixture(
  template: ReturnType<typeof html> = html`<forge-footer></forge-footer>`
): Promise<FooterHarness> {
  const el = await fixture<FooterComponent>(template);
  return new FooterHarness(el);
}

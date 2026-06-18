import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { FooterComponent } from './footer';
import sinon from 'sinon';

import './footer';

describe('FooterComponent', () => {
  afterEach(() => {
    sinon.restore();
  });

  function setupMediaQuery(matches: boolean): void {
    sinon.stub(window, 'matchMedia').returns({
      matches,
      addEventListener: sinon.stub(),
      removeEventListener: sinon.stub(),
      media: '',
      onchange: null,
      addListener: sinon.stub(),
      removeListener: sinon.stub(),
      dispatchEvent: sinon.stub()
    } as unknown as MediaQueryList);
  }

  it('should contain shadow root', async () => {
    const harness = await createFixture();
    expect(harness.el.shadowRoot).to.be.ok;
  });

  describe('Accessibility', () => {
    it('should have role="contentinfo"', async () => {
      const harness = await createFixture();
      expect(harness.el.getAttribute('role')).to.equal('contentinfo');
    });

    it('should be accessible', async () => {
      const harness = await createFixture(
        html`<forge-footer
          ><forge-footer-item><a href="#">Link</a></forge-footer-item></forge-footer
        >`
      );
      await expect(harness.el).shadowDom.to.be.accessible({
        ignoredRules: ['landmark-contentinfo-is-top-level', 'landmark-no-duplicate-contentinfo', 'landmark-unique']
      });
    });
  });

  describe('Default properties', () => {
    it('should resolve auto layout to "alternative" when viewport is narrow', async () => {
      setupMediaQuery(true);
      const harness = await createFixture();
      expect(harness.el.matches(':state(alternative)')).to.be.true;
    });

    it('should resolve auto layout to "standard" when viewport is wide', async () => {
      setupMediaQuery(false);
      const harness = await createFixture();
      expect(harness.el.matches(':state(standard)')).to.be.true;
    });

    it('should have default layoutBreakpoint value of 900', async () => {
      const harness = await createFixture();
      expect(harness.el.layoutBreakpoint).to.equal(900);
    });
  });

  it('should define sub-component dependencies', async () => {
    expect(window.customElements.get('forge-footer-item')).to.be.ok;
  });

  describe('Layout property', () => {
    it('should set layout attribute to "standard"', async () => {
      const harness = await createFixture(html`<forge-footer layout="standard"></forge-footer>`);
      expect(harness.el.layout).to.equal('standard');
      expect(harness.el.getAttribute('layout')).to.equal('standard');
    });

    it('should set layout state to "auto"', async () => {
      setupMediaQuery(false);
      const harness = await createFixture(html`<forge-footer layout="auto"></forge-footer>`);
      expect(harness.el.layout).to.equal('auto');
      expect(harness.el.matches(':state(auto)')).to.be.true;
    });

    it('should update layout state when property changes', async () => {
      const harness = await createFixture(html`<forge-footer layout="standard"></forge-footer>`);
      harness.el.layout = 'alternative';
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(alternative)')).to.be.true;
    });

    it('should transition layout states correctly', async () => {
      const harness = await createFixture(html`<forge-footer layout="standard"></forge-footer>`);
      expect(harness.el.matches(':state(standard)')).to.be.true;

      harness.el.layout = 'alternative';
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(alternative)')).to.be.true;
      expect(harness.el.matches(':state(standard)')).to.be.false;
    });
  });

  describe('Layout breakpoint property', () => {
    it('should update layoutBreakpoint value', async () => {
      setupMediaQuery(false);
      const harness = await createFixture(html`<forge-footer layout="auto"></forge-footer>`);

      harness.el.layoutBreakpoint = 500;
      await harness.el.updateComplete;

      expect(harness.el.layoutBreakpoint).to.equal(500);
    });

    it('should not affect layout when not in auto mode', async () => {
      const harness = await createFixture(html`<forge-footer layout="standard"></forge-footer>`);

      harness.el.layoutBreakpoint = 500;
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(standard)')).to.be.true;
    });
  });

  describe('Rendering', () => {
    it('should render footer element', async () => {
      const harness = await createFixture();
      expect(harness.footer).to.exist;
    });

    it('should render div with role="list"', async () => {
      const harness = await createFixture();
      expect(harness.listContainer).to.exist;
      expect(harness.listContainer?.getAttribute('role')).to.equal('list');
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

    it('should render graphic slot', async () => {
      const harness = await createFixture(html`<forge-footer><img slot="graphic" src="logo.png" /></forge-footer>`);
      const graphicSlot = harness.el.shadowRoot!.querySelector('slot[name="graphic"]') as HTMLSlotElement;
      expect(graphicSlot).to.exist;
      expect(graphicSlot?.assignedElements().length).to.equal(1);
    });
  });

  describe('CSS parts', () => {
    it('should expose root part', async () => {
      const harness = await createFixture();
      const root = harness.el.shadowRoot!.querySelector('[part="root"]');
      expect(root).to.exist;
      expect(root?.tagName.toLowerCase()).to.equal('footer');
    });

    it('should expose content part', async () => {
      const harness = await createFixture();
      const content = harness.el.shadowRoot!.querySelector('[part="content"]');
      expect(content).to.exist;
      expect(content?.getAttribute('role')).to.equal('list');
    });
  });
});

class FooterHarness {
  constructor(public el: FooterComponent) {}

  public get footer(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('footer');
  }

  public get listContainer(): HTMLDivElement | null {
    return this.el.shadowRoot!.querySelector('div[role="list"]');
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

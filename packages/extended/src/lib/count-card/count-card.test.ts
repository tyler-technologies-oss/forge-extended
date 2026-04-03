import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { CountCardComponent } from './count-card';

class CountCardHarness {
  constructor(public el: CountCardComponent) {}

  public get cardElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('forge-card') as HTMLElement;
  }

  public get headerElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.header') as HTMLElement;
  }

  public get iconContainerElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.icon-container') as HTMLElement;
  }

  public get labelElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.label') as HTMLElement;
  }

  public get countElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.count') as HTMLElement;
  }

  public get iconSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="icon"]') as HTMLSlotElement;
  }

  public get labelSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="label"]') as HTMLSlotElement;
  }

  public get countSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="count"]') as HTMLSlotElement;
  }

  public get fullWidthSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="full-width"]') as HTMLSlotElement;
  }

  public get fullWidthElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.full-width') as HTMLElement;
  }

  public get headerEndSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="header-end"]') as HTMLSlotElement;
  }

  public get headerEndElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.header-end') as HTMLElement;
  }
}

describe('CountCardComponent', () => {
  it('should render', async () => {
    const harness = await createFixture();

    expect(harness.el).to.be.instanceOf(CountCardComponent);
    expect(harness.el.shadowRoot).to.be.ok;
    expect(harness.cardElement).to.be.ok;
  });

  it('should define sub-component dependencies', async () => {
    expect(window.customElements.get('forge-card')).to.be.ok;
  });

  it('should have all slots available', async () => {
    const harness = await createFixture();

    expect(harness.iconSlot).to.be.ok;
    expect(harness.labelSlot).to.be.ok;
    expect(harness.headerEndSlot).to.be.ok;
    expect(harness.countSlot).to.be.ok;
    expect(harness.fullWidthSlot).to.be.ok;
  });

  it('should have header structure', async () => {
    const harness = await createFixture();

    expect(harness.headerElement).to.be.ok;
    expect(harness.iconContainerElement).to.be.ok;
    expect(harness.labelElement).to.be.ok;
  });

  it('should have count element', async () => {
    const harness = await createFixture();

    expect(harness.countElement).to.be.ok;
  });

  describe('slots', () => {
    it('should project content into icon slot', async () => {
      const el = await fixture<CountCardComponent>(html`
        <forge-count-card>
          <span slot="icon">$</span>
        </forge-count-card>
      `);
      const harness = new CountCardHarness(el);

      expect(harness.iconSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into label slot', async () => {
      const el = await fixture<CountCardComponent>(html`
        <forge-count-card>
          <span slot="label">Label</span>
        </forge-count-card>
      `);
      const harness = new CountCardHarness(el);

      expect(harness.labelSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into count slot', async () => {
      const el = await fixture<CountCardComponent>(html`
        <forge-count-card>
          <span slot="count">$100.00</span>
        </forge-count-card>
      `);
      const harness = new CountCardHarness(el);

      expect(harness.countSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into full-width slot', async () => {
      const el = await fixture<CountCardComponent>(html`
        <forge-count-card>
          <div slot="full-width">Sparkline content</div>
        </forge-count-card>
      `);
      const harness = new CountCardHarness(el);

      expect(harness.fullWidthSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into header-end slot', async () => {
      const el = await fixture<CountCardComponent>(html`
        <forge-count-card>
          <span slot="header-end">Badge</span>
        </forge-count-card>
      `);
      const harness = new CountCardHarness(el);

      expect(harness.headerEndSlot.assignedNodes().length).to.be.greaterThan(0);
    });
  });

  describe('theme', () => {
    it('should not have theme by default', async () => {
      const harness = await createFixture();

      expect(harness.el.theme).to.be.undefined;
    });

    it('should apply theme state when theme property is set', async () => {
      const el = await fixture<CountCardComponent>(html`<forge-count-card theme="primary"></forge-count-card>`);

      expect(el.theme).to.equal('primary');
      expect(el.matches(':state(primary)')).to.be.true;
    });

    it('should apply info-secondary theme state', async () => {
      const el = await fixture<CountCardComponent>(html`<forge-count-card theme="info-secondary"></forge-count-card>`);

      expect(el.theme).to.equal('info-secondary');
      expect(el.matches(':state(info-secondary)')).to.be.true;
    });

    it('should toggle theme state dynamically', async () => {
      const harness = await createFixture();

      harness.el.theme = 'success';
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(success)')).to.be.true;

      harness.el.theme = 'error';
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(error)')).to.be.true;
      expect(harness.el.matches(':state(success)')).to.be.false;
    });
  });

  describe('noBorder', () => {
    it('should not have no-border state by default', async () => {
      const harness = await createFixture();

      expect(harness.el.noBorder).to.be.false;
      expect(harness.el.matches(':state(no-border)')).to.be.false;
    });

    it('should apply no-border state when noBorder property is true', async () => {
      const el = await fixture<CountCardComponent>(html`<forge-count-card no-border></forge-count-card>`);

      expect(el.noBorder).to.be.true;
      expect(el.matches(':state(no-border)')).to.be.true;
    });

    it('should toggle no-border state dynamically', async () => {
      const harness = await createFixture();

      harness.el.noBorder = true;
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(no-border)')).to.be.true;

      harness.el.noBorder = false;
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(no-border)')).to.be.false;
    });
  });
});

async function createFixture(): Promise<CountCardHarness> {
  const el = await fixture<CountCardComponent>(html` <forge-count-card></forge-count-card> `);
  return new CountCardHarness(el);
}

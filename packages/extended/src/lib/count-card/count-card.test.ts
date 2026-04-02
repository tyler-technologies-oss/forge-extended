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

  public get fullBleedSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="full-bleed"]') as HTMLSlotElement;
  }

  public get fullBleedElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.full-bleed') as HTMLElement;
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
    expect(harness.countSlot).to.be.ok;
    expect(harness.fullBleedSlot).to.be.ok;
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

    it('should project content into full-bleed slot', async () => {
      const el = await fixture<CountCardComponent>(html`
        <forge-count-card>
          <div slot="full-bleed">Sparkline content</div>
        </forge-count-card>
      `);
      const harness = new CountCardHarness(el);

      expect(harness.fullBleedSlot.assignedNodes().length).to.be.greaterThan(0);
    });
  });
});

async function createFixture(): Promise<CountCardHarness> {
  const el = await fixture<CountCardComponent>(html` <forge-count-card></forge-count-card> `);
  return new CountCardHarness(el);
}

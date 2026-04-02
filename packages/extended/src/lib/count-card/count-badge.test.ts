import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { CountBadgeComponent } from './count-badge';

class CountBadgeHarness {
  constructor(public el: CountBadgeComponent) {}

  public get badgeElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('forge-badge') as HTMLElement;
  }

  public get defaultSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
  }
}

describe('CountBadgeComponent', () => {
  it('should render', async () => {
    const harness = await createFixture();

    expect(harness.el).to.be.instanceOf(CountBadgeComponent);
    expect(harness.el.shadowRoot).to.be.ok;
    expect(harness.badgeElement).to.be.ok;
  });

  it('should define sub-component dependencies', async () => {
    expect(window.customElements.get('forge-badge')).to.be.ok;
  });

  it('should have default slot available', async () => {
    const harness = await createFixture();

    expect(harness.defaultSlot).to.be.ok;
  });

  it('should default to success theme', async () => {
    const harness = await createFixture();

    expect(harness.el.theme).to.equal('success');
    expect(harness.badgeElement.getAttribute('theme')).to.equal('success');
  });

  it('should apply theme attribute to badge', async () => {
    const el = await fixture<CountBadgeComponent>(html` <forge-count-badge theme="error"></forge-count-badge> `);
    const harness = new CountBadgeHarness(el);

    expect(harness.el.theme).to.equal('error');
    expect(harness.badgeElement.getAttribute('theme')).to.equal('error');
  });

  it('should project content into default slot', async () => {
    const el = await fixture<CountBadgeComponent>(html` <forge-count-badge>+12%</forge-count-badge> `);
    const harness = new CountBadgeHarness(el);

    expect(harness.defaultSlot.assignedNodes().length).to.be.greaterThan(0);
  });
});

async function createFixture(): Promise<CountBadgeHarness> {
  const el = await fixture<CountBadgeComponent>(html` <forge-count-badge></forge-count-badge> `);
  return new CountBadgeHarness(el);
}

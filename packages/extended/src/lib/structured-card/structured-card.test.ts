import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { StructuredCardComponent } from './structured-card';

class StructuredCardHarness {
  constructor(public el: StructuredCardComponent) {}

  public get cardElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('forge-card') as HTMLElement;
  }

  public get contentScaffoldElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('forge-content-scaffold') as HTMLElement;
  }

  public get titleElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('#title') as HTMLElement;
  }

  public get footerActionsElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.footer-actions');
  }

  public get beforeTitleSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="before-title"]') as HTMLSlotElement;
  }

  public get titleSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="title"]') as HTMLSlotElement;
  }

  public get headerActionsSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="header-actions"]') as HTMLSlotElement;
  }

  public get bodySlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="body"]') as HTMLSlotElement;
  }

  public get footerStartSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="footer-start"]') as HTMLSlotElement;
  }

  public get footerSecondaryActionSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="footer-secondary-action"]') as HTMLSlotElement;
  }

  public get footerPrimaryActionSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="footer-primary-action"]') as HTMLSlotElement;
  }
}

describe('StructuredCardComponent', () => {
  it('should render', async () => {
    const harness = await createFixture();

    expect(harness.el).to.be.instanceOf(StructuredCardComponent);
    expect(harness.el.shadowRoot).to.be.ok;
    expect(harness.cardElement).to.be.ok;
    expect(harness.contentScaffoldElement).to.be.ok;
  });

  it('should define sub-component dependencies', async () => {
    expect(window.customElements.get('forge-card')).to.be.ok;
    expect(window.customElements.get('forge-content-scaffold')).to.be.ok;
    expect(window.customElements.get('forge-toolbar')).to.be.ok;
  });

  it('should have all slots available', async () => {
    const harness = await createFixture();

    expect(harness.beforeTitleSlot).to.be.ok;
    expect(harness.titleSlot).to.be.ok;
    expect(harness.headerActionsSlot).to.be.ok;
    expect(harness.bodySlot).to.be.ok;
    expect(harness.footerStartSlot).to.be.ok;
    expect(harness.footerSecondaryActionSlot).to.be.ok;
    expect(harness.footerPrimaryActionSlot).to.be.ok;
  });

  describe('properties', () => {
    it('should have default heading level of 2', async () => {
      const harness = await createFixture();

      expect(harness.el.headingLevel).to.equal(2);
      expect(harness.titleElement.getAttribute('aria-level')).to.equal('2');
    });

    it('should set heading level via property', async () => {
      const harness = await createFixture();

      harness.el.headingLevel = 3;
      await harness.el.updateComplete;

      expect(harness.el.headingLevel).to.equal(3);
      expect(harness.titleElement.getAttribute('aria-level')).to.equal('3');
    });

    it('should set heading level via attribute', async () => {
      const harness = await createFixture();

      harness.el.setAttribute('heading-level', '4');
      await harness.el.updateComplete;

      expect(harness.el.headingLevel).to.equal(4);
      expect(harness.titleElement.getAttribute('aria-level')).to.equal('4');
    });

    it('should have default withTable value of false', async () => {
      const harness = await createFixture();

      expect(harness.el.withTable).to.be.false;
    });

    it('should set withTable via property', async () => {
      const harness = await createFixture();

      harness.el.withTable = true;
      await harness.el.updateComplete;

      expect(harness.el.withTable).to.be.true;
    });

    it('should set withTable via attribute', async () => {
      const harness = await createFixture();

      harness.el.setAttribute('with-table', '');
      await harness.el.updateComplete;

      expect(harness.el.withTable).to.be.true;
    });

    it('should apply zero padding to content scaffold body when withTable is true', async () => {
      const harness = await createFixture();

      harness.el.withTable = true;
      await harness.el.updateComplete;

      const style = harness.contentScaffoldElement.getAttribute('style');
      expect(style).to.include('--forge-content-scaffold-body-padding: 0');
    });

    it('should not apply padding override when withTable is false', async () => {
      const harness = await createFixture();

      harness.el.withTable = false;
      await harness.el.updateComplete;

      const style = harness.contentScaffoldElement.getAttribute('style');
      expect(style).to.not.include('--forge-content-scaffold-body-padding');
    });
  });

  describe('slots', () => {
    it('should project content into before-title slot', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <div slot="before-title">Before Title</div>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);

      expect(harness.beforeTitleSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into title slot', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <div slot="title">Title</div>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);

      expect(harness.titleSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into header-actions slot', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="header-actions">Action</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);

      expect(harness.headerActionsSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into body slot', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <div slot="body">Body Content</div>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);

      expect(harness.bodySlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into footer-start slot', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <div slot="footer-start">Footer Start</div>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);

      expect(harness.footerStartSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into footer-secondary-action slot', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="footer-secondary-action">Cancel</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);

      expect(harness.footerSecondaryActionSlot.assignedNodes().length).to.be.greaterThan(0);
    });

    it('should project content into footer-primary-action slot', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="footer-primary-action">Save</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);

      expect(harness.footerPrimaryActionSlot.assignedNodes().length).to.be.greaterThan(0);
    });
  });

  describe('footer actions conditional rendering', () => {
    it('should not render footer-actions wrapper when footer action slots are empty', async () => {
      const harness = await createFixture();

      expect(harness.footerActionsElement).to.be.null;
    });

    it('should render footer-actions wrapper when footer-secondary-action slot has content', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="footer-secondary-action">Cancel</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;
    });

    it('should render footer-actions wrapper when footer-primary-action slot has content', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="footer-primary-action">Save</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;
    });

    it('should render footer-actions wrapper when both footer action slots have content', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="footer-secondary-action">Cancel</button>
          <button slot="footer-primary-action">Save</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;
    });

    it('should show footer-actions wrapper when content is dynamically added to footer-secondary-action', async () => {
      const harness = await createFixture();
      await harness.el.updateComplete;

      expect(harness.footerActionsElement).to.be.null;

      const button = document.createElement('button');
      button.slot = 'footer-secondary-action';
      button.textContent = 'Cancel';
      harness.el.appendChild(button);

      // Wait for slotchange event to fire and component to update
      await new Promise(resolve => setTimeout(resolve, 0));
      await harness.el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;
    });

    it('should show footer-actions wrapper when content is dynamically added to footer-primary-action', async () => {
      const harness = await createFixture();
      await harness.el.updateComplete;

      expect(harness.footerActionsElement).to.be.null;

      const button = document.createElement('button');
      button.slot = 'footer-primary-action';
      button.textContent = 'Save';
      harness.el.appendChild(button);

      // Wait for slotchange event to fire and component to update
      await new Promise(resolve => setTimeout(resolve, 0));
      await harness.el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;
    });

    it('should hide footer-actions wrapper when content is dynamically removed from footer-secondary-action', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="footer-secondary-action" id="cancel-btn">Cancel</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;

      const button = el.querySelector('#cancel-btn');
      button?.remove();

      // Wait for slotchange event to fire and component to update
      await new Promise(resolve => setTimeout(resolve, 0));
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.null;
    });

    it('should hide footer-actions wrapper when content is dynamically removed from footer-primary-action', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="footer-primary-action" id="save-btn">Save</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;

      const button = el.querySelector('#save-btn');
      button?.remove();

      // Wait for slotchange event to fire and component to update
      await new Promise(resolve => setTimeout(resolve, 0));
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.null;
    });

    it('should keep footer-actions wrapper when one action is removed but another remains', async () => {
      const el = await fixture<StructuredCardComponent>(html`
        <forge-structured-card>
          <button slot="footer-secondary-action" id="cancel-btn">Cancel</button>
          <button slot="footer-primary-action">Save</button>
        </forge-structured-card>
      `);
      const harness = new StructuredCardHarness(el);
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;

      const button = el.querySelector('#cancel-btn');
      button?.remove();

      // Wait for slotchange event to fire and component to update
      await new Promise(resolve => setTimeout(resolve, 0));
      await el.updateComplete;

      expect(harness.footerActionsElement).to.be.ok;
    });
  });

  describe('accessibility', () => {
    it('should have proper heading role', async () => {
      const harness = await createFixture();

      expect(harness.titleElement.getAttribute('role')).to.equal('heading');
    });

    it('should have proper aria-level attribute on title', async () => {
      const harness = await createFixture();

      expect(harness.titleElement.getAttribute('aria-level')).to.equal('2');
    });

    it('should update aria-level when headingLevel changes', async () => {
      const harness = await createFixture();

      harness.el.headingLevel = 1;
      await harness.el.updateComplete;

      expect(harness.titleElement.getAttribute('aria-level')).to.equal('1');
    });
  });
});

async function createFixture(): Promise<StructuredCardHarness> {
  const el = await fixture<StructuredCardComponent>(html` <forge-structured-card></forge-structured-card> `);
  return new StructuredCardHarness(el);
}

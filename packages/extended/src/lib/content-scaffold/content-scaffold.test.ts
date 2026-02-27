import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ContentScaffoldComponent } from './content-scaffold';

class ContentScaffoldHarness {
  constructor(public el: ContentScaffoldComponent) {}

  public get containerElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.container') as HTMLElement;
  }

  public get headerElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.header');
  }

  public get bodyElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.body');
  }

  public get footerElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.footer');
  }

  public get beforeHeaderStartSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="before-header-start"]') as HTMLSlotElement;
  }

  public get headerStartSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="header-start"]') as HTMLSlotElement;
  }

  public get headerEndSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="header-end"]') as HTMLSlotElement;
  }

  public get bodySlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="body"]') as HTMLSlotElement;
  }

  public get footerStartSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="footer-start"]') as HTMLSlotElement;
  }

  public get footerEndSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="footer-end"]') as HTMLSlotElement;
  }
}

describe('ContentScaffoldComponent', () => {
  it('should render', async () => {
    const harness = await createFixture();

    expect(harness.el).to.be.instanceOf(ContentScaffoldComponent);
    expect(harness.el.shadowRoot).to.be.ok;
    expect(harness.containerElement).to.be.ok;
  });

  it('should have all slots available', async () => {
    const harness = await createFixture();

    expect(harness.beforeHeaderStartSlot).to.be.ok;
    expect(harness.headerStartSlot).to.be.ok;
    expect(harness.headerEndSlot).to.be.ok;
    expect(harness.bodySlot).to.be.ok;
    expect(harness.footerStartSlot).to.be.ok;
    expect(harness.footerEndSlot).to.be.ok;
  });

  describe('conditional rendering', () => {
    describe('header', () => {
      it('should not render header wrapper when all header slots are empty', async () => {
        const harness = await createFixture();

        expect(harness.headerElement).to.be.null;
      });

      it('should render header wrapper when before-header-start slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="before-header-start">Before Header Start</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
      });

      it('should render header wrapper when header-start slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-start">Header Start</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
      });

      it('should render header wrapper when header-end slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-end">Header End</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
      });

      it('should render header wrapper when any header slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="before-header-start">Before</div>
            <div slot="header-start">Start</div>
            <div slot="header-end">End</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
      });

      it('should show header wrapper when content is dynamically added', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.headerElement).to.be.null;

        const headerContent = document.createElement('div');
        headerContent.slot = 'header-start';
        headerContent.textContent = 'Dynamic Header';
        harness.el.appendChild(headerContent);

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await harness.el.updateComplete;

        expect(harness.headerElement).to.be.ok;
      });

      it('should hide header wrapper when content is dynamically removed', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-start" id="header-content">Header</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;

        const headerContent = el.querySelector('#header-content');
        headerContent?.remove();

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await el.updateComplete;

        expect(harness.headerElement).to.be.null;
      });
    });

    describe('body', () => {
      it('should not render body wrapper when body slot is empty', async () => {
        const harness = await createFixture();

        expect(harness.bodyElement).to.be.null;
      });

      it('should render body wrapper when body slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="body">Body Content</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.bodyElement).to.be.ok;
      });

      it('should show body wrapper when content is dynamically added', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.bodyElement).to.be.null;

        const bodyContent = document.createElement('div');
        bodyContent.slot = 'body';
        bodyContent.textContent = 'Dynamic Body';
        harness.el.appendChild(bodyContent);

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await harness.el.updateComplete;

        expect(harness.bodyElement).to.be.ok;
      });

      it('should hide body wrapper when content is dynamically removed', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="body" id="body-content">Body</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.bodyElement).to.be.ok;

        const bodyContent = el.querySelector('#body-content');
        bodyContent?.remove();

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await el.updateComplete;

        expect(harness.bodyElement).to.be.null;
      });
    });

    describe('footer', () => {
      it('should not render footer wrapper when all footer slots are empty', async () => {
        const harness = await createFixture();

        expect(harness.footerElement).to.be.null;
      });

      it('should render footer wrapper when footer-start slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer-start">Footer Start</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
      });

      it('should render footer wrapper when footer-end slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer-end">Footer End</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
      });

      it('should render footer wrapper when any footer slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer-start">Start</div>
            <div slot="footer-end">End</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
      });

      it('should show footer wrapper when content is dynamically added', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.footerElement).to.be.null;

        const footerContent = document.createElement('div');
        footerContent.slot = 'footer-start';
        footerContent.textContent = 'Dynamic Footer';
        harness.el.appendChild(footerContent);

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await harness.el.updateComplete;

        expect(harness.footerElement).to.be.ok;
      });

      it('should hide footer wrapper when content is dynamically removed', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer-start" id="footer-content">Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;

        const footerContent = el.querySelector('#footer-content');
        footerContent?.remove();

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await el.updateComplete;

        expect(harness.footerElement).to.be.null;
      });
    });

    describe('combined sections', () => {
      it('should render only sections with content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-start">Header</div>
            <div slot="footer-end">Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.bodyElement).to.be.null;
        expect(harness.footerElement).to.be.ok;
      });

      it('should render all sections when all have content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-start">Header</div>
            <div slot="body">Body</div>
            <div slot="footer-start">Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.bodyElement).to.be.ok;
        expect(harness.footerElement).to.be.ok;
      });

      it('should render no sections when all slots are empty', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.headerElement).to.be.null;
        expect(harness.bodyElement).to.be.null;
        expect(harness.footerElement).to.be.null;
      });
    });
  });
});

async function createFixture(): Promise<ContentScaffoldHarness> {
  const el = await fixture<ContentScaffoldComponent>(html` <forge-content-scaffold></forge-content-scaffold> `);
  return new ContentScaffoldHarness(el);
}

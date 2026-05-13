import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ContentScaffoldComponent } from './content-scaffold';

class ContentScaffoldHarness {
  constructor(public el: ContentScaffoldComponent) {}

  public get outerContainerElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.outer-container') as HTMLElement;
  }

  public get headerElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.header');
  }

  public get headerFullWidthElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.header-full-content');
  }

  public get bodyElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.body');
  }

  public get footerElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.footer');
  }

  public get footerFullWidthElement(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.footer-full-content');
  }

  public isElementHidden(element: HTMLElement | null): boolean {
    return element?.style.display === 'none';
  }

  public get headerSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="header"]') as HTMLSlotElement;
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

  public get footerSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="footer"]') as HTMLSlotElement;
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
    expect(harness.outerContainerElement).to.be.ok;
  });

  it('should have all slots available', async () => {
    const harness = await createFixture();

    expect(harness.headerSlot).to.be.ok;
    expect(harness.beforeHeaderStartSlot).to.be.ok;
    expect(harness.headerStartSlot).to.be.ok;
    expect(harness.headerEndSlot).to.be.ok;
    expect(harness.bodySlot).to.be.ok;
    expect(harness.footerSlot).to.be.ok;
    expect(harness.footerStartSlot).to.be.ok;
    expect(harness.footerEndSlot).to.be.ok;
  });

  describe('conditional rendering', () => {
    describe('header', () => {
      it('should hide header wrapper when all header slots are empty', async () => {
        const harness = await createFixture();

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.true;
      });

      it('should show header wrapper when before-header-start slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="before-header-start">Before Header Start</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;
      });

      it('should show header wrapper when header-start slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-start">Header Start</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;
      });

      it('should show header wrapper when header-end slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-end">Header End</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;
      });

      it('should show header wrapper when any header slot has content', async () => {
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
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;
      });

      it('should show header wrapper when content is dynamically added', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.true;

        const headerContent = document.createElement('div');
        headerContent.slot = 'header-start';
        headerContent.textContent = 'Dynamic Header';
        harness.el.appendChild(headerContent);

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await harness.el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;
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
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;

        const headerContent = el.querySelector('#header-content');
        headerContent?.remove();

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.true;
      });
    });

    describe('body', () => {
      it('should hide body wrapper when body slot is empty', async () => {
        const harness = await createFixture();

        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.true;
      });

      it('should show body wrapper when body slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="body">Body Content</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.false;
      });

      it('should show body wrapper when content is dynamically added', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.true;

        const bodyContent = document.createElement('div');
        bodyContent.slot = 'body';
        bodyContent.textContent = 'Dynamic Body';
        harness.el.appendChild(bodyContent);

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await harness.el.updateComplete;

        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.false;
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
        expect(harness.isElementHidden(harness.bodyElement)).to.be.false;

        const bodyContent = el.querySelector('#body-content');
        bodyContent?.remove();

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await el.updateComplete;

        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.true;
      });
    });

    describe('footer', () => {
      it('should hide footer wrapper when all footer slots are empty', async () => {
        const harness = await createFixture();

        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.true;
      });

      it('should show footer wrapper when footer-start slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer-start">Footer Start</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.false;
      });

      it('should show footer wrapper when footer-end slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer-end">Footer End</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.false;
      });

      it('should show footer wrapper when any footer slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer-start">Start</div>
            <div slot="footer-end">End</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.false;
      });

      it('should show footer wrapper when content is dynamically added', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.true;

        const footerContent = document.createElement('div');
        footerContent.slot = 'footer-start';
        footerContent.textContent = 'Dynamic Footer';
        harness.el.appendChild(footerContent);

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await harness.el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.false;
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
        expect(harness.isElementHidden(harness.footerElement)).to.be.false;

        const footerContent = el.querySelector('#footer-content');
        footerContent?.remove();

        // Wait for slotchange event to fire and component to update
        await new Promise(resolve => setTimeout(resolve, 0));
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.true;
      });
    });

    describe('combined sections', () => {
      it('should show only sections with content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-start">Header</div>
            <div slot="footer-end">Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;
        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.true;
        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.false;
      });

      it('should show all sections when all have content', async () => {
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
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;
        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.false;
        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.false;
      });

      it('should hide all sections when all slots are empty', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.true;
        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.true;
        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.true;
      });
    });
  });

  describe('slot detection for full-width modes', () => {
    describe('full-width header via slot detection', () => {
      it('should render full-width header when header slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header">Full Width Header</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerFullWidthElement).to.be.ok;
        expect(harness.headerElement).to.be.null;
      });

      it('should render multi-slot header when header slot is empty', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-start">Standard Header</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.isElementHidden(harness.headerElement)).to.be.false;
        expect(harness.headerFullWidthElement).to.be.null;
      });

      it('should switch to full-width header when content is added to header slot', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.headerFullWidthElement).to.be.null;

        const headerContent = document.createElement('div');
        headerContent.slot = 'header';
        headerContent.textContent = 'Full Width Header';
        harness.el.appendChild(headerContent);

        await new Promise(resolve => setTimeout(resolve, 0));
        await harness.el.updateComplete;

        expect(harness.headerElement).to.be.null;
        expect(harness.headerFullWidthElement).to.be.ok;
      });

      it('should switch to multi-slot header when content is removed from header slot', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header" id="header-content">Full Width Header</div>
            <div slot="header-start">Standard Header</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerFullWidthElement).to.be.ok;
        expect(harness.headerElement).to.be.null;

        const headerContent = el.querySelector('#header-content');
        headerContent?.remove();

        await new Promise(resolve => setTimeout(resolve, 0));
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.headerFullWidthElement).to.be.null;
      });
    });

    describe('full-width footer via slot detection', () => {
      it('should render full-width footer when footer slot has content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer">Full Width Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerFullWidthElement).to.be.ok;
        expect(harness.footerElement).to.be.null;
      });

      it('should render multi-slot footer when footer slot is empty', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer-start">Standard Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.isElementHidden(harness.footerElement)).to.be.false;
        expect(harness.footerFullWidthElement).to.be.null;
      });

      it('should switch to full-width footer when content is added to footer slot', async () => {
        const harness = await createFixture();
        await harness.el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.footerFullWidthElement).to.be.null;

        const footerContent = document.createElement('div');
        footerContent.slot = 'footer';
        footerContent.textContent = 'Full Width Footer';
        harness.el.appendChild(footerContent);

        await new Promise(resolve => setTimeout(resolve, 0));
        await harness.el.updateComplete;

        expect(harness.footerElement).to.be.null;
        expect(harness.footerFullWidthElement).to.be.ok;
      });

      it('should switch to multi-slot footer when content is removed from footer slot', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="footer" id="footer-content">Full Width Footer</div>
            <div slot="footer-start">Standard Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.footerFullWidthElement).to.be.ok;
        expect(harness.footerElement).to.be.null;

        const footerContent = el.querySelector('#footer-content');
        footerContent?.remove();

        await new Promise(resolve => setTimeout(resolve, 0));
        await el.updateComplete;

        expect(harness.footerElement).to.be.ok;
        expect(harness.footerFullWidthElement).to.be.null;
      });
    });

    describe('combined full-width modes', () => {
      it('should render both full-width header and footer when both slots have content', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header">Full Width Header</div>
            <div slot="body">Body</div>
            <div slot="footer">Full Width Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerFullWidthElement).to.be.ok;
        expect(harness.headerElement).to.be.null;
        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.false;
        expect(harness.footerFullWidthElement).to.be.ok;
        expect(harness.footerElement).to.be.null;
      });

      it('should render multi-slot header with full-width footer', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header-start">Standard Header</div>
            <div slot="body">Body</div>
            <div slot="footer">Full Width Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerElement).to.be.ok;
        expect(harness.headerFullWidthElement).to.be.null;
        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.false;
        expect(harness.footerFullWidthElement).to.be.ok;
        expect(harness.footerElement).to.be.null;
      });

      it('should render full-width header with multi-slot footer', async () => {
        const el = await fixture<ContentScaffoldComponent>(html`
          <forge-content-scaffold>
            <div slot="header">Full Width Header</div>
            <div slot="body">Body</div>
            <div slot="footer-start">Standard Footer</div>
          </forge-content-scaffold>
        `);
        const harness = new ContentScaffoldHarness(el);
        await el.updateComplete;

        expect(harness.headerFullWidthElement).to.be.ok;
        expect(harness.headerElement).to.be.null;
        expect(harness.bodyElement).to.be.ok;
        expect(harness.isElementHidden(harness.bodyElement)).to.be.false;
        expect(harness.footerElement).to.be.ok;
        expect(harness.footerFullWidthElement).to.be.null;
      });
    });
  });
});

async function createFixture(): Promise<ContentScaffoldHarness> {
  const el = await fixture<ContentScaffoldComponent>(html` <forge-content-scaffold></forge-content-scaffold> `);
  return new ContentScaffoldHarness(el);
}

import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { LandingPageLayoutComponent } from './landing-page-layout';

class LandingPageLayoutHarness {
  constructor(public el: LandingPageLayoutComponent) {}

  public get rootElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.root') as HTMLElement;
  }

  public get containerElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.container') as HTMLElement;
  }

  public get headerElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.header') as HTMLElement;
  }

  public get headerBackgroundElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.header-background') as HTMLElement;
  }

  public get pictureElement(): HTMLPictureElement | null {
    return this.el.shadowRoot!.querySelector('picture.header-background-picture') as HTMLPictureElement | null;
  }

  public get bodyElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.body') as HTMLElement;
  }

  public get footerElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.footer') as HTMLElement;
  }

  public get imageSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="image"]') as HTMLSlotElement;
  }

  public get secondaryTitleSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="secondary-title"]') as HTMLSlotElement;
  }

  public get mainTitleSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="main-title"]') as HTMLSlotElement;
  }

  public get actionSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="action"]') as HTMLSlotElement;
  }

  public get announcementsSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="announcements"]') as HTMLSlotElement;
  }

  public get topSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="top"]') as HTMLSlotElement;
  }

  public get leftSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="left"]') as HTMLSlotElement;
  }

  public get centerSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="center"]') as HTMLSlotElement;
  }

  public get rightSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="right"]') as HTMLSlotElement;
  }

  public get bodyFooterSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="body-footer"]') as HTMLSlotElement;
  }

  public get footerSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="footer"]') as HTMLSlotElement;
  }
}

async function createFixture(config?: {
  mode?: string;
  alignment?: string;
  size?: string;
  imageUrlLarge?: string;
  imageUrlSmall?: string;
  hasAnnouncements?: boolean;
  hasTop?: boolean;
  hasImage?: boolean;
}): Promise<LandingPageLayoutHarness> {
  const {
    mode,
    alignment,
    size,
    imageUrlLarge,
    imageUrlSmall,
    hasAnnouncements = false,
    hasTop = false,
    hasImage = false
  } = config ?? {};

  const el = await fixture<LandingPageLayoutComponent>(html`
    <forge-landing-page-layout
      mode=${mode ?? 'two-third'}
      alignment=${alignment ?? 'center'}
      size=${size ?? 'normal'}
      image-url-large=${imageUrlLarge ?? ''}
      image-url-small=${imageUrlSmall ?? ''}>
      <span slot="secondary-title">Welcome</span>
      <h1 slot="main-title">Main Title</h1>
      <button slot="action">Action</button>
      ${hasAnnouncements ? html`<div slot="announcements">Announcements</div>` : ''}
      ${hasTop ? html`<div slot="top">Top content</div>` : ''}
      <div slot="left">Left content</div>
      <div slot="center">Center content</div>
      <div slot="right">Right content</div>
      <div slot="body-footer">Body footer</div>
      <div slot="footer">Footer</div>
      ${hasImage ? html`<img src="https://example.com/img.jpg" alt="" />` : ''}
    </forge-landing-page-layout>
  `);
  return new LandingPageLayoutHarness(el);
}

describe('LandingPageLayoutComponent', () => {
  it('should contain shadow root', async () => {
    const harness = await createFixture();
    expect(harness.el.shadowRoot).to.be.ok;
  });

  it('should render root, container, header, body, and footer', async () => {
    const harness = await createFixture();
    expect(harness.rootElement).to.be.ok;
    expect(harness.containerElement).to.be.ok;
    expect(harness.headerElement).to.be.ok;
    expect(harness.bodyElement).to.be.ok;
    expect(harness.footerElement).to.be.ok;
  });

  it('should be an instance of LandingPageLayoutComponent', async () => {
    const harness = await createFixture();
    expect(harness.el).to.be.instanceOf(LandingPageLayoutComponent);
  });

  describe('default properties', () => {
    it('should have expected default state', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout></forge-landing-page-layout>`
      );
      expect(el.mode).to.equal('two-third');
      expect(el.alignment).to.equal('center');
      expect(el.size).to.equal('normal');
      expect(el.imageUrlLarge).to.equal('');
      expect(el.imageUrlSmall).to.equal('');
    });

    it('should reflect mode, alignment, and size to attributes', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout></forge-landing-page-layout>`
      );
      expect(el.getAttribute('mode')).to.equal('two-third');
      expect(el.getAttribute('alignment')).to.equal('center');
      expect(el.getAttribute('size')).to.equal('normal');
    });
  });

  describe('properties', () => {
    it('should set mode via property', async () => {
      const harness = await createFixture();
      harness.el.mode = 'equal';
      await harness.el.updateComplete;
      expect(harness.el.getAttribute('mode')).to.equal('equal');
    });

    it('should set mode via attribute', async () => {
      const harness = await createFixture();
      harness.el.setAttribute('mode', 'three');
      await harness.el.updateComplete;
      expect(harness.el.mode).to.equal('three');
    });

    it('should set alignment via property', async () => {
      const harness = await createFixture();
      harness.el.alignment = 'left';
      await harness.el.updateComplete;
      expect(harness.el.getAttribute('alignment')).to.equal('left');
    });

    it('should set alignment via attribute', async () => {
      const harness = await createFixture();
      harness.el.setAttribute('alignment', 'left');
      await harness.el.updateComplete;
      expect(harness.el.alignment).to.equal('left');
    });

    it('should set size via property', async () => {
      const harness = await createFixture();
      harness.el.size = 'wide';
      await harness.el.updateComplete;
      expect(harness.el.getAttribute('size')).to.equal('wide');
    });

    it('should set size via attribute', async () => {
      const harness = await createFixture();
      harness.el.setAttribute('size', 'wide');
      await harness.el.updateComplete;
      expect(harness.el.size).to.equal('wide');
    });

    it('should set imageUrlLarge via property', async () => {
      const harness = await createFixture();
      harness.el.imageUrlLarge = 'https://example.com/large.jpg';
      await harness.el.updateComplete;
      expect(harness.el.getAttribute('image-url-large')).to.equal('https://example.com/large.jpg');
    });

    it('should set imageUrlSmall via property', async () => {
      const harness = await createFixture();
      harness.el.imageUrlSmall = 'https://example.com/small.jpg';
      await harness.el.updateComplete;
      expect(harness.el.getAttribute('image-url-small')).to.equal('https://example.com/small.jpg');
    });

    it('should set imageUrlLarge via attribute', async () => {
      const harness = await createFixture();
      harness.el.setAttribute('image-url-large', 'https://example.com/large.jpg');
      await harness.el.updateComplete;
      expect(harness.el.imageUrlLarge).to.equal('https://example.com/large.jpg');
    });
  });

  describe('slots', () => {
    it('should have all expected slots available', async () => {
      const harness = await createFixture();
      expect(harness.imageSlot).to.be.ok;
      expect(harness.secondaryTitleSlot).to.be.ok;
      expect(harness.mainTitleSlot).to.be.ok;
      expect(harness.actionSlot).to.be.ok;
      expect(harness.announcementsSlot).to.be.ok;
      expect(harness.topSlot).to.be.ok;
      expect(harness.leftSlot).to.be.ok;
      expect(harness.centerSlot).to.be.ok;
      expect(harness.rightSlot).to.be.ok;
      expect(harness.bodyFooterSlot).to.be.ok;
      expect(harness.footerSlot).to.be.ok;
    });

    it('should project content into secondary-title slot', async () => {
      const harness = await createFixture();
      expect(harness.secondaryTitleSlot.assignedNodes().length).to.be.greaterThanOrEqual(1);
    });

    it('should project content into main-title slot', async () => {
      const harness = await createFixture();
      expect(harness.mainTitleSlot.assignedNodes().length).to.be.greaterThanOrEqual(1);
    });

    it('should project content into action slot', async () => {
      const harness = await createFixture();
      expect(harness.actionSlot.assignedNodes().length).to.be.greaterThanOrEqual(1);
    });

    it('should project content into left, center, right slots', async () => {
      const harness = await createFixture();
      expect(harness.leftSlot.assignedNodes().length).to.be.greaterThanOrEqual(1);
      expect(harness.centerSlot.assignedNodes().length).to.be.greaterThanOrEqual(1);
      expect(harness.rightSlot.assignedNodes().length).to.be.greaterThanOrEqual(1);
    });

    it('should project content into body-footer slot', async () => {
      const harness = await createFixture();
      expect(harness.bodyFooterSlot.assignedNodes().length).to.be.greaterThanOrEqual(1);
    });

    it('should project content into footer slot', async () => {
      const harness = await createFixture();
      expect(harness.footerSlot.assignedNodes().length).to.be.greaterThanOrEqual(1);
    });
  });

  describe('empty-announcements state', () => {
    it('should apply empty-announcements state by default', async () => {
      const harness = await createFixture();
      expect(harness.el.matches(':state(empty-announcements)')).to.be.true;
    });

    it('should not apply empty-announcements state when announcements slot has content', async () => {
      const harness = await createFixture({ hasAnnouncements: true });
      expect(harness.el.matches(':state(empty-announcements)')).to.be.false;
    });

    it('should toggle empty-announcements state when announcements content is added dynamically', async () => {
      const harness = await createFixture();
      expect(harness.el.matches(':state(empty-announcements)')).to.be.true;

      const announcement = document.createElement('div');
      announcement.slot = 'announcements';
      announcement.textContent = 'New announcement';
      harness.el.appendChild(announcement);

      await new Promise(resolve => setTimeout(resolve, 0));
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(empty-announcements)')).to.be.false;
    });

    it('should re-apply empty-announcements state when announcements content is removed', async () => {
      const harness = await createFixture({ hasAnnouncements: true });
      expect(harness.el.matches(':state(empty-announcements)')).to.be.false;

      const announcement = harness.el.querySelector('[slot="announcements"]');
      announcement?.remove();

      await new Promise(resolve => setTimeout(resolve, 0));
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(empty-announcements)')).to.be.true;
    });
  });

  describe('body-only state', () => {
    it('should apply body-only state by default (no top content)', async () => {
      const harness = await createFixture();
      expect(harness.el.matches(':state(body-only)')).to.be.true;
    });

    it('should not apply body-only state when top slot has content', async () => {
      const harness = await createFixture({ hasTop: true });
      expect(harness.el.matches(':state(body-only)')).to.be.false;
    });

    it('should toggle body-only state when top content is added dynamically', async () => {
      const harness = await createFixture();
      expect(harness.el.matches(':state(body-only)')).to.be.true;

      const top = document.createElement('div');
      top.slot = 'top';
      top.textContent = 'Top';
      harness.el.appendChild(top);

      await new Promise(resolve => setTimeout(resolve, 0));
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(body-only)')).to.be.false;
    });

    it('should re-apply body-only state when top content is removed', async () => {
      const harness = await createFixture({ hasTop: true });
      expect(harness.el.matches(':state(body-only)')).to.be.false;

      const top = harness.el.querySelector('[slot="top"]');
      top?.remove();

      await new Promise(resolve => setTimeout(resolve, 0));
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(body-only)')).to.be.true;
    });
  });

  describe('has-image state', () => {
    it('should not apply has-image state by default', async () => {
      const harness = await createFixture();
      expect(harness.el.matches(':state(has-image)')).to.be.false;
    });

    it('should apply has-image state when imageUrlLarge is set', async () => {
      const harness = await createFixture({ imageUrlLarge: 'https://example.com/large.jpg' });
      expect(harness.el.matches(':state(has-image)')).to.be.true;
    });

    it('should apply has-image state when imageUrlSmall is set', async () => {
      const harness = await createFixture({ imageUrlSmall: 'https://example.com/small.jpg' });
      expect(harness.el.matches(':state(has-image)')).to.be.true;
    });

    it('should apply has-image state when a slotted image is present', async () => {
      const harness = await createFixture({ hasImage: true });
      expect(harness.el.matches(':state(has-image)')).to.be.true;
    });

    it('should toggle has-image state when imageUrlLarge is added dynamically', async () => {
      const harness = await createFixture();
      expect(harness.el.matches(':state(has-image)')).to.be.false;

      harness.el.imageUrlLarge = 'https://example.com/large.jpg';
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(has-image)')).to.be.true;
    });
  });

  describe('background image', () => {
    it('should not render picture element when no image URLs are provided', async () => {
      const harness = await createFixture();
      expect(harness.pictureElement).to.be.null;
    });

    it('should render picture element with source for imageUrlLarge', async () => {
      const harness = await createFixture({ imageUrlLarge: 'https://example.com/large.jpg' });
      const picture = harness.pictureElement;
      expect(picture).to.be.ok;
      const largeSource = picture!.querySelector('source[media="(min-width: 769px)"]') as HTMLSourceElement | null;
      expect(largeSource).to.be.ok;
      expect(largeSource!.srcset).to.equal('https://example.com/large.jpg');
    });

    it('should render picture element with source for imageUrlSmall', async () => {
      const harness = await createFixture({ imageUrlSmall: 'https://example.com/small.jpg' });
      const picture = harness.pictureElement;
      expect(picture).to.be.ok;
      const smallSource = picture!.querySelector('source[media="(max-width: 768px)"]') as HTMLSourceElement | null;
      expect(smallSource).to.be.ok;
      expect(smallSource!.srcset).to.equal('https://example.com/small.jpg');
    });

    it('should render picture with both sources when both URLs are provided', async () => {
      const harness = await createFixture({
        imageUrlLarge: 'https://example.com/large.jpg',
        imageUrlSmall: 'https://example.com/small.jpg'
      });
      const picture = harness.pictureElement;
      expect(picture).to.be.ok;
      expect(picture!.querySelectorAll('source').length).to.equal(2);
      expect(picture!.querySelector('img')).to.be.ok;
    });

    it('should render picture with a fallback img element using imageUrlLarge as src', async () => {
      const harness = await createFixture({ imageUrlLarge: 'https://example.com/large.jpg' });
      const img = harness.pictureElement!.querySelector('img');
      expect(img).to.be.ok;
      expect(img!.getAttribute('src')).to.equal('https://example.com/large.jpg');
    });

    it('should fall back to imageUrlSmall as src when imageUrlLarge is not provided', async () => {
      const harness = await createFixture({ imageUrlSmall: 'https://example.com/small.jpg' });
      const img = harness.pictureElement!.querySelector('img');
      expect(img).to.be.ok;
      expect(img!.getAttribute('src')).to.equal('https://example.com/small.jpg');
    });

    it('should update picture when image URLs change', async () => {
      const harness = await createFixture();
      expect(harness.pictureElement).to.be.null;

      harness.el.imageUrlLarge = 'https://example.com/large.jpg';
      await harness.el.updateComplete;

      expect(harness.pictureElement).to.be.ok;
    });

    it('should automatically assign slot="image" to a direct child img element', async () => {
      const harness = await createFixture({ hasImage: true });
      const img = harness.el.querySelector('img');
      expect(img?.getAttribute('slot')).to.equal('image');
    });

    it('should project a slotted image into the image slot', async () => {
      const harness = await createFixture({ hasImage: true });
      const assigned = harness.imageSlot.assignedElements();
      expect(assigned.length).to.be.greaterThanOrEqual(1);
      expect(assigned[0].tagName.toLowerCase()).to.equal('img');
    });
  });

  describe('parts', () => {
    it('should expose expected parts', async () => {
      const harness = await createFixture();
      const parts = [
        'root',
        'container',
        'header',
        'header-background',
        'header-body',
        'header-body-left',
        'header-body-right',
        'header-welcome',
        'header-actions',
        'body',
        'body-top',
        'body-left',
        'body-center',
        'body-right',
        'body-footer',
        'footer'
      ];
      for (const part of parts) {
        const el = harness.el.shadowRoot!.querySelector(`[part="${part}"]`);
        expect(el, `expected part "${part}" to exist`).to.be.ok;
      }
    });
  });

  describe('accessibility', () => {
    it('should mark the background as aria-hidden', async () => {
      const harness = await createFixture();
      expect(harness.headerBackgroundElement.getAttribute('aria-hidden')).to.equal('true');
    });
  });
});

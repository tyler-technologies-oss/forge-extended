import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { LandingPageLayoutComponent } from './landing-page-layout';
import sinon from 'sinon';

import './landing-page-layout';

describe('LandingPageLayout', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should contain shadow root', async () => {
    const el = await fixture<LandingPageLayoutComponent>(html`<forge-landing-page-layout></forge-landing-page-layout>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should have expected default state', async () => {
    const el = await fixture<LandingPageLayoutComponent>(html`<forge-landing-page-layout></forge-landing-page-layout>`);

    expect(el.mode).to.equal('two-third');
    expect(el.alignment).to.equal('center');
    expect(el.size).to.equal('normal');
    expect(el.imageUrlSmall).to.equal('');
    expect(el.imageUrlLarge).to.equal('');
  });

  it('should reflect mode attribute', async () => {
    const el = await fixture<LandingPageLayoutComponent>(html`<forge-landing-page-layout></forge-landing-page-layout>`);

    el.mode = 'equal';
    await el.updateComplete;

    expect(el.getAttribute('mode')).to.equal('equal');
  });

  it('should reflect alignment attribute', async () => {
    const el = await fixture<LandingPageLayoutComponent>(html`<forge-landing-page-layout></forge-landing-page-layout>`);

    el.alignment = 'left';
    await el.updateComplete;

    expect(el.getAttribute('alignment')).to.equal('left');
  });

  it('should reflect size attribute', async () => {
    const el = await fixture<LandingPageLayoutComponent>(html`<forge-landing-page-layout></forge-landing-page-layout>`);

    el.size = 'wide';
    await el.updateComplete;

    expect(el.getAttribute('size')).to.equal('wide');
  });

  describe('mode property', () => {
    it('should apply two-third mode class', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout mode="two-third"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const body = el.shadowRoot?.querySelector('.forge-landing-page-layout__body');
      expect(body?.classList.contains('forge-landing-page-layout__body--two-third')).to.be.true;
    });

    it('should apply equal mode class', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout mode="equal"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const body = el.shadowRoot?.querySelector('.forge-landing-page-layout__body');
      expect(body?.classList.contains('forge-landing-page-layout__body--equal')).to.be.true;
    });

    it('should apply three mode class', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout mode="three"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const body = el.shadowRoot?.querySelector('.forge-landing-page-layout__body');
      expect(body?.classList.contains('forge-landing-page-layout__body--three')).to.be.true;
    });

    it('should apply single mode class', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout mode="single"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const body = el.shadowRoot?.querySelector('.forge-landing-page-layout__body');
      expect(body?.classList.contains('forge-landing-page-layout__body--single')).to.be.true;
    });

    it('should update mode dynamically', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout mode="two-third"></forge-landing-page-layout>`
      );

      el.mode = 'equal';
      await el.updateComplete;

      const body = el.shadowRoot?.querySelector('.forge-landing-page-layout__body');
      expect(body?.classList.contains('forge-landing-page-layout__body--equal')).to.be.true;
      expect(body?.classList.contains('forge-landing-page-layout__body--two-third')).to.be.false;
    });
  });

  describe('alignment property', () => {
    it('should apply center alignment class', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout alignment="center"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const container = el.shadowRoot?.querySelector('.forge-landing-page-layout');
      expect(container?.classList.contains('forge-landing-page-layout--align-center')).to.be.true;
    });

    it('should apply left alignment class', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout alignment="left"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const container = el.shadowRoot?.querySelector('.forge-landing-page-layout');
      expect(container?.classList.contains('forge-landing-page-layout--align-left')).to.be.true;
    });

    it('should update alignment dynamically', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout alignment="center"></forge-landing-page-layout>`
      );

      el.alignment = 'left';
      await el.updateComplete;

      const container = el.shadowRoot?.querySelector('.forge-landing-page-layout');
      expect(container?.classList.contains('forge-landing-page-layout--align-left')).to.be.true;
      expect(container?.classList.contains('forge-landing-page-layout--align-center')).to.be.false;
    });
  });

  describe('size property', () => {
    it('should not apply wide class for normal size', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout size="normal"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const container = el.shadowRoot?.querySelector('.forge-landing-page-layout');
      expect(container?.classList.contains('forge-landing-page-layout--wide')).to.be.false;
    });

    it('should apply wide class', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout size="wide"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const container = el.shadowRoot?.querySelector('.forge-landing-page-layout');
      expect(container?.classList.contains('forge-landing-page-layout--wide')).to.be.true;
    });

    it('should update size dynamically', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout size="normal"></forge-landing-page-layout>`
      );

      el.size = 'wide';
      await el.updateComplete;

      const container = el.shadowRoot?.querySelector('.forge-landing-page-layout');
      expect(container?.classList.contains('forge-landing-page-layout--wide')).to.be.true;
    });
  });

  describe('image sources', () => {
    it('should set small image source', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout image-url-small="small.jpg"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const picture = el.shadowRoot?.querySelector('.forge-landing-page-layout__header__background__picture');
      const source = picture?.querySelector('source[media="(max-width: 768px)"]') as HTMLSourceElement;

      expect(source).to.be.ok;
      expect(source?.srcset).to.equal('small.jpg');
    });

    it('should set large image source', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout image-url-large="large.jpg"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const picture = el.shadowRoot?.querySelector('.forge-landing-page-layout__header__background__picture');
      const source = picture?.querySelector('source[media="(min-width: 769px)"]') as HTMLSourceElement;

      expect(source).to.be.ok;
      expect(source?.srcset).to.equal('large.jpg');
    });

    it('should update image sources dynamically', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout image-url-small="small1.jpg"></forge-landing-page-layout>`
      );

      el.imageUrlSmall = 'small2.jpg';
      await el.updateComplete;

      const picture = el.shadowRoot?.querySelector('.forge-landing-page-layout__header__background__picture');
      const source = picture?.querySelector('source[media="(max-width: 768px)"]') as HTMLSourceElement;

      expect(source?.srcset).to.equal('small2.jpg');
    });

    it('should add img element when image sources are provided', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout image-url-small="small.jpg"></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const picture = el.shadowRoot?.querySelector('.forge-landing-page-layout__header__background__picture');
      const img = picture?.querySelector('img');

      expect(img).to.be.ok;
    });

    it('should clear previous sources when updating', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout
          image-url-small="small1.jpg"
          image-url-large="large1.jpg"></forge-landing-page-layout>`
      );

      el.imageUrlSmall = 'small2.jpg';
      el.imageUrlLarge = 'large2.jpg';
      await el.updateComplete;

      const picture = el.shadowRoot?.querySelector('.forge-landing-page-layout__header__background__picture');
      const sources = picture?.querySelectorAll('source');

      expect(sources?.length).to.equal(2);
    });
  });

  describe('slotted content', () => {
    it('should handle top slot content', async () => {
      const el = await fixture<LandingPageLayoutComponent>(html`
        <forge-landing-page-layout>
          <div slot="top">Top content</div>
        </forge-landing-page-layout>
      `);
      await el.updateComplete;

      const topSlot = el.shadowRoot?.querySelector('slot[name="top"]') as HTMLSlotElement;
      expect(topSlot).to.be.ok;
      expect(topSlot.assignedElements().length).to.equal(1);
    });

    it('should toggle body--only class when top slot is empty', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const body = el.shadowRoot?.querySelector('.forge-landing-page-layout__body');

      await new Promise(resolve => setTimeout(resolve, 0));

      expect(body?.classList.contains('forge-landing-page-layout__body--only')).to.be.true;
    });

    it('should toggle empty-announcements class when announcements slot is empty', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout></forge-landing-page-layout>`
      );
      await el.updateComplete;

      const headerBody = el.shadowRoot?.querySelector('.forge-landing-page-layout__header__body');

      expect(headerBody?.classList.contains('forge-landing-page-layout__header__body--empty-announcements')).to.be.true;
    });

    it('should automatically slot direct img children', async () => {
      const el = await fixture<LandingPageLayoutComponent>(html`
        <forge-landing-page-layout>
          <img src="test.jpg" />
        </forge-landing-page-layout>
      `);
      await el.updateComplete;

      const img = el.querySelector('img');
      expect(img?.getAttribute('slot')).to.equal('image');
    });
  });

  describe('slots', () => {
    it('should have all expected slots', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout></forge-landing-page-layout>`
      );

      const slots = el.shadowRoot?.querySelectorAll('slot');
      const slotNames = Array.from(slots || [])
        .map(slot => slot.getAttribute('name'))
        .filter(Boolean);

      expect(slotNames).to.include('image');
      expect(slotNames).to.include('secondary-title');
      expect(slotNames).to.include('main-title');
      expect(slotNames).to.include('action');
      expect(slotNames).to.include('announcements');
      expect(slotNames).to.include('top');
      expect(slotNames).to.include('left');
      expect(slotNames).to.include('center');
      expect(slotNames).to.include('right');
      expect(slotNames).to.include('body-footer');
      expect(slotNames).to.include('footer');
    });
  });

  describe('parts', () => {
    it('should expose expected parts', async () => {
      const el = await fixture<LandingPageLayoutComponent>(
        html`<forge-landing-page-layout></forge-landing-page-layout>`
      );

      const parts = [
        'root',
        'container',
        'header',
        'header-background-container',
        'header-background-picture',
        'header-body',
        'header-body-left',
        'header-body-right',
        'header-welcome-container',
        'header-actions-container',
        'body-container',
        'body-topcontainer',
        'body-left-container',
        'body-center-container',
        'body-right-container',
        'body-footer-container',
        'footer-container'
      ];

      parts.forEach(partName => {
        const element =
          el.shadowRoot?.querySelector(`[part="${partName}"]`) || el.shadowRoot?.querySelector(`[part*="${partName}"]`);
        expect(element, `Part "${partName}" should exist`).to.be.ok;
      });
    });
  });
});

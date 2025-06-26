import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import { ThemeToggleComponent } from './theme-toggle';

import './theme-toggle';
import sinon from 'sinon';
import { ButtonToggleComponent } from '@tylertech/forge';
import { emulateMedia, sendMouse } from '@web/test-runner-commands';

describe('ThemeToggle', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ThemeToggleComponent>(html`<forge-theme-toggle></forge-theme-toggle>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should dispatch update event when theme changes to light', async () => {
    const harness = await createFixture();
    const spy = sinon.spy();

    harness.el.addEventListener('forge-theme-toggle-update', spy);
    await harness.clickLightThemeButton();
    await nextFrame();

    expect(spy).to.have.been.called;
  });

  it('should dispatch update event when theme changes to dark', async () => {
    const harness = await createFixture();
    const spy = sinon.spy();

    harness.el.addEventListener('forge-theme-toggle-update', spy);
    await harness.clickDarkThemeButton();
    await nextFrame();

    expect(spy).to.have.been.called;
  });

  it('should dispatch update event when theme changes to system', async () => {
    const harness = await createFixture();
    const spy = sinon.spy();

    harness.el.addEventListener('forge-theme-toggle-update', spy);
    await harness.clickSystemThemeButton();
    await nextFrame();

    expect(spy).to.have.been.called;
  });

  it('should update the HTML element with the appropriate data attribute value when theme changes to light', async () => {
    const harness = await createFixture();

    await harness.clickLightThemeButton();
    await nextFrame();

    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('light');
  });

  it('should update the HTML element with the appropriate data attribute value when theme changes to dark', async () => {
    const harness = await createFixture();

    await harness.clickDarkThemeButton();
    await nextFrame();

    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('dark');
  });

  it('should set local storage when theme is set to light', async () => {
    const harness = await createFixture();

    await harness.clickLightThemeButton();
    await nextFrame();

    expect(localStorage.getItem('data-forge-theme')).to.equal('light');
  });

  it('should set local storage when theme is set to dark', async () => {
    const harness = await createFixture();

    await harness.clickDarkThemeButton();
    await nextFrame();

    expect(localStorage.getItem('data-forge-theme')).to.equal('dark');
  });

  it('should detect prefers-color-scheme=dark and set data-forge-theme attr on html element to dark', async () => {
    localStorage.clear();
    await emulateMedia({ colorScheme: 'dark' });
    expect(matchMedia('(prefers-color-scheme: dark)').matches).to.be.true;

    const harness = await createFixture();

    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('dark');
  });

  it('should detect prefers-color-scheme=light and set data-forge-theme attr on html element to light', async () => {
    localStorage.clear();
    await emulateMedia({ colorScheme: 'light' });
    expect(matchMedia('(prefers-color-scheme: light)').matches).to.be.true;

    const harness = await createFixture();

    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('light');
  });

  it('should set local storage to light when clicking the light theme button toggle', async () => {
    const harness = await createFixture();

    await harness.clickLightThemeButton();
    await nextFrame();

    expect(harness.lightButton.getAttribute('selected')).to.exist;
    expect(localStorage.getItem('data-forge-theme')).to.equal('light');
  });

  it('should set local storage to dark when clicking the dark theme button toggle', async () => {
    const harness = await createFixture();

    await harness.clickDarkThemeButton();
    await nextFrame();

    expect(harness.darkButton.getAttribute('selected')).to.exist;
    expect(localStorage.getItem('data-forge-theme')).to.equal('dark');
  });

  it('should set local storage to system when clicking the system theme button toggle', async () => {
    const harness = await createFixture();

    await harness.clickSystemThemeButton();
    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(localStorage.getItem('data-forge-theme')).to.equal('system');
  });

  it('should detect prefers-color-scheme and set dark theme when system is the local storage value', async () => {
    localStorage.setItem('data-forge-theme', 'system');
    await emulateMedia({ colorScheme: 'dark' });
    expect(matchMedia('(prefers-color-scheme: dark)').matches).to.be.true;

    const harness = await createFixture();

    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('dark');
  });

  it('should detect prefers-color-scheme and set light theme when system is the local storage value', async () => {
    localStorage.setItem('data-forge-theme', 'system');
    await emulateMedia({ colorScheme: 'light' });
    expect(matchMedia('(prefers-color-scheme: light)').matches).to.be.true;

    const harness = await createFixture();

    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('light');
  });
});

class ThemeToggleHarness {
  constructor(public el: ThemeToggleComponent) {}

  public get htmlElement(): HTMLElement {
    return document.documentElement;
  }

  public get titleSlot(): HTMLSlotElement {
    return this.el.shadowRoot?.querySelector('slot[name="title"]') as HTMLSlotElement;
  }

  public get lightButton(): ButtonToggleComponent {
    return this.el.shadowRoot!.querySelector('#light-button') as ButtonToggleComponent;
  }

  public async clickLightThemeButton(): Promise<void> {
    const { top, left, width, height } = this.lightButton.getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }

  public get darkButton(): ButtonToggleComponent {
    return this.el.shadowRoot!.querySelector('#dark-button') as ButtonToggleComponent;
  }

  public async clickDarkThemeButton(): Promise<void> {
    const { top, left, width, height } = this.darkButton.getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }

  public get systemButton(): ButtonToggleComponent {
    return this.el.shadowRoot!.querySelector('#system-button') as ButtonToggleComponent;
  }

  public async clickSystemThemeButton(): Promise<void> {
    const { top, left, width, height } = this.systemButton.getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }
}

async function createFixture(): Promise<ThemeToggleHarness> {
  const el = await fixture<ThemeToggleComponent>(html`
    <forge-theme-toggle>
      <span slot="title">Theme</span>
    </forge-theme-toggle>
  `);
  return new ThemeToggleHarness(el);
}

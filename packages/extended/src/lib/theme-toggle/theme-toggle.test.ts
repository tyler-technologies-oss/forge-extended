import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import { ThemeToggleComponent } from './theme-toggle';
import sinon from 'sinon';
import { ButtonToggleComponent } from '@tylertech/forge';
import { emulateMedia, sendMouse } from '@web/test-runner-commands';

import './theme-toggle';

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

  it('should dispatch update event with the resolved light/dark theme when theme changes to system', async () => {
    await emulateMedia({ colorScheme: 'dark' });

    const harness = await createFixture();
    const spy = sinon.spy();

    harness.el.addEventListener('forge-theme-toggle-update', spy);
    await harness.clickSystemThemeButton();
    await nextFrame();

    expect(spy).to.have.been.called;
    const event = spy.firstCall.args[0] as CustomEvent;
    expect(event.detail.theme).to.equal('system');
    expect(event.detail.resolvedTheme).to.equal('dark');
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

    expect(localStorage.getItem('.forge-theme')).to.equal('light');
  });

  it('should set local storage when theme is set to dark', async () => {
    const harness = await createFixture();

    await harness.clickDarkThemeButton();
    await nextFrame();

    expect(localStorage.getItem('.forge-theme')).to.equal('dark');
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
    expect(localStorage.getItem('.forge-theme')).to.equal('light');
  });

  it('should set local storage to dark when clicking the dark theme button toggle', async () => {
    const harness = await createFixture();

    await harness.clickDarkThemeButton();
    await nextFrame();

    expect(harness.darkButton.getAttribute('selected')).to.exist;
    expect(localStorage.getItem('.forge-theme')).to.equal('dark');
  });

  it('should set local storage to system when clicking the system theme button toggle', async () => {
    const harness = await createFixture();

    await harness.clickSystemThemeButton();
    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(localStorage.getItem('.forge-theme')).to.equal('system');
  });

  it('should detect prefers-color-scheme and set dark theme when system is the local storage value', async () => {
    localStorage.setItem('.forge-theme', 'system');
    await emulateMedia({ colorScheme: 'dark' });
    expect(matchMedia('(prefers-color-scheme: dark)').matches).to.be.true;

    const harness = await createFixture();

    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('dark');
  });

  it('should detect prefers-color-scheme and set light theme when system is the local storage value', async () => {
    localStorage.setItem('.forge-theme', 'system');
    await emulateMedia({ colorScheme: 'light' });
    expect(matchMedia('(prefers-color-scheme: light)').matches).to.be.true;

    const harness = await createFixture();

    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('light');
  });

  it('should fall back to system when local storage contains an invalid theme value', async () => {
    localStorage.setItem('.forge-theme', 'garbage');
    await emulateMedia({ colorScheme: 'dark' });

    const harness = await createFixture();
    await nextFrame();

    expect(harness.systemButton.getAttribute('selected')).to.exist;
    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('dark');
  });

  it('should update the theme automatically when the OS color scheme preference changes while theme is system', async () => {
    localStorage.setItem('.forge-theme', 'system');
    await emulateMedia({ colorScheme: 'light' });

    const harness = await createFixture();
    await nextFrame();

    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('light');

    const spy = sinon.spy();
    harness.el.addEventListener('forge-theme-toggle-update', spy);

    await emulateMedia({ colorScheme: 'dark' });
    await nextFrame();

    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('dark');
    expect(harness.systemButton.getAttribute('selected')).to.exist;

    expect(spy).to.have.been.called;
    const event = spy.firstCall.args[0] as CustomEvent;
    expect(event.detail.theme).to.equal('system');
    expect(event.detail.resolvedTheme).to.equal('dark');
  });

  it('should not react to OS color scheme preference changes when a theme has been explicitly selected', async () => {
    await emulateMedia({ colorScheme: 'light' });

    const harness = await createFixture();

    await harness.clickLightThemeButton();
    await nextFrame();

    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('light');

    await emulateMedia({ colorScheme: 'dark' });
    await nextFrame();

    expect(harness.htmlElement.getAttribute('data-forge-theme')).to.equal('light');
  });

  it('should use default labels when no label content is slotted', async () => {
    const harness = await createFixture();

    expect(harness.groupEl.getAttribute('aria-label')).to.equal('Select a theme');
    expect(harness.lightButton.textContent?.trim()).to.equal('Light');
    expect(harness.darkButton.textContent?.trim()).to.equal('Dark');
    expect(harness.systemButton.textContent?.trim()).to.equal('System');
  });

  it('should use a custom group aria label when the property is provided', async () => {
    const el = await fixture<ThemeToggleComponent>(html`
      <forge-theme-toggle group-aria-label="Choose a theme"></forge-theme-toggle>
    `);
    const harness = new ThemeToggleHarness(el);

    expect(harness.groupEl.getAttribute('aria-label')).to.equal('Choose a theme');
  });

  it('content should project into the light, dark, and system label slots', async () => {
    const el = await fixture<ThemeToggleComponent>(html`
      <forge-theme-toggle>
        <span slot="light-label">Bright</span>
        <span slot="dark-label">Night</span>
        <span slot="system-label">Auto</span>
      </forge-theme-toggle>
    `);
    const harness = new ThemeToggleHarness(el);

    expect(harness.lightLabelSlot.assignedNodes({ flatten: true })[0]?.textContent?.trim()).to.equal('Bright');
    expect(harness.darkLabelSlot.assignedNodes({ flatten: true })[0]?.textContent?.trim()).to.equal('Night');
    expect(harness.systemLabelSlot.assignedNodes({ flatten: true })[0]?.textContent?.trim()).to.equal('Auto');
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

  public get groupEl(): HTMLElement {
    return this.el.shadowRoot!.querySelector('forge-button-toggle-group') as HTMLElement;
  }

  public get lightLabelSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="light-label"]') as HTMLSlotElement;
  }

  public get darkLabelSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="dark-label"]') as HTMLSlotElement;
  }

  public get systemLabelSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="system-label"]') as HTMLSlotElement;
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

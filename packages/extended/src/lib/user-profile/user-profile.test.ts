import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import { UserProfileComponent } from './user-profile';

import './user-profile';
import './profile-link/profile-link';
import { AvatarComponent, ButtonComponent, PopoverComponent } from '@tylertech/forge';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import sinon from 'sinon';

describe('UserProfile', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<UserProfileComponent>(html`<forge-user-profile></forge-user-profile>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should contain a sign out button when sign out button text is passed into the slot', async () => {
    const harness = await createFixture({ signOutButtonText: 'Sign out' });
    const signOutButton = harness.signOutButton;

    expect(signOutButton).to.exist;
  });

  it('should not contain a sign out button when no sign out text is passed into the slot', async () => {
    const harness = await createFixture({ signOutButtonText: '' });
    const signOutButton = harness.signOutButton;

    expect(signOutButton).to.not.exist;
  });

  it('content should project into the sign out button slot', async () => {
    const harness = await createFixture({ signOutButtonText: 'Sign out' });
    expect(harness.signOutButtonSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the link slot', async () => {
    const harness = await createFixture({
      profileLinkTitle: 'Profile Link',
      profileLinkIcon: 'settings'
    });
    const linkSlot = harness.el.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="link"]');
    expect(linkSlot?.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content in the full name div should be the same as the full-name attribute', async () => {
    const harness = await createFixture({ fullName: 'Harley Andrews' });
    expect(harness.fullNameEl.textContent).to.equal('Harley Andrews');
  });

  it('content in the email div should be the same as the email attribute', async () => {
    const harness = await createFixture({ email: 'harley.andrews@doggos.com' });
    expect(harness.emailEl.textContent).to.equal('harley.andrews@doggos.com');
  });

  it('theme toggle should be present when the attribute is present', async () => {
    const harness = await createFixture({ themeToggle: true });
    const themeToggleContainer = harness.themeToggleContainerEl;

    expect(themeToggleContainer).to.exist;
  });

  it('theme toggle should be removed when the attribute is not present', async () => {
    const harness = await createFixture();
    const themeToggleContainer = harness.themeToggleContainerEl;
    harness.el.removeAttribute('theme-toggle');

    expect(themeToggleContainer).to.not.exist;
  });

  it('popover should appear when the avatar button is clicked', async () => {
    const harness = await createFixture();

    await harness.clickAvatarButton();
    await nextFrame();

    expect(harness?.el).to.exist;
  });

  it('should dispatch the forge-user-profile-sign-out event when the sign out button is clicked', async () => {
    const harness = await createFixture({ signOutButtonText: 'Sign out' });
    const spy = sinon.spy();

    await harness.clickAvatarButton();
    await nextFrame();

    harness.el.addEventListener('forge-user-profile-sign-out', spy);

    await harness.clickSignOutButton();
    await nextFrame();

    expect(spy).to.have.been.called;
  });

  it('should close the popover when the escape key is pressed', async () => {
    const harness = await createFixture();

    await harness.clickAvatarButton();
    await harness.exitAnimation();

    expect(harness.popover.open).to.be.true;

    await harness.pressEscapeKey();
    await harness.exitAnimation();

    expect(harness.popover.open).to.be.false;
  });
});

class UserProfileHarness {
  constructor(public el: UserProfileComponent) {}

  public get htmlElement(): HTMLElement {
    return document.documentElement;
  }

  public get avatarButton(): AvatarComponent {
    return this.el.shadowRoot!.querySelector('#popover-trigger') as AvatarComponent;
  }

  public get popover(): PopoverComponent {
    return this.el.shadowRoot!.querySelector('#user-profile-popover') as PopoverComponent;
  }

  public get fullNameEl(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.full-name') as HTMLElement;
  }

  public get emailEl(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.email') as HTMLElement;
  }

  public get themeToggleContainerEl(): HTMLElement {
    return this.el.shadowRoot!.querySelector('.theme-toggle-container') as HTMLElement;
  }

  public get signOutButtonSlot(): HTMLSlotElement {
    return this.el.shadowRoot?.querySelector('slot[name="sign-out-button-text"]') as HTMLSlotElement;
  }

  public get signOutButton(): ButtonComponent {
    return this.el.shadowRoot!.querySelector('#sign-out-button') as ButtonComponent;
  }

  public async pressEscapeKey(): Promise<void> {
    await sendKeys({ press: 'Escape' });
  }

  public async clickSignOutButton(): Promise<void> {
    const { top, left, width, height } = this.signOutButton.getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }

  public exitAnimation(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 200));
  }

  public async clickAvatarButton(): Promise<void> {
    const { top, left, width, height } = this.avatarButton.getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }
}

interface UserProfileFixtureConfig {
  buttonLabel?: string;
  themeToggle?: boolean;
  fullName?: string;
  email?: string;
  profileLinkTitle?: string;
  profileLinkIcon?: string;
  signOutButtonText?: string;
}

async function createFixture({
  buttonLabel = 'Sign out',
  themeToggle = false,
  fullName = 'Harley Andrews',
  email = 'harley.andrews@doggos.com',
  profileLinkTitle = 'Profile Link',
  profileLinkIcon = 'settings',
  signOutButtonText = 'Sign out'
}: UserProfileFixtureConfig = {}): Promise<UserProfileHarness> {
  const el = await fixture<UserProfileComponent>(html`
    <forge-user-profile .buttonLabel=${buttonLabel} .themeToggle=${themeToggle} .fullName=${fullName} .email=${email}>
      ${profileLinkTitle
        ? html`<forge-profile-link slot="link">
            <forge-icon slot="icon" name=${profileLinkIcon} external></forge-icon>
            <a href="http://www.google.com" target="_blank">${profileLinkTitle}</a>
          </forge-profile-link>`
        : ''}
      ${signOutButtonText ? html`<div slot="sign-out-button-text">${signOutButtonText}</div>` : ''}
    </forge-user-profile>
  `);

  return new UserProfileHarness(el);
}

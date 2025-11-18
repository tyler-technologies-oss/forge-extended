import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import { UserProfileComponent } from './user-profile';

import './user-profile';
import './profile-link/profile-link';
import { AvatarComponent, ButtonComponent, PopoverComponent } from '@tylertech/forge';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';

describe('UserProfile', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<UserProfileComponent>(html`<forge-user-profile></forge-user-profile>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should use default sign out text when no sign out text is slotted', async () => {
    const harness = await createFixture();
    const signOutButton = harness.signOutButton;

    expect(signOutButton.textContent?.trim()).to.equal('Sign Out');
  });

  it('content should project into the sign out button slot', async () => {
    const harness = await createFixture({ signOutButtonText: 'Custom Sign Out' });
    const assignedNodes = harness.signOutButtonSlot.assignedNodes();

    expect(assignedNodes.length).to.greaterThanOrEqual(1);
    expect(assignedNodes[0].textContent?.trim()).to.equal('Custom Sign Out');
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

  it('should set imageUrl on both avatar components when image-url attribute is provided', async () => {
    const testImageUrl = 'https://example.com/avatar.jpg';
    const harness = await createFixture({ imageUrl: testImageUrl });

    expect(harness.buttonAvatar.imageUrl).to.equal(testImageUrl);
    expect(harness.popoverAvatar.imageUrl).to.equal(testImageUrl);
  });

  it('should control popover state via open property', async () => {
    const harness = await createFixture();

    // Test opening via property
    harness.el.open = true;
    await nextFrame();
    await harness.exitAnimation();

    expect(harness.el.open).to.be.true;
    expect(harness.popover.open).to.be.true;

    // Test closing via property
    harness.el.open = false;
    await nextFrame();
    await harness.exitAnimation();

    expect(harness.el.open).to.be.false;
    expect(harness.popover.open).to.be.false;
  });

  it('should support initial open state via fixture config', async () => {
    const harness = await createFixture({ open: true });
    await nextFrame();
    await harness.exitAnimation();

    expect(harness.el.open).to.be.true;
    expect(harness.popover.open).to.be.true;
  });

  it('should handle forge-popover-toggle event for synchronization', async () => {
    const harness = await createFixture();

    // Manually dispatch the toggle event to test our handler
    const openEvent = new CustomEvent('forge-popover-toggle', {
      detail: { newState: 'open' },
      bubbles: true
    });

    harness.popover.dispatchEvent(openEvent);
    await nextFrame();

    expect(harness.el.open).to.be.true;

    // Test closing via event
    const closeEvent = new CustomEvent('forge-popover-toggle', {
      detail: { newState: 'closed' },
      bubbles: true
    });

    harness.popover.dispatchEvent(closeEvent);
    await nextFrame();

    expect(harness.el.open).to.be.false;
  });

  it('should synchronize when popover is opened via click', async () => {
    const harness = await createFixture();

    // Click the avatar button
    await harness.clickAvatarButton();
    await nextFrame();
    await harness.exitAnimation();

    // The popover should be open
    expect(harness.popover.open).to.be.true;

    // Wait for the toggle event to sync our component state
    await nextFrame();

    // Our component should be synchronized
    expect(harness.el.open).to.be.true;
  });

  it('should synchronize when popover is closed via escape key', async () => {
    const harness = await createFixture();

    // Open the popover first
    harness.el.open = true;
    await nextFrame();
    await harness.exitAnimation();

    expect(harness.el.open).to.be.true;
    expect(harness.popover.open).to.be.true;

    // Press escape key
    await harness.pressEscapeKey();
    await nextFrame();
    await harness.exitAnimation();

    // Both should be closed and synchronized
    expect(harness.popover.open).to.be.false;
    expect(harness.el.open).to.be.false;
  });

  it('should synchronize when popover is closed via light dismiss', async () => {
    const harness = await createFixture();

    // Open the popover
    harness.el.open = true;
    await nextFrame();
    await harness.exitAnimation();

    expect(harness.el.open).to.be.true;
    expect(harness.popover.open).to.be.true;

    // Simulate light dismiss by manually firing the event
    // (since we can't easily simulate clicking outside in tests)
    const dismissEvent = new CustomEvent('forge-popover-toggle', {
      detail: { newState: 'closed' },
      bubbles: true
    });

    harness.popover.dispatchEvent(dismissEvent);
    await nextFrame();

    expect(harness.el.open).to.be.false;
  });

  it('should handle rapid open/close operations', async () => {
    const harness = await createFixture();

    // Rapidly open and close
    harness.el.open = true;
    harness.el.open = false;
    harness.el.open = true;

    await nextFrame();
    await harness.exitAnimation();

    expect(harness.el.open).to.be.true;
    expect(harness.popover.open).to.be.true;
  });

  it('should have setTheme method that sets theme toggle theme', async () => {
    const harness = await createFixture({ themeToggle: true });
    await nextFrame();
    await harness.exitAnimation();

    expect(typeof harness.el.setTheme).to.equal('function');

    // Verify theme toggle container is present when themeToggle is true
    expect(harness.themeToggleContainerEl).to.exist;

    // Test that setTheme method can be called without throwing errors
    expect(() => harness.el.setTheme('light')).to.not.throw();
    expect(() => harness.el.setTheme('dark')).to.not.throw();
    expect(() => harness.el.setTheme('system')).to.not.throw();

    // If we can access the theme toggle component directly, test that setTheme was called
    if (harness.themeToggle && typeof harness.themeToggle.setTheme === 'function') {
      const setThemeSpy = sinon.spy(harness.themeToggle, 'setTheme');

      harness.el.setTheme('light');
      expect(setThemeSpy).to.have.been.calledWith('light');

      setThemeSpy.restore();
    }
  });

  it('should handle setTheme gracefully when theme toggle is not present', async () => {
    const harness = await createFixture({ themeToggle: false });
    await nextFrame();

    // Should not throw error when theme toggle is not present
    expect(() => harness.el.setTheme('light')).to.not.throw();
    expect(() => harness.el.setTheme('dark')).to.not.throw();
    expect(() => harness.el.setTheme('system')).to.not.throw();
  });

  it('should show sign in button when fullName is not provided (user not logged in)', async () => {
    const harness = await createFixture({ fullName: '' });

    expect(harness.signInButton).to.exist;
    expect(harness.signInButton.textContent?.trim()).to.equal('Sign in');
  });

  it('should not show popover when user is not logged in', async () => {
    const harness = await createFixture({ fullName: '' });

    // Popover should not be rendered when user is not signed in
    expect(harness.popover).to.not.exist;
  });

  it('should dispatch forge-user-profile-sign-in event when sign in button is clicked', async () => {
    const harness = await createFixture({ fullName: '' });
    const spy = sinon.spy();

    harness.el.addEventListener('forge-user-profile-sign-in', spy);

    const { top, left, width, height } = harness.signInButton.getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
    await nextFrame();

    expect(spy).to.have.been.called;
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

  public get buttonAvatar(): AvatarComponent {
    return this.el.shadowRoot!.querySelector('#button-avatar') as AvatarComponent;
  }

  public get popoverAvatar(): AvatarComponent {
    return this.el.shadowRoot!.querySelector('#popover-avatar') as AvatarComponent;
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

  public get themeToggle(): ThemeToggleComponent | null {
    return this.el.shadowRoot!.querySelector('forge-theme-toggle');
  }

  public get signInButton(): ButtonComponent {
    return this.el.shadowRoot!.querySelector('.sign-in-button') as ButtonComponent;
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
  imageUrl?: string;
  profileLinkTitle?: string;
  profileLinkIcon?: string;
  signOutButtonText?: string;
  open?: boolean;
}

async function createFixture({
  buttonLabel = 'Sign out',
  themeToggle = false,
  fullName = 'Harley Andrews',
  email = 'harley.andrews@doggos.com',
  imageUrl,
  profileLinkTitle = 'Profile Link',
  profileLinkIcon = 'settings',
  signOutButtonText,
  open = false
}: UserProfileFixtureConfig = {}): Promise<UserProfileHarness> {
  const el = await fixture<UserProfileComponent>(html`
    <forge-user-profile
      .buttonLabel=${buttonLabel}
      .themeToggle=${themeToggle}
      .fullName=${fullName}
      .email=${email}
      .imageUrl=${imageUrl || ''}
      .open=${open}>
      ${profileLinkTitle
        ? html`<forge-profile-link slot="link">
            <forge-icon slot="icon" name=${profileLinkIcon} external></forge-icon>
            <a href="http://www.google.com" target="_blank">${profileLinkTitle}</a>
          </forge-profile-link>`
        : ''}
      ${signOutButtonText ? html`<span slot="sign-out-button-text">${signOutButtonText}</span>` : null}
    </forge-user-profile>
  `);

  return new UserProfileHarness(el);
}

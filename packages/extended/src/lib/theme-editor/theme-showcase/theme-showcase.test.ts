import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import type {
  IButtonComponent,
  ICheckboxComponent,
  IChipComponent,
  IChipSetComponent,
  ICircularProgressComponent,
  IInlineMessageComponent,
  ILinearProgressComponent,
  IRadioComponent,
  ISelectComponent,
  ISwitchComponent,
  ITextFieldComponent
} from '@tylertech/forge';

import { THEME_SHOWCASE_SECTIONS, ThemeShowcaseComponent } from './theme-showcase';

describe('ThemeShowcase', () => {
  it('should contain shadow root', async () => {
    const el = await createFixture();

    expect(el.shadowRoot).to.be.ok;
  });

  it('should take no theme of its own', async () => {
    const el = await createFixture();

    // The whole contract: the showcase is wrapped by something that declares the
    // theme, so anything theme-shaped on the element itself is a regression.
    expect(Object.keys(el)).to.not.include('theme');
    expect(el.getAttribute('style')).to.be.null;
  });

  //
  // Structure and accessibility
  //

  describe('structure', () => {
    it('should render a section for every declared section', async () => {
      const root = await createRoot();

      expect(root.querySelectorAll('.section')).to.have.lengthOf(Object.keys(THEME_SHOWCASE_SECTIONS).length);
    });

    it('should render each section with a heading and a caption', async () => {
      const root = await createRoot();

      for (const section of Object.values(THEME_SHOWCASE_SECTIONS)) {
        const el = root.querySelector(`[data-section="${section.id}"]`);
        expect(el, section.id).to.be.ok;
        expect(el!.querySelector('.section-title')!.textContent).to.equal(section.title);
        expect(el!.querySelector('.section-caption')!.textContent).to.equal(section.caption);
      }
    });

    it('should label every section with its own heading element', async () => {
      const root = await createRoot();

      for (const section of root.querySelectorAll('.section')) {
        const headingId = section.getAttribute('aria-labelledby');
        const heading = section.querySelector('.section-title')!;
        expect(heading.tagName).to.equal('H2');
        expect(headingId).to.equal(heading.id);
      }
    });

    it('should not render duplicate ids', async () => {
      const root = await createRoot();
      const ids = [...root.querySelectorAll('[id]')].map(el => el.id);

      expect(ids).to.have.lengthOf(new Set(ids).size);
    });

    it('should only take colors from Forge theme tokens', async () => {
      // A hardcoded color would not respond to the theme, which is the one defect
      // this component cannot tolerate. Forge tokens always render as
      // `var(--forge-*, <fallback>)`, so a color literal without a Forge variable
      // alongside it in the same declaration is an authored color.
      const declarations = ThemeShowcaseComponent.styles.cssText.match(/[a-z-]+:[^;{}]+/g) ?? [];
      const colored = declarations.filter(declaration => /#[0-9a-f]{3,8}\b|rgba?\(/i.test(declaration));

      expect(colored).to.not.be.empty;
      for (const declaration of colored) {
        expect(declaration, declaration).to.contain('var(--forge-');
      }
    });
  });

  //
  // Buttons
  //

  describe('buttons', () => {
    it('should render the button variants a theme changes', async () => {
      const root = await createRoot();
      const variants = [...root.querySelectorAll<IButtonComponent>('forge-button')].map(button =>
        button.getAttribute('variant')
      );

      expect(variants).to.include.members(['raised', 'outlined', 'text', 'link']);
    });

    it('should render a button with a leading icon', async () => {
      const root = await createRoot();
      const icon = root.querySelector('#showcase-button-icon forge-icon');

      expect(icon!.getAttribute('slot')).to.equal('start');
      expect(icon!.getAttribute('name')).to.equal('download');
    });

    it('should disable the disabled button', async () => {
      const root = await createRoot();

      expect(root.querySelector<IButtonComponent>('#showcase-button-disabled')!.disabled).to.be.true;
    });
  });

  //
  // Form fields
  //

  describe('form fields', () => {
    it('should render a labelled field for every input', async () => {
      const root = await createRoot();

      for (const input of root.querySelectorAll('input')) {
        const label = root.querySelector(`label[for="${input.id}"]`);
        expect(label, input.id).to.be.ok;
        expect(label!.getAttribute('slot')).to.equal('label');
      }
    });

    it('should mark the invalid field invalid', async () => {
      const root = await createRoot();

      expect(root.querySelector<ITextFieldComponent>('#showcase-field-invalid')!.invalid).to.be.true;
    });

    it('should associate the error text with the invalid input', async () => {
      const root = await createRoot();
      const input = root.querySelector<HTMLInputElement>('#showcase-email')!;
      const supportText = root.querySelector('#showcase-email-error')!;

      expect(input.getAttribute('aria-describedby')).to.equal(supportText.id);
      expect(input.getAttribute('aria-invalid')).to.equal('true');
      expect(supportText.getAttribute('slot')).to.equal('support-text');
      expect(supportText.textContent).to.not.be.empty;
    });

    it('should disable the disabled field and its input', async () => {
      const root = await createRoot();

      expect(root.querySelector<ITextFieldComponent>('#showcase-field-disabled')!.disabled).to.be.true;
      expect(root.querySelector<HTMLInputElement>('#showcase-case')!.disabled).to.be.true;
    });

    it('should require the required field and its input', async () => {
      const root = await createRoot();

      expect(root.querySelector<ITextFieldComponent>('#showcase-field-required')!.required).to.be.true;
      expect(root.querySelector<HTMLInputElement>('#showcase-parcel')!.required).to.be.true;
    });
  });

  //
  // Selection controls
  //

  describe('selection controls', () => {
    it('should render every checkbox state', async () => {
      const root = await createRoot();
      const unchecked = root.querySelector<ICheckboxComponent>('#showcase-checkbox-unchecked')!;
      const checked = root.querySelector<ICheckboxComponent>('#showcase-checkbox-checked')!;
      const indeterminate = root.querySelector<ICheckboxComponent>('#showcase-checkbox-indeterminate')!;
      const disabled = root.querySelector<ICheckboxComponent>('#showcase-checkbox-disabled')!;

      expect(unchecked.checked).to.be.false;
      expect(checked.checked).to.be.true;
      expect(indeterminate.indeterminate).to.be.true;
      expect(disabled.disabled).to.be.true;
    });

    it('should label every checkbox', async () => {
      const root = await createRoot();

      for (const checkbox of root.querySelectorAll('forge-checkbox')) {
        expect(checkbox.textContent!.trim(), checkbox.id).to.not.be.empty;
      }
    });

    it('should render a radio group with a legend and a selected option', async () => {
      const root = await createRoot();
      const group = root.querySelector('#showcase-radio-group')!;
      const radios = [...group.querySelectorAll<IRadioComponent>('forge-radio')];

      expect(group.querySelector('forge-label')!.hasAttribute('legend')).to.be.true;
      expect(radios).to.have.lengthOf(3);
      expect(radios.filter(radio => radio.checked)).to.have.lengthOf(1);
      expect(radios.filter(radio => radio.disabled)).to.have.lengthOf(1);
      expect(new Set(radios.map(radio => radio.name)).size).to.equal(1);
    });

    it('should render a checked switch', async () => {
      const root = await createRoot();

      expect(root.querySelector<ISwitchComponent>('#showcase-switch')!.checked).to.be.true;
    });
  });

  //
  // Select and chips
  //

  describe('select and chips', () => {
    it('should render a labelled select with options', async () => {
      const root = await createRoot();
      const select = root.querySelector<ISelectComponent>('#showcase-select')!;

      expect(select.label).to.equal('Department');
      expect(select.value).to.equal('permits');
      expect(root.querySelectorAll('forge-option')).to.have.lengthOf(3);
    });

    it('should render a selected chip', async () => {
      const root = await createRoot();
      const chip = root.querySelector<IChipComponent>('#showcase-chip-selected')!;

      expect(chip.selected).to.be.true;
      expect(chip.type).to.equal('filter');
    });

    it('should render a removable chip', async () => {
      const root = await createRoot();
      const chip = root.querySelector<IChipComponent>('#showcase-chip-removable')!;

      expect(chip.type).to.equal('input');
      expect(chip.removeButtonLabel).to.not.be.empty;
    });

    it('should render a disabled chip', async () => {
      const root = await createRoot();

      expect(root.querySelector<IChipComponent>('#showcase-chip-disabled')!.disabled).to.be.true;
    });

    it('should declare type and disabled on the chip set rather than the chip', async () => {
      const root = await createRoot();

      // A chip inherits type, disabled and dense from its set on connect, so a
      // set that does not declare them hands its chips the defaults instead.
      for (const set of root.querySelectorAll<IChipSetComponent>('forge-chip-set')) {
        expect(set.getAttribute('type'), set.id).to.not.be.null;
      }
      expect(root.querySelector<IChipSetComponent>('#showcase-chip-set-disabled')!.disabled).to.be.true;
    });

    it('should label every chip set', async () => {
      const root = await createRoot();

      for (const set of root.querySelectorAll('forge-chip-set')) {
        expect(set.getAttribute('aria-label'), set.id).to.not.be.empty;
      }
    });
  });

  //
  // Status messaging
  //

  describe('status messaging', () => {
    it('should render a message for every status theme', async () => {
      const root = await createRoot();
      const messages = [...root.querySelectorAll<IInlineMessageComponent>('.status')];

      expect(messages.map(message => message.theme)).to.deep.equal(['info', 'success', 'warning', 'error']);
    });

    it('should give every message an icon and a title', async () => {
      const root = await createRoot();

      for (const message of root.querySelectorAll<IInlineMessageComponent>('.status')) {
        const icon = message.querySelector('forge-icon[slot="icon"]');
        expect(icon, message.theme).to.be.ok;
        expect(icon!.getAttribute('name')).to.not.be.empty;
        expect(message.querySelector('[slot="title"]')!.textContent).to.not.be.empty;
      }
    });
  });

  //
  // Surfaces
  //

  describe('surfaces', () => {
    it('should render the surface ramp', async () => {
      const root = await createRoot();
      const surfaces = [...root.querySelectorAll('.surface')].map(surface => surface.getAttribute('data-surface'));

      expect(surfaces).to.deep.equal([
        'surface',
        'surface-container-minimum',
        'surface-container-low',
        'surface-container-medium',
        'surface-container-high'
      ]);
    });

    it('should nest each surface level inside the one above it', async () => {
      const root = await createRoot();
      const surfaces = [...root.querySelectorAll('.surface')];

      for (let i = 1; i < surfaces.length; i++) {
        expect(surfaces[i].parentElement, surfaces[i].getAttribute('data-surface')!).to.equal(surfaces[i - 1]);
      }
    });

    it('should name the token on every surface level', async () => {
      const root = await createRoot();

      for (const surface of root.querySelectorAll('.surface')) {
        expect(surface.querySelector('.surface-token')!.textContent).to.equal(surface.getAttribute('data-surface'));
      }
    });
  });

  //
  // Typography
  //

  describe('typography', () => {
    it('should render a line per text emphasis level', async () => {
      const root = await createRoot();
      const samples = [...root.querySelectorAll('.text-sample')];

      expect(samples.map(sample => sample.getAttribute('data-emphasis'))).to.deep.equal(['high', 'medium', 'low']);
      for (const sample of samples) {
        expect(sample.querySelector('.text-sample-copy')!.textContent).to.not.be.empty;
      }
    });

    it('should name the token on every text sample', async () => {
      const root = await createRoot();
      const tokens = [...root.querySelectorAll('.text-sample-token')].map(token => token.textContent);

      expect(tokens).to.deep.equal(['text-high', 'text-medium', 'text-low']);
    });
  });

  //
  // Progress
  //

  describe('progress', () => {
    it('should render a determinate linear progress with an accessible name', async () => {
      const root = await createRoot();
      const progress = root.querySelector<ILinearProgressComponent>('#showcase-linear-progress')!;

      expect(progress.determinate).to.be.true;
      expect(progress.progress).to.equal(0.6);
      expect(root.querySelector(`#${progress.getAttribute('aria-labelledby')}`)).to.be.ok;
    });

    it('should render a determinate circular progress with a track', async () => {
      const root = await createRoot();
      const progress = root.querySelector<ICircularProgressComponent>('#showcase-circular-progress')!;

      expect(progress.determinate).to.be.true;
      expect(progress.progress).to.equal(0.75);
      expect(progress.track).to.be.true;
      expect(progress.getAttribute('aria-label')).to.not.be.empty;
    });
  });
});

async function createFixture(): Promise<ThemeShowcaseComponent> {
  return await fixture<ThemeShowcaseComponent>(html`<forge-theme-showcase></forge-theme-showcase>`);
}

async function createRoot(): Promise<ShadowRoot> {
  const el = await createFixture();
  return el.shadowRoot!;
}

import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import sinon from 'sinon';
import { ThemeEditorComponent } from './theme-editor';
import { createForgeTheme, exportForgeThemeJson } from './theme-model';
import { FORGE_THEME_DARK_TOKENS, FORGE_THEME_LIGHT_TOKENS, FORGE_THEME_TOKEN_GROUPS } from './theme-tokens';
import { activeForgeThemeVariant, type ForgeThemeVariant } from './theme-model';

import './theme-editor';

describe('ThemeEditor', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should contain shadow root', async () => {
    const el = await fixture<ThemeEditorComponent>(html`<forge-theme-editor></forge-theme-editor>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should start with an untouched theme', async () => {
    const harness = await createFixture();

    expect(harness.el.getTheme()).to.deep.equal(createForgeTheme());
  });

  it('should render the title slot content', async () => {
    const harness = await createFixture();

    expect(harness.titleSlot.assignedNodes({ flatten: true })[0].textContent).to.equal('Brand theme');
  });

  it('should render a default title when the slot is empty', async () => {
    const el = await fixture<ThemeEditorComponent>(html`<forge-theme-editor></forge-theme-editor>`);

    expect(el.shadowRoot!.querySelector('.title')!.textContent).to.include('Theme editor');
  });

  //
  // Token editing
  //

  describe('token editing', () => {
    it('should render a group panel for every token group', async () => {
      const harness = await createTokensFixture();

      expect(harness.groupPanels).to.have.lengthOf(FORGE_THEME_TOKEN_GROUPS.length);
    });

    it('should render a row per token in an open group', async () => {
      const harness = await createTokensFixture();

      expect(harness.rows).to.have.lengthOf(FORGE_THEME_TOKEN_GROUPS[0].tokens.length);
    });

    it('should show the Forge default as the value of an unedited token', async () => {
      const harness = await createTokensFixture();

      expect(harness.tokenInput('brand').value).to.equal(FORGE_THEME_LIGHT_TOKENS.brand);
    });

    it('should set a token from the text field', async () => {
      const harness = await createTokensFixture();

      await harness.setTokenText('brand', '#ff0000');

      expect(variantOf(harness.el).tokens.brand).to.equal('#ff0000');
    });

    it('should set a token from the color swatch', async () => {
      const harness = await createTokensFixture();

      await harness.setTokenSwatch('brand', '#00ff00');

      expect(variantOf(harness.el).tokens.brand).to.equal('#00ff00');
    });

    it('should dispatch a change event naming the edited token', async () => {
      const harness = await createTokensFixture();
      const spy = sinon.spy();
      harness.el.addEventListener('forge-theme-editor-change', spy);

      await harness.setTokenText('brand', '#ff0000');

      expect(spy.calledOnce).to.be.true;
      expect(spy.firstCall.args[0].detail.token).to.equal('brand');
      expect(activeForgeThemeVariant(spy.firstCall.args[0].detail.theme).tokens.brand).to.equal('#ff0000');
    });

    it('should clear a token when the text field is emptied', async () => {
      const harness = await createTokensFixture();

      await harness.setTokenText('brand', '#ff0000');
      await harness.setTokenText('brand', '   ');

      expect(variantOf(harness.el).tokens).to.not.have.property('brand');
    });

    it('should flag a token whose value is not a color', async () => {
      const harness = await createTokensFixture();

      await harness.setTokenText('brand', 'not-a-color');

      expect(harness.tokenField('brand').hasAttribute('invalid')).to.be.true;
    });

    it('should disable the revert button for an unedited token', async () => {
      const harness = await createTokensFixture();

      expect(harness.revertButton('brand').hasAttribute('disabled')).to.be.true;
    });

    it('should revert a single token', async () => {
      const harness = await createTokensFixture();
      await harness.setTokenText('brand', '#ff0000');

      harness.revertButton('brand').click();
      await harness.el.updateComplete;

      expect(variantOf(harness.el).tokens).to.not.have.property('brand');
    });

    it('should ignore a revert for a token that was never edited', async () => {
      const harness = await createTokensFixture();
      const spy = sinon.spy();
      harness.el.addEventListener('forge-theme-editor-change', spy);

      harness.el.resetToken('brand');

      expect(spy.called).to.be.false;
    });

    it('should revert every token at once', async () => {
      const harness = await createTokensFixture();
      await harness.setTokenText('brand', '#ff0000');
      await harness.setTokenText('on-brand', '#000000');

      harness.resetAllButton.click();
      await harness.el.updateComplete;

      expect(variantOf(harness.el).tokens).to.deep.equal({});
      expect(harness.resetAllButton.hasAttribute('disabled')).to.be.true;
    });

    it('should render a placeholder instead of a swatch for the shadow token', async () => {
      const harness = await createTokensFixture();
      await harness.openGroup('surface');

      expect(harness.row('surface-bright-shadow').querySelector('.swatch')).to.be.null;
      expect(harness.row('surface-bright-shadow').querySelector('.swatch-placeholder')).to.be.ok;
    });

    it('should show dark defaults when the dark variant is being authored', async () => {
      const harness = await createTokensFixture();

      // Polarity, not the emit mode, decides which stock set shows through.
      await harness.selectView(VIEW.palette);
      await harness.setPolarity('dark');
      await harness.selectView(VIEW.tokens);

      expect(harness.el.getTheme().polarity).to.equal('dark');
      expect(harness.tokenInput('brand').value).to.equal(FORGE_THEME_DARK_TOKENS.brand);
    });

    it('should collapse a group when it is toggled shut', async () => {
      const harness = await createTokensFixture();

      await harness.toggleGroup('brand', false);

      expect(harness.rows).to.have.lengthOf(0);
    });
  });

  //
  // Filtering
  //

  describe('filtering', () => {
    it('should narrow the groups to those with a matching token', async () => {
      const harness = await createTokensFixture();

      await harness.filter('outline');

      expect(harness.groupPanels.map(panel => panel.dataset.group)).to.deep.equal(['outline']);
    });

    it('should keep the whole group when the group label matches', async () => {
      const harness = await createTokensFixture();

      await harness.filter('Success');

      expect(harness.rows).to.have.lengthOf(10);
    });

    it('should expand matching groups so hits are never hidden', async () => {
      const harness = await createTokensFixture();

      await harness.filter('warning-container-high');

      expect(harness.rows.map(row => row.dataset.token)).to.deep.equal([
        'warning-container-high',
        'on-warning-container-high'
      ]);
    });

    it('should report when nothing matches', async () => {
      const harness = await createTokensFixture();

      await harness.filter('zzzzzz');

      expect(harness.groupPanels).to.have.lengthOf(0);
      expect(harness.el.shadowRoot!.querySelector('.empty')!.textContent).to.include('zzzzzz');
    });

    it('should hide the global knobs when the filter does not match them', async () => {
      const harness = await createTokensFixture();

      await harness.filter('outline');

      expect(harness.knobsPanel).to.be.null;
    });

    it('should keep the global knobs when the filter matches them', async () => {
      const harness = await createTokensFixture();

      await harness.filter('spacing');

      expect(harness.knobsPanel).to.be.ok;
    });
  });

  //
  // Global knobs
  //

  describe('global knobs', () => {
    it('should set a numeric knob', async () => {
      const harness = await createTokensFixture();
      await harness.openGroup('knobs');

      await harness.setKnob('shapeFactor', '2');

      expect(harness.el.getTheme().knobs.shapeFactor).to.equal(2);
    });

    it('should clear a numeric knob that is not a number', async () => {
      const harness = await createTokensFixture();
      await harness.openGroup('knobs');
      await harness.setKnob('spacingScale', '1.5');

      await harness.setKnob('spacingScale', '');

      expect(harness.el.getTheme().knobs.spacingScale).to.be.null;
    });

    it('should set a text knob', async () => {
      const harness = await createTokensFixture();
      await harness.openGroup('knobs');

      await harness.setKnob('fontFamily', 'Inter');

      expect(harness.el.getTheme().knobs.fontFamily).to.equal('Inter');
    });
  });

  //
  // Palette generation
  //

  describe('palette generation', () => {
    it('should seed from the current theme values', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);

      expect(harness.seedInput('primary').value).to.equal(FORGE_THEME_LIGHT_TOKENS.primary);
    });

    it('should set a seed from the text field', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);

      await harness.setSeedText('primary', '#ff0000');

      expect(variantOf(harness.el).seeds!.primary).to.equal('#ff0000');
    });

    it('should set a seed from the color swatch', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);

      await harness.setSeedSwatch('primary', '#00ff00');

      expect(variantOf(harness.el).seeds!.primary).to.equal('#00ff00');
    });

    it('should flag a seed whose value is not a color', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);

      await harness.setSeedText('primary', 'nope');

      expect(harness.seedField('primary').hasAttribute('invalid')).to.be.true;
    });

    it('should derive the full token set from the seeds', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);
      await harness.setSeedText('primary', '#ff0000');

      harness.generateButton.click();
      await harness.el.updateComplete;

      const theme = harness.el.getTheme();
      expect(Object.keys(activeForgeThemeVariant(theme).tokens)).to.have.lengthOf(101);
      expect(activeForgeThemeVariant(theme).tokens.primary).to.equal('#ff0000');
      expect(theme.mode).to.equal('replace');
    });

    it('should generate from the public method', async () => {
      const harness = await createFixture();

      harness.el.generatePalette({ primary: '#0000ff' });
      await harness.el.updateComplete;

      expect(variantOf(harness.el).tokens.primary).to.equal('#0000ff');
    });

    it('should change the target contrast', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);

      await harness.setTargetContrast('4.5');

      expect(harness.el.getTheme().generator.targetContrast).to.equal(4.5);
    });

    it('should fall back to a target contrast of seven', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);

      await harness.setTargetContrast('');

      expect(harness.el.getTheme().generator.targetContrast).to.equal(7);
    });

    it('should turn off pure accent inks', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);

      harness.pureOnColorsSwitch.dispatchEvent(new CustomEvent('forge-switch-change', { detail: false }));
      await harness.el.updateComplete;

      expect(harness.el.getTheme().generator.pureOnColors).to.be.false;
    });

    it('should seed from a token override rather than the Forge default', async () => {
      const harness = await createTokensFixture();
      await harness.setTokenText('brand', '#ff0000');
      await harness.selectView(VIEW.palette);

      expect(harness.seedInput('brand').value).to.equal('#ff0000');
    });

    // The palette owns light/dark. It decides how the surface, container, text and
    // outline ramps derive, so it cannot be a side effect of the emit mode.
    describe('polarity', () => {
      it('should start on the light surface', async () => {
        const harness = await createFixture();
        await harness.selectView(VIEW.palette);

        expect(harness.el.getTheme().polarity).to.equal('light');
        expect((harness.polarityGroup as HTMLElement & { value: string }).value).to.equal('light');
      });

      it('should seed an untouched dark variant from the Forge dark palette', async () => {
        const harness = await createFixture();
        await harness.selectView(VIEW.palette);

        await harness.setPolarity('dark');

        // Switching does not derive anything on its own — it hands you the dark
        // starting point and waits. Forge's light accents on a near-black
        // surface would fail contrast, so the seeds come from the dark stock.
        expect(harness.el.getTheme().polarity).to.equal('dark');
        expect(variantOf(harness.el).seeds!.surface).to.equal(FORGE_THEME_DARK_TOKENS.surface);
        expect(variantOf(harness.el).seeds!.primary).to.equal(FORGE_THEME_DARK_TOKENS.primary);
      });

      it('should emit the whole set once a palette is generated', async () => {
        const harness = await createFixture();
        await harness.selectView(VIEW.palette);
        await harness.setPolarity('dark');

        harness.generateButton.click();
        await harness.el.updateComplete;

        expect(harness.el.getTheme().mode).to.equal('replace');
        expect(Object.keys(variantOf(harness.el).tokens)).to.have.lengthOf(101);
        expect(variantOf(harness.el).tokens.surface).to.equal(FORGE_THEME_DARK_TOKENS.surface);
      });

      // The headline requirement: the two polarities are separate designs.
      it('should keep light and dark edits independent', async () => {
        const harness = await createFixture();
        await harness.selectView(VIEW.palette);
        await harness.setSeedText('primary', '#ff00ff');

        await harness.setPolarity('dark');

        // The dark variant has its own seeds and has not inherited the light edit.
        expect(variantOf(harness.el).seeds!.primary).to.equal(FORGE_THEME_DARK_TOKENS.primary);

        await harness.setSeedText('primary', '#00ffcc');
        expect(variantOf(harness.el).seeds!.primary).to.equal('#00ffcc');

        // And going back finds the light edit exactly as it was left.
        await harness.setPolarity('light');
        expect(variantOf(harness.el).seeds!.primary).to.equal('#ff00ff');

        // Both are held at once, not recomputed on switch.
        expect(harness.el.getTheme().variants.light.seeds!.primary).to.equal('#ff00ff');
        expect(harness.el.getTheme().variants.dark.seeds!.primary).to.equal('#00ffcc');
      });

      it('should not disturb a token edited in the other polarity', async () => {
        const harness = await createTokensFixture();
        await harness.setTokenText('brand', '#ff0000');

        await harness.selectView(VIEW.palette);
        await harness.setPolarity('dark');

        expect(variantOf(harness.el).tokens).to.not.have.property('brand');
        expect(harness.el.getTheme().variants.light.tokens.brand).to.equal('#ff0000');
      });

      it('should ignore a change to the polarity already set', async () => {
        const harness = await createFixture();
        await harness.selectView(VIEW.palette);
        const spy = sinon.spy();
        harness.el.addEventListener('forge-theme-editor-change', spy);

        await harness.setPolarity('light');

        expect(spy.called).to.be.false;
      });
    });
  });

  //
  // Contrast reporting
  //

  describe('contrast reporting', () => {
    it('should report every on-token pair worst first', async () => {
      const harness = await createFixture();

      const report = harness.el.getContrastReport();

      expect(report.length).to.be.greaterThan(20);
      expect(report[0].ratio).to.be.at.most(report[report.length - 1].ratio);
    });

    it('should render the worst pairs only until asked for all', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.contrast);
      const total = harness.el.getContrastReport().length;
      expect(harness.contrastEntries).to.have.lengthOf(12);

      harness.contrastToggle.click();
      await harness.el.updateComplete;
      expect(harness.contrastEntries).to.have.lengthOf(total);

      harness.contrastToggle.click();
      await harness.el.updateComplete;
      expect(harness.contrastEntries).to.have.lengthOf(12);
    });

    it('should warn when a pair falls below the AA text ratio', async () => {
      const harness = await createFixture();
      harness.el.loadTheme({ tokens: { primary: '#ffffff', 'on-primary': '#fefefe' } });
      await harness.selectView(VIEW.contrast);

      expect(harness.contrastSummary.getAttribute('theme')).to.equal('warning');
      expect(harness.contrastSummary.textContent).to.include('fall below 4.5:1');
    });

    it('should badge each pair by how it scores', async () => {
      const harness = await createFixture();
      harness.el.loadTheme({
        tokens: { primary: '#ffffff', 'on-primary': '#fefefe', secondary: '#949494', 'on-secondary': '#ffffff' }
      });
      await harness.selectView(VIEW.contrast);
      harness.contrastToggle.click();
      await harness.el.updateComplete;

      const themes = harness.contrastEntries.map(entry => entry.querySelector('forge-badge')!.getAttribute('theme'));
      expect(themes).to.include('error');
      expect(themes).to.include('warning');
      expect(themes).to.include('success');
    });

    it('should confirm when every pair passes', async () => {
      const harness = await createFixture();
      harness.el.loadTheme({ tokens: { primary: '#ffffff', 'on-primary': '#000000' }, mode: 'patch' });
      await harness.selectView(VIEW.contrast);

      expect(harness.contrastSummary.getAttribute('theme')).to.equal('success');
      expect(harness.contrastSummary.textContent).to.include('meet 4.5:1');
    });
  });

  //
  // Import and export
  //

  //
  // Preview sandbox
  //

  describe('preview sandbox', () => {
    it('should stay closed until asked', async () => {
      const harness = await createFixture();
      expect(harness.showcaseDialog.hasAttribute('open')).to.be.false;
    });

    it('should open from the preview button', async () => {
      const harness = await createFixture();

      harness.showcaseButton.click();
      await harness.el.updateComplete;

      expect(harness.showcaseDialog.hasAttribute('open')).to.be.true;
      expect(harness.root.querySelector('forge-theme-showcase')).to.not.be.null;
    });

    it('should scope a complete token set onto the sandbox', async () => {
      const harness = await createFixture();
      // Only the brand group is open by default, so go through the API here:
      // this test is about what the sandbox scopes, not about the token rows.
      harness.el.setToken('primary', '#ff0000');
      await harness.el.updateComplete;
      harness.showcaseButton.click();
      await harness.el.updateComplete;

      const body = harness.root.querySelector<HTMLElement>('.showcase-dialog__body')!;

      // Complete regardless of the emit mode: a half-applied theme would tell
      // you nothing about how the finished one looks.
      expect(body.style.getPropertyValue('--forge-theme-primary')).to.equal('#ff0000');
      expect(body.style.getPropertyValue('--forge-theme-surface')).to.equal(FORGE_THEME_LIGHT_TOKENS.surface);
    });

    it('should scope the dark variant when dark is being authored', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.palette);
      await harness.setPolarity('dark');

      harness.showcaseButton.click();
      await harness.el.updateComplete;

      const body = harness.root.querySelector<HTMLElement>('.showcase-dialog__body')!;
      expect(body.style.getPropertyValue('--forge-theme-surface')).to.equal(FORGE_THEME_DARK_TOKENS.surface);
    });

    it('should carry the global knobs into the sandbox', async () => {
      const harness = await createTokensFixture();
      await harness.openGroup(KNOBS_GROUP_KEY_TEST);
      await harness.setKnob('shapeFactor', '3');

      harness.showcaseButton.click();
      await harness.el.updateComplete;

      const body = harness.root.querySelector<HTMLElement>('.showcase-dialog__body')!;
      expect(body.style.getPropertyValue('--forge-shape-factor')).to.equal('3');
    });

    it('should not touch the document', async () => {
      const harness = await createFixture();

      harness.showcaseButton.click();
      await harness.el.updateComplete;

      // The sandbox is scoped to the dialog; the editor never writes to the
      // document. Persisting a theme is the host application's job.
      expect(document.querySelector('style[id*="theme"]')).to.be.null;
      expect(document.documentElement.style.getPropertyValue('--forge-theme-primary')).to.equal('');
    });

    // Regression: Forge portals overlays to the nearest ancestor matching
    // `:is(forge-dialog,forge-popover,[forge-popover-host])`, falling back to
    // document.body. Without this attribute that ancestor was the dialog, so an
    // opened select was appended as a sibling of the themed wrapper and rendered
    // in the stock light theme. Do not remove it.
    it('should be a popover host so overlays inherit the theme', async () => {
      const harness = await createFixture();
      harness.showcaseButton.click();
      await harness.el.updateComplete;

      const body = harness.root.querySelector<HTMLElement>('.showcase-dialog__body')!;

      expect(body.hasAttribute('forge-popover-host')).to.be.true;
      // The tokens and the popover host have to be the same element, or overlays
      // land outside the scope again.
      expect(body.style.getPropertyValue('--forge-theme-surface')).to.not.equal('');
    });

    it('should close again', async () => {
      const harness = await createFixture();
      harness.showcaseButton.click();
      await harness.el.updateComplete;

      harness.showcaseDialog.dispatchEvent(new CustomEvent('forge-dialog-close'));
      await harness.el.updateComplete;

      expect(harness.showcaseDialog.hasAttribute('open')).to.be.false;
    });
  });

  describe('relative CSS toggle', () => {
    it('should be off by default', async () => {
      const harness = await createFixture();

      expect(harness.el.relativeColors).to.be.false;
      expect(harness.el.exportTheme('css')).to.not.include('oklch(from');
    });

    it('should switch the export over from the checkbox', async () => {
      const harness = await createFixture();
      // A generated palette, so there are ramps to derive in the first place.
      harness.el.generatePalette();
      await harness.el.updateComplete;
      await harness.selectView(VIEW.transfer);

      harness.relativeColorsCheckbox.dispatchEvent(new CustomEvent('forge-checkbox-change', { detail: true }));
      await harness.el.updateComplete;

      expect(harness.el.relativeColors).to.be.true;
      expect(harness.el.exportTheme('css')).to.include('oklch(from var(--forge-theme-primary)');
    });

    it('should show the switched output immediately', async () => {
      const harness = await createFixture();
      harness.el.generatePalette();
      await harness.el.updateComplete;
      await harness.selectView(VIEW.transfer);
      await harness.setExportFormat('css');

      harness.relativeColorsCheckbox.dispatchEvent(new CustomEvent('forge-checkbox-change', { detail: true }));
      await harness.el.updateComplete;

      expect(harness.exportOutput.value).to.include('oklch(from');
    });

    it('should go back to literals when unchecked', async () => {
      const harness = await createFixture();
      harness.el.generatePalette();
      harness.el.relativeColors = true;
      await harness.el.updateComplete;
      await harness.selectView(VIEW.transfer);

      harness.relativeColorsCheckbox.dispatchEvent(new CustomEvent('forge-checkbox-change', { detail: false }));
      await harness.el.updateComplete;

      expect(harness.el.relativeColors).to.be.false;
      expect(harness.exportOutput.value).to.not.include('oklch(from');
    });

    it('should be disabled for JSON, which has nothing to express relatively', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.transfer);
      await harness.setExportFormat('json');

      expect(harness.relativeColorsCheckbox.hasAttribute('disabled')).to.be.true;
    });
  });

  describe('contrast view', () => {
    it('should render a specimen of each pair', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.contrast);

      // A ratio is a number; the specimen is the thing the number is about, and
      // it is what makes the view readable at a glance.
      const sample = harness.root.querySelector<HTMLElement>('.contrast-sample')!;
      expect(sample).to.not.be.null;
      expect(sample.style.getPropertyValue('--_forge-theme-editor-sample-background')).to.not.equal('');
      expect(sample.style.getPropertyValue('--_forge-theme-editor-sample-foreground')).to.not.equal('');
    });

    it('should name the background token and the ink drawn on it', async () => {
      const harness = await createFixture();
      await harness.selectView(VIEW.contrast);

      const entry = harness.root.querySelector<HTMLElement>('.contrast-entry')!;
      const background = entry.querySelector('[slot="label"]')!.textContent!.trim();
      expect(entry.dataset.token).to.equal(`on-${background}`);
    });
  });

  describe('group headers', () => {
    it('should show the color a group is about', async () => {
      const harness = await createTokensFixture();

      const swatch = harness.root.querySelector<HTMLElement>('[data-group="primary"] .group-swatch')!;
      expect(swatch.style.getPropertyValue('--_forge-theme-editor-group-swatch')).to.equal(
        FORGE_THEME_LIGHT_TOKENS.primary
      );
    });

    it("should fall back to a group's first token when the key is not one", async () => {
      const harness = await createTokensFixture();

      // `text` is a group name, not a token, so the swatch uses `text-high`.
      const swatch = harness.root.querySelector<HTMLElement>('[data-group="text"] .group-swatch')!;
      expect(swatch.style.getPropertyValue('--_forge-theme-editor-group-swatch')).to.equal(
        FORGE_THEME_LIGHT_TOKENS['text-high']
      );
    });
  });

  describe('import and export', () => {
    it('should export json by default', async () => {
      const harness = await createTokensFixture();
      await harness.setTokenText('brand', '#ff0000');
      await harness.selectView(VIEW.transfer);

      expect(harness.exportOutput.value).to.equal(harness.el.exportTheme());
      // Exported JSON carries both variants, so an app gets the light and the
      // dark design in one file.
      const exported = JSON.parse(harness.exportOutput.value);
      expect(exported.variants.light.tokens.brand).to.equal('#ff0000');
      expect(exported.variants.dark).to.deep.equal({ tokens: {}, seeds: null });
      expect(exported.polarity).to.equal('light');
    });

    it('should export sass using the Forge provide mixin', async () => {
      const harness = await createTokensFixture();
      await harness.setTokenText('brand', '#ff0000');
      await harness.selectView(VIEW.transfer);

      await harness.setExportFormat('scss');

      expect(harness.el.exportFormat).to.equal('scss');
      expect(harness.exportOutput.value).to.include('@include theme.provide(');
    });

    it('should export a plain root css block', async () => {
      const harness = await createTokensFixture();
      await harness.setTokenText('brand', '#ff0000');
      await harness.selectView(VIEW.transfer);

      await harness.setExportFormat('css');

      expect(harness.exportOutput.value).to.include(':root {');
      expect(harness.exportOutput.value).to.not.include('!important');
    });

    it('should export the format asked for directly', async () => {
      const harness = await createTokensFixture();

      expect(harness.el.exportTheme('css')).to.include(':root {');
    });

    it('should copy the export to the clipboard', async () => {
      const harness = await createTokensFixture();
      await harness.selectView(VIEW.transfer);
      const writeText = sinon.stub(navigator.clipboard, 'writeText').resolves();

      harness.copyButton.click();
      await harness.el.updateComplete;

      expect(writeText.calledOnceWith(harness.el.exportTheme())).to.be.true;
    });

    it('should report a blocked clipboard', async () => {
      const harness = await createTokensFixture();
      await harness.selectView(VIEW.transfer);
      sinon.stub(navigator.clipboard, 'writeText').rejects(new Error('denied'));

      harness.copyButton.click();
      await nextFrame();
      await harness.el.updateComplete;

      expect(harness.messages!.textContent).to.include('Copying to the clipboard was blocked');
    });

    it('should download the export under a file safe name', async () => {
      const harness = await createTokensFixture();
      harness.el.loadTheme({ name: 'Brandy McBrand' });
      await harness.selectView(VIEW.transfer);
      const click = sinon.stub(HTMLAnchorElement.prototype, 'click');

      harness.downloadButton.click();
      await harness.el.updateComplete;

      const anchor = click.firstCall.thisValue as HTMLAnchorElement;
      expect(anchor.download).to.equal('brandy-mcbrand.json');
    });

    it('should fall back to a generic download name', async () => {
      const harness = await createTokensFixture();
      harness.el.loadTheme({ name: '###' });
      await harness.selectView(VIEW.transfer);
      await harness.setExportFormat('scss');
      const click = sinon.stub(HTMLAnchorElement.prototype, 'click');

      harness.downloadButton.click();
      await harness.el.updateComplete;

      expect((click.firstCall.thisValue as HTMLAnchorElement).download).to.equal('forge-theme.scss');
    });

    it('should disable the import button until there is something to import', async () => {
      const harness = await createTokensFixture();
      await harness.selectView(VIEW.transfer);

      expect(harness.importButton.hasAttribute('disabled')).to.be.true;

      await harness.setImportText('{}');

      expect(harness.importButton.hasAttribute('disabled')).to.be.false;
    });

    it('should import pasted json', async () => {
      const harness = await createTokensFixture();
      await harness.selectView(VIEW.transfer);
      await harness.setImportText(
        exportForgeThemeJson(createForgeTheme({ name: 'Imported', tokens: { brand: '#ff0000' } }))
      );

      harness.importButton.click();
      await harness.el.updateComplete;

      expect(harness.el.getTheme().name).to.equal('Imported');
      expect(variantOf(harness.el).tokens.brand).to.equal('#ff0000');
    });

    it('should dispatch an import event', async () => {
      const harness = await createTokensFixture();
      const spy = sinon.spy();
      harness.el.addEventListener('forge-theme-editor-import', spy);

      harness.el.importTheme('{"name":"Imported","tokens":{"brand":"#ff0000"}}');
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      expect(spy.firstCall.args[0].detail.theme.name).to.equal('Imported');
      expect(spy.firstCall.args[0].detail.warnings).to.be.empty;
    });

    it('should reject unknown token names and report them', async () => {
      const harness = await createTokensFixture();

      const warnings = harness.el.importTheme('{"tokens":{"brand":"#ff0000","made-up-token":"#000000"}}');
      await harness.el.updateComplete;

      expect(warnings[0]).to.include('Dropped 1 unknown token name');
      expect(variantOf(harness.el).tokens).to.deep.equal({ brand: '#ff0000' });
      expect(harness.messages!.textContent).to.include('made-up-token');
    });

    it('should report json it cannot parse and leave the theme alone', async () => {
      const harness = await createTokensFixture();
      const spy = sinon.spy();
      harness.el.addEventListener('forge-theme-editor-import', spy);

      const messages = harness.el.importTheme('{ nope');
      await harness.el.updateComplete;

      expect(messages[0]).to.include('Not valid JSON');
      expect(spy.called).to.be.false;
      expect(variantOf(harness.el).tokens).to.deep.equal({});
    });

    it('should report json that holds no theme', async () => {
      const harness = await createTokensFixture();

      expect(harness.el.importTheme('"a string"')[0]).to.equal('No theme found in that JSON.');
    });

    it('should import a dropped json file', async () => {
      const harness = await createTokensFixture();
      await harness.selectView(VIEW.transfer);
      const file = new File(['{"name":"From file","tokens":{"brand":"#ff0000"}}'], 'theme.json', {
        type: 'application/json'
      });

      await harness.dropFile([file]);

      expect(harness.el.getTheme().name).to.equal('From file');
      expect(harness.importInput.value).to.include('From file');
    });

    it('should report a rejected file', async () => {
      const harness = await createTokensFixture();
      await harness.selectView(VIEW.transfer);

      await harness.dropFile([]);

      expect(harness.messages!.textContent).to.include('That file was rejected');
    });

    it('should load a theme from the public method', async () => {
      const harness = await createTokensFixture();

      harness.el.loadTheme({ mode: 'dark', tokens: { brand: '#ff0000' } });
      await harness.el.updateComplete;

      expect(harness.el.getTheme().mode).to.equal('replace');
      expect(variantOf(harness.el).tokens.brand).to.equal('#ff0000');
    });

    it('should fill in the gaps of a partial theme', async () => {
      const harness = await createTokensFixture();

      harness.el.loadTheme(null);
      await harness.el.updateComplete;

      expect(harness.el.getTheme()).to.deep.equal(createForgeTheme());
    });
  });

  //
  // Views
  //

  describe('views', () => {
    it('should open on the palette view', async () => {
      const harness = await createFixture();

      // The palette is where a theme starts; the token list is the fine-tuning pass.
      expect(harness.view.getAttribute('aria-label')).to.equal('palette');
    });

    it('should switch between the four views', async () => {
      const harness = await createFixture();

      await harness.selectView(VIEW.tokens);
      expect(harness.view.getAttribute('aria-label')).to.equal('tokens');

      await harness.selectView(VIEW.contrast);
      expect(harness.view.getAttribute('aria-label')).to.equal('contrast');

      await harness.selectView(VIEW.transfer);
      expect(harness.view.getAttribute('aria-label')).to.equal('transfer');

      await harness.selectView(VIEW.palette);
      expect(harness.view.getAttribute('aria-label')).to.equal('palette');
    });

    it('should fall back to the palette view for an unknown tab index', async () => {
      const harness = await createFixture();

      await harness.selectView(99);

      expect(harness.view.getAttribute('aria-label')).to.equal('palette');
    });
  });
});

class ThemeEditorHarness {
  constructor(public el: ThemeEditorComponent) {}

  public get root(): ShadowRoot {
    return this.el.shadowRoot!;
  }

  public get titleSlot(): HTMLSlotElement {
    return this.root.querySelector('slot[name="title"]')!;
  }

  public get view(): HTMLElement {
    return this.root.querySelector('.view')!;
  }

  public get messages(): HTMLElement | null {
    return this.root.querySelector('.messages');
  }

  public get resetAllButton(): HTMLElement {
    return this.root.querySelector('#reset-all-button')!;
  }

  public get relativeColorsCheckbox(): HTMLElement {
    return this.root.querySelector('#relative-colors')!;
  }

  public get showcaseButton(): HTMLElement {
    return this.root.querySelector('#showcase-button')!;
  }

  public get showcaseDialog(): HTMLElement {
    return this.root.querySelector('#showcase-dialog')!;
  }

  public get generateButton(): HTMLElement {
    return this.root.querySelector('#generate-button')!;
  }

  public get pureOnColorsSwitch(): HTMLElement {
    return this.root.querySelector('#pure-on-colors')!;
  }

  public get contrastSummary(): HTMLElement {
    return this.root.querySelector('.contrast-summary')!;
  }

  public get contrastEntries(): HTMLElement[] {
    return [...this.root.querySelectorAll<HTMLElement>('.contrast-entry')];
  }

  public get contrastToggle(): HTMLElement {
    return this.root.querySelector('#contrast-toggle')!;
  }

  public get exportOutput(): HTMLTextAreaElement {
    return this.root.querySelector('#export-output')!;
  }

  public get importInput(): HTMLTextAreaElement {
    return this.root.querySelector('#import-input')!;
  }

  public get importButton(): HTMLElement {
    return this.root.querySelector('#import-button')!;
  }

  public get copyButton(): HTMLElement {
    return this.root.querySelector('#copy-button')!;
  }

  public get downloadButton(): HTMLElement {
    return this.root.querySelector('#download-button')!;
  }

  public get groupPanels(): HTMLElement[] {
    return [...this.root.querySelectorAll<HTMLElement>('.group:not(.knobs)')];
  }

  public get knobsPanel(): HTMLElement | null {
    return this.root.querySelector('.group.knobs');
  }

  public get rows(): HTMLElement[] {
    return [...this.root.querySelectorAll<HTMLElement>('.rows .row')];
  }

  public row(token: string): HTMLElement {
    return this.root.querySelector(`.row[data-token="${token}"]`)!;
  }

  public tokenField(token: string): HTMLElement {
    return this.row(token).querySelector('.value')!;
  }

  public tokenInput(token: string): HTMLInputElement {
    return this.root.querySelector(`#field-${token}`)!;
  }

  public revertButton(token: string): HTMLElement {
    return this.root.querySelector(`.revert[data-token="${token}"]`)!;
  }

  public seedInput(seed: string): HTMLInputElement {
    return this.root.querySelector(`#seed-${seed}`)!;
  }

  public seedField(seed: string): HTMLElement {
    return this.root.querySelector(`.seed-row[data-seed="${seed}"] .value`)!;
  }

  public async setTokenText(token: string, value: string): Promise<void> {
    await this.#setNativeValue(this.tokenInput(token), value, 'change');
  }

  public async setTokenSwatch(token: string, value: string): Promise<void> {
    await this.#setNativeValue(this.root.querySelector(`.swatch[data-token="${token}"]`)!, value, 'input');
  }

  public async setSeedText(seed: string, value: string): Promise<void> {
    await this.#setNativeValue(this.seedInput(seed), value, 'change');
  }

  public async setSeedSwatch(seed: string, value: string): Promise<void> {
    await this.#setNativeValue(this.root.querySelector(`.swatch[data-seed="${seed}"]`)!, value, 'input');
  }

  public async setKnob(knob: string, value: string): Promise<void> {
    await this.#setNativeValue(this.root.querySelector(`[data-knob="${knob}"]`)!, value, 'change');
  }

  public get polarityGroup(): HTMLElement {
    return this.root.querySelector('forge-button-toggle-group')!;
  }

  public async setPolarity(mode: 'light' | 'dark'): Promise<void> {
    const toggle = [...this.root.querySelectorAll('forge-button-toggle')].find(
      b => (b as HTMLElement & { value: string }).value === mode
    ) as HTMLElement;
    toggle.click();
    await nextFrame();
    await this.el.updateComplete;
  }

  public async setTargetContrast(value: string): Promise<void> {
    const select = this.root.querySelector<HTMLElement & { value: string }>('.target-contrast')!;
    select.value = value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    await nextFrame();
    await this.el.updateComplete;
  }

  public async setImportText(value: string): Promise<void> {
    await this.#setNativeValue(this.importInput, value, 'input');
  }

  public async filter(value: string): Promise<void> {
    await this.#setNativeValue(this.root.querySelector('#token-filter')!, value, 'input');
  }

  public async setMode(mode: string): Promise<void> {
    await this.#setSelectValue(this.root.querySelector('.mode')!, mode);
  }

  public async setExportFormat(format: string): Promise<void> {
    await this.#setSelectValue(this.root.querySelector('#export-format')!, format);
  }

  public async selectView(index: number): Promise<void> {
    this.root.querySelector('.views')!.dispatchEvent(new CustomEvent('forge-tab-bar-change', { detail: { index } }));
    await this.el.updateComplete;
  }

  public async toggleGroup(key: string, open: boolean): Promise<void> {
    this.root
      .querySelector(`[data-group="${key}"] forge-expansion-panel`)!
      .dispatchEvent(new CustomEvent('forge-expansion-panel-toggle', { detail: open }));
    await this.el.updateComplete;
  }

  public async openGroup(key: string): Promise<void> {
    await this.toggleGroup(key, true);
  }

  public async dropFile(files: File[]): Promise<void> {
    // The handler awaits `file.text()` before importing, so counting frames is a
    // race. Wait for the import event, with a bounded fallback because a rejected
    // file never imports at all.
    const settled = new Promise<void>(resolve => {
      this.el.addEventListener('forge-theme-editor-import', () => resolve(), { once: true });
      setTimeout(resolve, 200);
    });
    this.root
      .querySelector('#import-file')!
      .dispatchEvent(new CustomEvent('forge-file-picker-change', { detail: { legalFiles: files } }));
    await settled;
    await nextFrame();
    await this.el.updateComplete;
  }

  async #setNativeValue(element: Element, value: string, eventName: string): Promise<void> {
    (element as HTMLInputElement).value = value;
    element.dispatchEvent(new Event(eventName, { bubbles: true }));
    await this.el.updateComplete;
  }

  async #setSelectValue(element: Element, value: string): Promise<void> {
    (element as HTMLElement & { value: string }).value = value;
    element.dispatchEvent(new Event('change', { bubbles: true }));
    await this.el.updateComplete;
  }
}

/**
 * Tab indices, so a reorder of the views does not mean re-counting call sites.
 * The palette leads because that is where a theme starts.
 */
const VIEW = { palette: 0, tokens: 1, contrast: 2, transfer: 3 } as const;

/** The data-group key of the global-knobs section. */
const KNOBS_GROUP_KEY_TEST = 'knobs';

/** The variant currently being authored — light and dark are held separately. */
function variantOf(el: ThemeEditorComponent): ForgeThemeVariant {
  return activeForgeThemeVariant(el.getTheme());
}

async function createFixture(): Promise<ThemeEditorHarness> {
  const el = await fixture<ThemeEditorComponent>(html`
    <forge-theme-editor>
      <span slot="title">Brand theme</span>
    </forge-theme-editor>
  `);
  return new ThemeEditorHarness(el);
}

/** A fixture already switched to the token list, which is not the default view. */
async function createTokensFixture(): Promise<ThemeEditorHarness> {
  const harness = await createFixture();
  await harness.selectView(VIEW.tokens);
  return harness;
}

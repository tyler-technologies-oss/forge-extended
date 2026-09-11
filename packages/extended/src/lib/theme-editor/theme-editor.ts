import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';
import {
  defineBadgeComponent,
  defineButtonComponent,
  defineCardComponent,
  defineDividerComponent,
  defineExpansionPanelComponent,
  defineFilePickerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineInlineMessageComponent,
  defineLabelValueComponent,
  defineOptionComponent,
  defineSelectComponent,
  defineSwitchComponent,
  defineTabBarComponent,
  defineTabComponent,
  defineTextFieldComponent,
  defineToolbarComponent,
  defineTooltipComponent,
  IconRegistry,
  type IFilePickerChangeEventData,
  type ITabBarChangeEventData
} from '@tylertech/forge';
import {
  tylIconAlertCircleOutline,
  tylIconAutorenew,
  tylIconCheckCircleOutline,
  tylIconContentCopy,
  tylIconDownload,
  tylIconPalette,
  tylIconSearch,
  tylIconUndo,
  tylIconVisibility,
  tylIconVisibilityOff
} from '@tylertech/tyler-icons';

import { isValidColor, parseColor, toHex } from './theme-color';
import {
  FORGE_THEME_SEED_KEYS,
  auditForgeThemeContrast,
  type ForgeThemeSeeds,
  type ThemeContrastEntry
} from './theme-generator';
import {
  FORGE_THEME_PREVIEW_SELECTORS,
  FORGE_THEME_PREVIEW_STYLE_ID,
  buildForgeThemePreviewCss,
  createForgeTheme,
  exportForgeTheme,
  normalizeForgeTheme,
  parseForgeThemeJson,
  regenerateForgeTheme,
  type ForgeTheme,
  type ForgeThemeExportFormat,
  type ForgeThemeMode
} from './theme-model';
import {
  FORGE_THEME_DARK_TOKENS,
  FORGE_THEME_LIGHT_TOKENS,
  FORGE_THEME_TOKEN_GROUPS,
  FORGE_THEME_TOKEN_KINDS,
  FORGE_THEME_TOKEN_PREFIX,
  type ForgeThemeTokenGroup,
  type ForgeThemeTokenMap
} from './theme-tokens';

import styles from './theme-editor.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-theme-editor': ThemeEditorComponent;
  }

  interface HTMLElementEventMap {
    'forge-theme-editor-change': CustomEvent<ThemeEditorChangeEventData>;
    'forge-theme-editor-preview': CustomEvent<ThemeEditorPreviewEventData>;
    'forge-theme-editor-import': CustomEvent<ThemeEditorImportEventData>;
  }
}

export const ThemeEditorComponentTagName: keyof HTMLElementTagNameMap = 'forge-theme-editor';

/** The views the editor exposes. */
export type ThemeEditorView = 'palette' | 'tokens' | 'contrast' | 'transfer';

/** Emitted whenever the theme is edited. */
export interface ThemeEditorChangeEventData {
  /** The complete theme after the edit. */
  theme: ForgeTheme;
  /** The token that was edited, or `null` when the whole theme changed. */
  token: string | null;
}

/** Emitted when the live preview is turned on or off. */
export interface ThemeEditorPreviewEventData {
  /** Whether the preview is now applied to the document. */
  preview: boolean;
  /** The CSS that was injected, or an empty string when the preview was removed. */
  css: string;
}

/** Emitted when a theme is imported. */
export interface ThemeEditorImportEventData {
  /** The imported theme. */
  theme: ForgeTheme;
  /** Non-fatal problems found while validating the import. */
  warnings: string[];
}

// Order is the authoring order: seed a palette, then fine-tune individual tokens,
// then check contrast, then take it away with you.
const VIEWS: readonly ThemeEditorView[] = ['palette', 'tokens', 'contrast', 'transfer'];
const KNOBS_GROUP_KEY = 'knobs';
const CONTRAST_PREVIEW_COUNT = 12;
const CONTRAST_AA_TEXT = 4.5;
const CONTRAST_AA_LARGE = 3;

/**
 * @tag forge-theme-editor
 *
 * @slot title - The title shown in the editor header.
 *
 * @event {CustomEvent<ThemeEditorChangeEventData>} forge-theme-editor-change - Fired when the theme is edited.
 * @event {CustomEvent<ThemeEditorPreviewEventData>} forge-theme-editor-preview - Fired when the live preview is toggled.
 * @event {CustomEvent<ThemeEditorImportEventData>} forge-theme-editor-import - Fired when a theme is imported.
 */
@customElement(ThemeEditorComponentTagName)
export class ThemeEditorComponent extends LitElement {
  static {
    defineBadgeComponent();
    defineButtonComponent();
    defineCardComponent();
    defineDividerComponent();
    defineExpansionPanelComponent();
    defineFilePickerComponent();
    defineIconButtonComponent();
    defineIconComponent();
    defineInlineMessageComponent();
    defineLabelValueComponent();
    defineOptionComponent();
    defineSelectComponent();
    defineSwitchComponent();
    defineTabBarComponent();
    defineTabComponent();
    defineTextFieldComponent();
    defineToolbarComponent();
    defineTooltipComponent();

    IconRegistry.define([
      tylIconAlertCircleOutline,
      tylIconAutorenew,
      tylIconCheckCircleOutline,
      tylIconContentCopy,
      tylIconDownload,
      tylIconPalette,
      tylIconSearch,
      tylIconUndo,
      tylIconVisibility,
      tylIconVisibilityOff
    ]);
  }

  public static override styles = unsafeCSS(styles);

  /** The theme being edited. */
  @property({ attribute: false })
  public theme: ForgeTheme = createForgeTheme();

  /** Indicates whether the theme is currently applied to the live document. */
  @property({ type: Boolean, reflect: true })
  public preview = false;

  /**
   * The selectors the live preview declares its tokens on. Defaults to the
   * conventional Forge theme carriers.
   */
  @property({ attribute: false })
  public previewSelectors: string[] = [...FORGE_THEME_PREVIEW_SELECTORS];

  /** The export format shown on the import/export view. */
  @property({ attribute: 'export-format' })
  public exportFormat: ForgeThemeExportFormat = 'json';

  @state()
  private _view: ThemeEditorView = 'palette';

  @state()
  private _filter = '';

  @state()
  private _openGroups: string[] = ['brand'];

  @state()
  private _importText = '';

  @state()
  private _messages: string[] = [];

  @state()
  private _showAllContrast = false;

  #styleElement: HTMLStyleElement | null = null;
  #hasSyncedPreview = false;

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    // Never leave an orphaned override behind: the page must return to its own theme.
    this.#removePreviewStyle();
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    const previewChanged = changedProperties.has('preview');
    if (previewChanged || changedProperties.has('theme') || changedProperties.has('previewSelectors')) {
      this.#syncPreviewStyle();
    }
    if (previewChanged && this.#hasSyncedPreview) {
      this.#emitPreview();
    }
    this.#hasSyncedPreview = true;
  }

  public override render(): TemplateResult {
    return html`
      <forge-card class="container">
        ${this.#header} ${this.#previewBanner} ${this.#messageList}
        <forge-tab-bar
          class="views"
          .activeTab=${VIEWS.indexOf(this._view)}
          @forge-tab-bar-change=${this.#onViewChange}>
          <forge-tab>Palette</forge-tab>
          <forge-tab>Tokens</forge-tab>
          <forge-tab>Contrast</forge-tab>
          <forge-tab>Import &amp; export</forge-tab>
        </forge-tab-bar>
        <div class="view" role="region" aria-label=${this._view}>${this.#activeView}</div>
      </forge-card>
    `;
  }

  //
  // Public API
  //

  /** Returns the theme being edited. */
  public getTheme(): ForgeTheme {
    return this.theme;
  }

  /**
   * Replaces the theme being edited. Anything the value omits is filled in with a
   * default, so a partial theme or a bare token map is accepted.
   * @param theme The theme to load.
   */
  public loadTheme(theme: Partial<ForgeTheme> | null | undefined): void {
    this.#setTheme(createForgeTheme(theme), null);
  }

  /** Applies the theme to the live document. */
  public applyPreview(): void {
    this.preview = true;
  }

  /** Removes the theme from the live document, restoring the page's own theme. */
  public removePreview(): void {
    this.preview = false;
  }

  /**
   * Emits the theme in the requested format.
   * @param format The format to emit. Defaults to the `export-format` property.
   */
  public exportTheme(format: ForgeThemeExportFormat = this.exportFormat): string {
    return exportForgeTheme(this.theme, format);
  }

  /**
   * Imports theme JSON, dropping unknown token names rather than emitting dead
   * custom properties.
   * @param text The JSON text to import.
   * @returns The warnings raised, or the fatal error as the only entry.
   */
  public importTheme(text: string): string[] {
    const result = parseForgeThemeJson(text);
    if (!result.theme) {
      this._messages = [result.error ?? 'That theme could not be imported.'];
      return this._messages;
    }
    this._messages = result.warnings;
    this.theme = result.theme;
    this.#emitChange(null);
    this.dispatchEvent(
      new CustomEvent<ThemeEditorImportEventData>('forge-theme-editor-import', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: { theme: result.theme, warnings: result.warnings }
      })
    );
    return result.warnings;
  }

  /**
   * Derives the full token set from seed colors.
   * @param seeds The seed colors. Defaults to the theme's current seeds.
   */
  public generatePalette(seeds?: ForgeThemeSeeds | null): void {
    this.#setTheme(regenerateForgeTheme(this.theme, seeds), null);
  }

  /**
   * Sets one token, or clears it when the value is empty.
   * @param token The bare token name.
   * @param value The CSS value.
   */
  public setToken(token: string, value: string): void {
    const tokens = { ...this.theme.tokens };
    if (value.trim()) {
      tokens[token] = value.trim();
    } else {
      delete tokens[token];
    }
    this.#setTheme({ ...this.theme, tokens }, token);
  }

  /**
   * Reverts one token to the Forge default for the theme's mode.
   * @param token The bare token name.
   */
  public resetToken(token: string): void {
    if (!(token in this.theme.tokens)) {
      return;
    }
    const tokens = { ...this.theme.tokens };
    delete tokens[token];
    this.#setTheme({ ...this.theme, tokens }, token);
  }

  /** Reverts every token to the Forge defaults for the theme's mode. */
  public resetAllTokens(): void {
    this.#setTheme({ ...this.theme, tokens: {} }, null);
  }

  /**
   * Reports the contrast ratio of every `on-*` token against its background,
   * worst first.
   */
  public getContrastReport(): ThemeContrastEntry[] {
    return auditForgeThemeContrast({ ...this.#baseTokens, ...this.theme.tokens });
  }

  /** The CSS the live preview injects, whether or not the preview is applied. */
  public getPreviewCss(): string {
    return buildForgeThemePreviewCss(this.theme, this.previewSelectors);
  }

  //
  // Header
  //

  readonly #titleSlot = html`<slot name="title">Theme editor</slot>`;

  get #header(): TemplateResult {
    return html`
      <forge-toolbar class="header" no-border>
        <h1 class="title" slot="start">${this.#titleSlot}</h1>
        <div class="header-actions" slot="end">
          <forge-button
            id="preview-button"
            variant=${this.preview ? 'raised' : 'outlined'}
            aria-pressed=${this.preview ? 'true' : 'false'}
            @click=${this.#onPreviewToggle}>
            <forge-icon slot="start" name=${this.preview ? 'visibility_off' : 'visibility'}></forge-icon>
            <span>${this.preview ? 'Stop preview' : 'Preview on page'}</span>
          </forge-button>
        </div>
      </forge-toolbar>
    `;
  }

  get #previewBanner(): TemplateResult | typeof nothing {
    return when(
      this.preview,
      () => html`
        <forge-inline-message class="preview-banner" theme="info">
          <span slot="title">Preview is live</span>
          <span
            >This theme is applied to the whole page. Turn the preview off to restore the application's own theme.</span
          >
        </forge-inline-message>
      `,
      () => nothing
    );
  }

  get #messageList(): TemplateResult | typeof nothing {
    return when(
      this._messages.length > 0,
      () => html`
        <forge-inline-message class="messages" theme="warning">
          <span slot="title">Import notes</span>
          <ul>
            ${repeat(
              this._messages,
              message => message,
              message => html`<li>${message}</li>`
            )}
          </ul>
        </forge-inline-message>
      `,
      () => nothing
    );
  }

  get #activeView(): TemplateResult {
    switch (this._view) {
      case 'palette':
        return this.#paletteView;
      case 'contrast':
        return this.#contrastView;
      case 'transfer':
        return this.#transferView;
      default:
        return this.#tokensView;
    }
  }

  //
  // Tokens view
  //

  get #tokensView(): TemplateResult {
    const groups = this.#visibleGroups;
    return html`
      <div class="tokens-toolbar">
        <forge-text-field class="filter" density="small">
          <label slot="label" for="token-filter">Filter tokens</label>
          <forge-icon slot="leading" name="search"></forge-icon>
          <input
            id="token-filter"
            type="text"
            autocomplete="off"
            .value=${this._filter}
            @input=${this.#onFilterInput} />
        </forge-text-field>
        <forge-select class="mode" density="small" label="Emit" .value=${this.theme.mode} @change=${this.#onModeChange}>
          <forge-option value="patch">Only edited tokens</forge-option>
          <forge-option value="light">Full light set</forge-option>
          <forge-option value="dark">Full dark set</forge-option>
        </forge-select>
        <forge-button
          id="reset-all-button"
          variant="outlined"
          ?disabled=${this.#overrideCount === 0}
          @click=${this.#onResetAll}>
          <forge-icon slot="start" name="undo"></forge-icon>
          <span>Revert all (${this.#overrideCount})</span>
        </forge-button>
      </div>
      ${when(
        groups.length === 0,
        () => html`<p class="empty">No tokens match "${this._filter}".</p>`,
        () => html`
          <div class="groups">
            ${repeat(
              groups,
              group => group.key,
              group => this.#groupPanel(group)
            )}
          </div>
        `
      )}
      ${this.#knobsPanel}
    `;
  }

  #groupPanel(group: ForgeThemeTokenGroup): TemplateResult {
    const tokens = this.#matchingTokens(group);
    const open = this.#isGroupOpen(group.key);
    return html`
      <forge-expansion-panel
        class="group"
        data-group=${group.key}
        ?open=${open}
        @forge-expansion-panel-toggle=${(evt: CustomEvent<boolean>) => this.#onGroupToggle(group.key, evt.detail)}>
        <div class="group-header" slot="header">
          <span class="group-label">${group.label}</span>
          <forge-badge>${tokens.length}</forge-badge>
        </div>
        ${when(
          open,
          () => html`
            <div class="rows">
              ${repeat(
                tokens,
                token => token,
                token => this.#tokenRow(token)
              )}
            </div>
          `,
          () => nothing
        )}
      </forge-expansion-panel>
    `;
  }

  #tokenRow(token: string): TemplateResult {
    const value = this.#valueFor(token);
    const overridden = token in this.theme.tokens;
    const isColor = FORGE_THEME_TOKEN_KINDS[token] === 'color';
    return html`
      <div class="row" data-token=${token} title=${`${FORGE_THEME_TOKEN_PREFIX}${token}`}>
        ${when(
          isColor,
          () => html`
            <input
              class="swatch"
              type="color"
              data-token=${token}
              aria-label=${`${token} color`}
              .value=${this.#hexFor(value)}
              @input=${(evt: Event) => this.setToken(token, (evt.target as HTMLInputElement).value)} />
          `,
          () => html`<span class="swatch-placeholder" aria-hidden="true"></span>`
        )}
        <forge-text-field class="value" density="small" ?invalid=${isColor && !isValidColor(value)}>
          <label slot="label" for=${`field-${token}`}>${token}</label>
          <input
            id=${`field-${token}`}
            type="text"
            autocomplete="off"
            spellcheck="false"
            aria-label=${`${FORGE_THEME_TOKEN_PREFIX}${token}`}
            .value=${value}
            @change=${(evt: Event) => this.setToken(token, (evt.target as HTMLInputElement).value)} />
        </forge-text-field>
        <forge-icon-button
          class="revert"
          data-token=${token}
          aria-label=${`Revert ${token}`}
          ?disabled=${!overridden}
          @click=${() => this.resetToken(token)}>
          <forge-icon name="undo"></forge-icon>
        </forge-icon-button>
      </div>
    `;
  }

  get #knobsPanel(): TemplateResult | typeof nothing {
    return when(
      this.#matchesFilter('global knobs shape spacing typography'),
      () => html`
        <forge-expansion-panel
          class="group knobs"
          data-group=${KNOBS_GROUP_KEY}
          ?open=${this.#isGroupOpen(KNOBS_GROUP_KEY)}
          @forge-expansion-panel-toggle=${(evt: CustomEvent<boolean>) =>
            this.#onGroupToggle(KNOBS_GROUP_KEY, evt.detail)}>
          <div class="group-header" slot="header">
            <span class="group-label">Global knobs</span>
          </div>
          ${when(
            this.#isGroupOpen(KNOBS_GROUP_KEY),
            () => html`
              <div class="knob-rows">
                ${this.#knobField('shapeFactor', 'Shape factor', 'number', 'Rounds every corner in the app')}
                ${this.#knobField('spacingScale', 'Spacing scale', 'number', 'Multiplies every spacing step')}
                ${this.#knobField('fontFamily', 'Font family', 'text', '')}
                ${this.#knobField('fontSize', 'Font size', 'text', '')}
              </div>
            `,
            () => nothing
          )}
        </forge-expansion-panel>
      `,
      () => nothing
    );
  }

  #knobField(
    knob: 'shapeFactor' | 'spacingScale' | 'fontFamily' | 'fontSize',
    label: string,
    type: 'number' | 'text',
    supportText: string
  ): TemplateResult {
    const value = this.theme.knobs[knob];
    return html`
      <forge-text-field class="knob" density="small">
        <label slot="label" for=${`knob-${knob}`}>${label}</label>
        <input
          id=${`knob-${knob}`}
          data-knob=${knob}
          type=${type}
          step="any"
          autocomplete="off"
          .value=${value === null ? '' : String(value)}
          @change=${(evt: Event) => this.#onKnobChange(knob, (evt.target as HTMLInputElement).value)} />
        ${when(
          supportText !== '',
          () => html`<span slot="support-text">${supportText}</span>`,
          () => nothing
        )}
      </forge-text-field>
    `;
  }

  //
  // Palette view
  //

  get #paletteView(): TemplateResult {
    const seeds = this.#resolvedSeeds;
    return html`
      <p class="lede">
        Pick seed colors and the editor derives the full token set — container ramps, readable
        <code>on-</code> inks, the surface and outline scales.
      </p>
      <div class="seeds">
        ${repeat(
          FORGE_THEME_SEED_KEYS,
          key => key,
          key => this.#seedRow(key, seeds[key] ?? '')
        )}
      </div>
      <forge-divider></forge-divider>
      <div class="generator-options">
        <forge-text-field class="target-contrast" density="small">
          <label slot="label" for="target-contrast">Target contrast</label>
          <input
            id="target-contrast"
            type="number"
            min="1"
            max="21"
            step="0.1"
            .value=${String(this.theme.generator.targetContrast)}
            @change=${this.#onTargetContrastChange} />
          <span slot="support-text">Desired WCAG ratio for derived inks</span>
        </forge-text-field>
        <forge-switch
          id="pure-on-colors"
          .on=${this.theme.generator.pureOnColors}
          @forge-switch-change=${this.#onPureOnColorsChange}
          >Pure black/white accent inks</forge-switch
        >
        <forge-button id="generate-button" variant="raised" @click=${this.#onGenerate}>
          <forge-icon slot="start" name="autorenew"></forge-icon>
          <span>Generate palette</span>
        </forge-button>
      </div>
    `;
  }

  #seedRow(key: keyof ForgeThemeSeeds, value: string): TemplateResult {
    return html`
      <div class="row seed-row" data-seed=${key}>
        <input
          class="swatch"
          type="color"
          data-seed=${key}
          aria-label=${`${key} seed color`}
          .value=${this.#hexFor(value)}
          @input=${(evt: Event) => this.#onSeedChange(key, (evt.target as HTMLInputElement).value)} />
        <forge-text-field class="value" density="small" ?invalid=${!isValidColor(value)}>
          <label slot="label" for=${`seed-${key}`}>${key}</label>
          <input
            id=${`seed-${key}`}
            type="text"
            autocomplete="off"
            spellcheck="false"
            .value=${value}
            @change=${(evt: Event) => this.#onSeedChange(key, (evt.target as HTMLInputElement).value)} />
        </forge-text-field>
      </div>
    `;
  }

  //
  // Contrast view
  //

  get #contrastView(): TemplateResult {
    const report = this.getContrastReport();
    const failures = report.filter(entry => entry.ratio < CONTRAST_AA_TEXT);
    const shown = this._showAllContrast ? report : report.slice(0, CONTRAST_PREVIEW_COUNT);
    return html`
      <p class="lede">
        Every <code>on-</code> token measured against the background it names, worst first. Body text needs
        ${CONTRAST_AA_TEXT}:1 and large text ${CONTRAST_AA_LARGE}:1 to meet WCAG 2 AA.
      </p>
      <forge-inline-message class="contrast-summary" theme=${failures.length > 0 ? 'warning' : 'success'}>
        <forge-icon
          slot="icon"
          name=${failures.length > 0 ? 'alert_circle_outline' : 'check_circle_outline'}></forge-icon>
        <span
          >${failures.length > 0
            ? `${failures.length} of ${report.length} pairs fall below ${CONTRAST_AA_TEXT}:1.`
            : `All ${report.length} pairs meet ${CONTRAST_AA_TEXT}:1.`}</span
        >
      </forge-inline-message>
      <ul class="contrast-list">
        ${repeat(
          shown,
          entry => entry.foreground,
          entry => html`
            <li class="contrast-entry" data-token=${entry.foreground}>
              <forge-label-value>
                <span slot="label">${entry.foreground}</span>
                <span slot="value">on ${entry.background}</span>
              </forge-label-value>
              <forge-badge theme=${this.#contrastTheme(entry.ratio)}>${entry.ratio.toFixed(2)}:1</forge-badge>
            </li>
          `
        )}
      </ul>
      ${when(
        report.length > CONTRAST_PREVIEW_COUNT,
        () => html`
          <forge-button id="contrast-toggle" variant="text" @click=${this.#onToggleAllContrast}>
            <span>${this._showAllContrast ? 'Show worst only' : `Show all ${report.length}`}</span>
          </forge-button>
        `,
        () => nothing
      )}
    `;
  }

  #contrastTheme(ratio: number): string {
    if (ratio >= CONTRAST_AA_TEXT) {
      return 'success';
    }
    return ratio >= CONTRAST_AA_LARGE ? 'warning' : 'error';
  }

  //
  // Import and export view
  //

  get #transferView(): TemplateResult {
    return html`
      <div class="transfer-toolbar">
        <forge-select
          id="export-format"
          density="small"
          label="Export as"
          .value=${this.exportFormat}
          @change=${this.#onExportFormatChange}>
          <forge-option value="json">JSON</forge-option>
          <forge-option value="scss">Sass (theme.provide)</forge-option>
          <forge-option value="css">CSS (:root)</forge-option>
        </forge-select>
        <forge-button id="copy-button" variant="outlined" @click=${this.#onCopy}>
          <forge-icon slot="start" name="content_copy"></forge-icon>
          <span>Copy</span>
        </forge-button>
        <forge-button id="download-button" variant="outlined" @click=${this.#onDownload}>
          <forge-icon slot="start" name="download"></forge-icon>
          <span>Download</span>
        </forge-button>
      </div>
      <label class="output-label" for="export-output">Export output</label>
      <textarea id="export-output" class="code" readonly rows="12" .value=${this.exportTheme()}></textarea>
      <forge-divider></forge-divider>
      <label class="output-label" for="import-input">Paste theme JSON</label>
      <textarea
        id="import-input"
        class="code"
        rows="6"
        spellcheck="false"
        .value=${this._importText}
        @input=${this.#onImportInput}></textarea>
      <div class="transfer-toolbar">
        <forge-button
          id="import-button"
          variant="raised"
          ?disabled=${!this._importText.trim()}
          @click=${this.#onImport}>
          <forge-icon slot="start" name="palette"></forge-icon>
          <span>Import JSON</span>
        </forge-button>
        <forge-file-picker
          id="import-file"
          accept="application/json,.json"
          compact
          @forge-file-picker-change=${this.#onImportFile}>
          <span>Drop a theme JSON file</span>
        </forge-file-picker>
      </div>
    `;
  }

  //
  // Event handlers
  //

  #onViewChange(evt: CustomEvent<ITabBarChangeEventData>): void {
    this._view = VIEWS[evt.detail.index] ?? 'palette';
  }

  #onFilterInput(evt: Event): void {
    this._filter = (evt.target as HTMLInputElement).value;
  }

  #onModeChange(evt: Event): void {
    const mode = (evt.target as HTMLElement & { value: string }).value as ForgeThemeMode;
    this.#setTheme({ ...this.theme, mode }, null);
  }

  #onResetAll(): void {
    this.resetAllTokens();
  }

  #onGroupToggle(key: string, open: boolean): void {
    const next = new Set(this._openGroups);
    if (open) {
      next.add(key);
    } else {
      next.delete(key);
    }
    this._openGroups = [...next];
  }

  #onKnobChange(knob: 'shapeFactor' | 'spacingScale' | 'fontFamily' | 'fontSize', value: string): void {
    const knobs = { ...this.theme.knobs };
    if (knob === 'shapeFactor' || knob === 'spacingScale') {
      const parsed = Number(value);
      knobs[knob] = value.trim() && Number.isFinite(parsed) ? parsed : null;
    } else {
      knobs[knob] = value;
    }
    this.#setTheme({ ...this.theme, knobs }, null);
  }

  #onSeedChange(key: keyof ForgeThemeSeeds, value: string): void {
    const seeds = { ...this.#resolvedSeeds, [key]: value };
    this.#setTheme({ ...this.theme, seeds }, null);
  }

  #onTargetContrastChange(evt: Event): void {
    const targetContrast = Number((evt.target as HTMLInputElement).value) || 7;
    this.#setTheme({ ...this.theme, generator: { ...this.theme.generator, targetContrast } }, null);
  }

  #onPureOnColorsChange(evt: CustomEvent<boolean>): void {
    this.#setTheme({ ...this.theme, generator: { ...this.theme.generator, pureOnColors: evt.detail } }, null);
  }

  #onGenerate(): void {
    this.generatePalette();
  }

  #onToggleAllContrast(): void {
    this._showAllContrast = !this._showAllContrast;
  }

  #onExportFormatChange(evt: Event): void {
    this.exportFormat = (evt.target as HTMLElement & { value: string }).value as ForgeThemeExportFormat;
  }

  #onImportInput(evt: Event): void {
    this._importText = (evt.target as HTMLTextAreaElement).value;
  }

  #onImport(): void {
    this.importTheme(this._importText);
  }

  async #onImportFile(evt: CustomEvent<IFilePickerChangeEventData>): Promise<void> {
    const file = evt.detail.legalFiles?.[0];
    if (!file) {
      this._messages = ['That file was rejected. Provide a JSON theme file.'];
      return;
    }
    const text = await file.text();
    this._importText = text;
    this.importTheme(text);
  }

  #onPreviewToggle(): void {
    this.preview = !this.preview;
  }

  async #onCopy(): Promise<void> {
    const text = this.exportTheme();
    try {
      await navigator.clipboard.writeText(text);
      this._messages = [];
    } catch {
      this._messages = ['Copying to the clipboard was blocked. Select the export text and copy it manually.'];
    }
  }

  #onDownload(): void {
    const extension = this.exportFormat === 'scss' ? 'scss' : this.exportFormat;
    const blob = new Blob([this.exportTheme()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${this.#fileSafeName}.${extension}`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  //
  // Internals
  //

  get #fileSafeName(): string {
    return (
      this.theme.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || 'forge-theme'
    );
  }

  get #baseTokens(): Readonly<ForgeThemeTokenMap> {
    return this.theme.mode === 'dark' ? FORGE_THEME_DARK_TOKENS : FORGE_THEME_LIGHT_TOKENS;
  }

  get #overrideCount(): number {
    return Object.keys(this.theme.tokens).length;
  }

  get #resolvedSeeds(): ForgeThemeSeeds {
    if (this.theme.seeds) {
      return this.theme.seeds;
    }
    const base = this.#baseTokens;
    const seeds: ForgeThemeSeeds = {};
    for (const key of FORGE_THEME_SEED_KEYS) {
      seeds[key] = this.theme.tokens[key] ?? base[key];
    }
    return seeds;
  }

  get #visibleGroups(): ForgeThemeTokenGroup[] {
    return FORGE_THEME_TOKEN_GROUPS.filter(group => this.#matchingTokens(group).length > 0);
  }

  #matchingTokens(group: ForgeThemeTokenGroup): string[] {
    if (!this._filter.trim()) {
      return group.tokens;
    }
    if (this.#matchesFilter(group.label)) {
      return group.tokens;
    }
    return group.tokens.filter(token => this.#matchesFilter(token));
  }

  #matchesFilter(subject: string): boolean {
    const filter = this._filter.trim().toLowerCase();
    return !filter || subject.toLowerCase().includes(filter);
  }

  #isGroupOpen(key: string): boolean {
    // An active filter expands whatever it matched, so hits are never hidden.
    return !!this._filter.trim() || this._openGroups.includes(key);
  }

  #valueFor(token: string): string {
    return this.theme.tokens[token] ?? this.#baseTokens[token] ?? '';
  }

  #hexFor(value: string): string {
    const parsed = parseColor(value);
    return parsed ? toHex(parsed) : '#000000';
  }

  #setTheme(theme: ForgeTheme, token: string | null): void {
    this.theme = normalizeForgeTheme(theme) ?? createForgeTheme();
    this.#emitChange(token);
  }

  #syncPreviewStyle(): void {
    if (!this.preview) {
      this.#removePreviewStyle();
      return;
    }
    if (!this.#styleElement) {
      this.#styleElement = document.createElement('style');
      this.#styleElement.id = FORGE_THEME_PREVIEW_STYLE_ID;
      document.head.appendChild(this.#styleElement);
    }
    this.#styleElement.textContent = this.getPreviewCss();
  }

  #removePreviewStyle(): void {
    this.#styleElement?.remove();
    this.#styleElement = null;
  }

  #emitChange(token: string | null): void {
    this.dispatchEvent(
      new CustomEvent<ThemeEditorChangeEventData>('forge-theme-editor-change', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: { theme: this.theme, token }
      })
    );
  }

  #emitPreview(): void {
    this.dispatchEvent(
      new CustomEvent<ThemeEditorPreviewEventData>('forge-theme-editor-preview', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: { preview: this.preview, css: this.preview ? this.getPreviewCss() : '' }
      })
    );
  }
}

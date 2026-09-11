import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import {
  defineButtonComponent,
  defineCheckboxComponent,
  defineChipComponent,
  defineChipSetComponent,
  defineCircularProgressComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineInlineMessageComponent,
  defineLabelComponent,
  defineLinearProgressComponent,
  defineOptionComponent,
  defineRadioComponent,
  defineRadioGroupComponent,
  defineSelectComponent,
  defineSwitchComponent,
  defineTextFieldComponent,
  IconRegistry
} from '@tylertech/forge';
import {
  tylIconAlertCircleOutline,
  tylIconAlertOutline,
  tylIconCheckCircleOutline,
  tylIconClose,
  tylIconDownload,
  tylIconInformationOutline
} from '@tylertech/tyler-icons';

import styles from './theme-showcase.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-theme-showcase': ThemeShowcaseComponent;
  }
}

export const ThemeShowcaseComponentTagName: keyof HTMLElementTagNameMap = 'forge-theme-showcase';

/** A titled, captioned group of samples. */
export interface ThemeShowcaseSection {
  /** Stable identifier. Drives the heading id and the `data-section` hook. */
  id: string;
  /** The section heading. */
  title: string;
  /** One line telling the reader what the samples prove. */
  caption: string;
}

/**
 * The sections, in reading order. Exported so a caller — or a test — can
 * enumerate the coverage without scraping the template.
 *
 * The captions say what to look *for* rather than what is on screen: a customer
 * can already see that there are four buttons, what they cannot see is which
 * token each one spends.
 */
export const THEME_SHOWCASE_SECTIONS = {
  buttons: {
    id: 'buttons',
    title: 'Buttons',
    caption:
      'Spends primary and on-primary. Check the label on the filled button, and that the disabled button still reads as unavailable rather than invisible.'
  },
  formFields: {
    id: 'form-fields',
    title: 'Form fields',
    caption:
      'Outline, label and support text. The invalid field should catch the eye without drowning the fields either side of it.'
  },
  selectionControls: {
    id: 'selection-controls',
    title: 'Selection controls',
    caption: 'Checked, indeterminate and disabled marks all draw on primary against the field outline.'
  },
  selectAndChips: {
    id: 'select-and-chips',
    title: 'Select and chips',
    caption: 'A selected chip and a closed select share the primary and container ramps.'
  },
  status: {
    id: 'status',
    title: 'Status messaging',
    caption: 'The one place the info, success, warning and error ramps appear side by side.'
  },
  surfaces: {
    id: 'surfaces',
    title: 'Surfaces',
    caption: 'Five nested levels. If any two of these look the same, the surface ramp has no separation to offer.'
  },
  typography: {
    id: 'typography',
    title: 'Typography',
    caption: 'Three emphasis levels. If the low line is hard to read, placeholder and disabled text will be too.'
  },
  progress: {
    id: 'progress',
    title: 'Progress',
    caption: 'Indicator against track. The pair has to stay distinguishable at the small sizes progress runs at.'
  }
} as const satisfies Record<string, ThemeShowcaseSection>;

/**
 * One message per status theme. Every status token a theme can set is only
 * visible here, so the set is deliberately exhaustive rather than illustrative.
 */
const THEME_SHOWCASE_STATUSES = [
  {
    theme: 'info',
    icon: 'information_outline',
    title: 'Scheduled maintenance',
    message: 'The portal is read-only Sunday from 1:00 to 3:00 AM.'
  },
  {
    theme: 'success',
    icon: 'check_circle_outline',
    title: 'Payment received',
    message: 'Receipt 4821 was emailed to the payer.'
  },
  {
    theme: 'warning',
    icon: 'alert_outline',
    title: 'Expiring soon',
    message: 'Two permits expire within the next 30 days.'
  },
  {
    theme: 'error',
    icon: 'alert_circle_outline',
    title: 'Upload failed',
    message: 'That file is larger than the 25 MB limit.'
  }
] as const;

/**
 * The surface ramp, outermost first. Rendered nested rather than side by side
 * because that is how an application stacks them, and adjacent-but-nested is
 * the hardest test of whether two steps are actually distinguishable.
 */
const THEME_SHOWCASE_SURFACES = [
  'surface',
  'surface-container-minimum',
  'surface-container-low',
  'surface-container-medium',
  'surface-container-high'
] as const;

/** The text emphasis ramp, most prominent first. */
const THEME_SHOWCASE_TEXT_EMPHASIS = [
  { level: 'high', token: 'text-high', sample: 'Body copy, field values and anything a user has to read closely.' },
  { level: 'medium', token: 'text-medium', sample: 'Captions, support text and secondary detail.' },
  { level: 'low', token: 'text-low', sample: 'Placeholder and disabled text.' }
] as const;

/**
 * @tag forge-theme-showcase
 *
 * @summary Renders representative Forge components in representative states so a
 * theme can be judged on real UI.
 *
 * @description
 * The showcase is deliberately inert and deliberately theme-unaware: it declares
 * no colors of its own and takes no theme. It reads whatever `--forge-theme-*`
 * custom properties it inherits, which is what makes it a fair preview — every
 * color on screen comes from a Forge token or a Forge component's own default.
 */
@customElement(ThemeShowcaseComponentTagName)
export class ThemeShowcaseComponent extends LitElement {
  static {
    defineButtonComponent();
    defineCheckboxComponent();
    defineChipComponent();
    defineChipSetComponent();
    defineCircularProgressComponent();
    // The chip's remove button is created by the chip itself, so the icon button
    // and the close icon have to be available even though neither is authored here.
    defineIconButtonComponent();
    defineIconComponent();
    defineInlineMessageComponent();
    defineLabelComponent();
    defineLinearProgressComponent();
    defineOptionComponent();
    defineRadioComponent();
    defineRadioGroupComponent();
    defineSelectComponent();
    defineSwitchComponent();
    defineTextFieldComponent();

    IconRegistry.define([
      tylIconAlertCircleOutline,
      tylIconAlertOutline,
      tylIconCheckCircleOutline,
      tylIconClose,
      tylIconDownload,
      tylIconInformationOutline
    ]);
  }

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <div class="showcase">
        ${this.#section(THEME_SHOWCASE_SECTIONS.buttons, this.#buttons)}
        ${this.#section(THEME_SHOWCASE_SECTIONS.formFields, this.#formFields)}
        ${this.#section(THEME_SHOWCASE_SECTIONS.selectionControls, this.#selectionControls)}
        ${this.#section(THEME_SHOWCASE_SECTIONS.selectAndChips, this.#selectAndChips)}
        ${this.#section(THEME_SHOWCASE_SECTIONS.status, this.#status)}
        ${this.#section(THEME_SHOWCASE_SECTIONS.surfaces, this.#surfaces)}
        ${this.#section(THEME_SHOWCASE_SECTIONS.typography, this.#typography)}
        ${this.#section(THEME_SHOWCASE_SECTIONS.progress, this.#progress)}
      </div>
    `;
  }

  /**
   * Wraps a sample group in a labelled region. The heading id is derived from the
   * section id so the ids stay unique without a counter.
   */
  #section(section: ThemeShowcaseSection, samples: TemplateResult): TemplateResult {
    const headingId = `${section.id}-heading`;
    return html`
      <section class="section" data-section=${section.id} aria-labelledby=${headingId}>
        <h2 class="section-title" id=${headingId}>${section.title}</h2>
        <p class="section-caption">${section.caption}</p>
        <div class="samples">${samples}</div>
      </section>
    `;
  }

  readonly #buttons: TemplateResult = html`
    <forge-button variant="raised">Save changes</forge-button>
    <forge-button id="showcase-button-icon" variant="raised">
      <forge-icon slot="start" name="download"></forge-icon>
      <span>Export</span>
    </forge-button>
    <forge-button variant="outlined">Cancel</forge-button>
    <forge-button variant="text">Reset</forge-button>
    <forge-button id="showcase-button-disabled" variant="raised" disabled>Submit for review</forge-button>
    <!-- Last, and on its own line where it can be: the link variant has no
         height of its own, so it reads as stray text beside a filled button. -->
    <forge-button variant="link">Learn more</forge-button>
  `;

  readonly #formFields: TemplateResult = html`
    <forge-text-field>
      <label slot="label" for="showcase-name">Full name</label>
      <input id="showcase-name" type="text" value="Avery Delgado" autocomplete="off" />
    </forge-text-field>
    <forge-text-field id="showcase-field-required" required>
      <label slot="label" for="showcase-parcel">Parcel number</label>
      <input id="showcase-parcel" type="text" value="18-42-007" required autocomplete="off" />
    </forge-text-field>
    <forge-text-field id="showcase-field-invalid" invalid>
      <label slot="label" for="showcase-email">Email address</label>
      <!-- The support text carries the error, so the input has to point at it
           explicitly: the field renders it into a slot, not into a label. -->
      <input
        id="showcase-email"
        type="email"
        value="avery@"
        aria-invalid="true"
        aria-describedby="showcase-email-error"
        autocomplete="off" />
      <span id="showcase-email-error" slot="support-text">Enter an address in the form name@domain.com.</span>
    </forge-text-field>
    <forge-text-field id="showcase-field-disabled" disabled>
      <label slot="label" for="showcase-case">Case number</label>
      <input id="showcase-case" type="text" value="CR-2024-0188" disabled autocomplete="off" />
    </forge-text-field>
  `;

  readonly #selectionControls: TemplateResult = html`
    <div class="control-stack">
      <forge-checkbox id="showcase-checkbox-unchecked">Mail a paper copy</forge-checkbox>
      <forge-checkbox id="showcase-checkbox-checked" checked>Email a receipt</forge-checkbox>
      <forge-checkbox id="showcase-checkbox-indeterminate" indeterminate>Notify all reviewers</forge-checkbox>
      <forge-checkbox id="showcase-checkbox-disabled" disabled>Send text updates</forge-checkbox>
    </div>
    <forge-radio-group id="showcase-radio-group" class="control-stack">
      <forge-label legend>Preferred contact</forge-label>
      <forge-radio id="showcase-radio-email" name="showcase-contact" value="email" checked>Email</forge-radio>
      <forge-radio id="showcase-radio-phone" name="showcase-contact" value="phone">Phone</forge-radio>
      <forge-radio id="showcase-radio-mail" name="showcase-contact" value="mail" disabled>Mail</forge-radio>
    </forge-radio-group>
    <forge-switch id="showcase-switch" checked>Autosave drafts</forge-switch>
  `;

  readonly #selectAndChips: TemplateResult = html`
    <forge-select id="showcase-select" label="Department" value="permits">
      <forge-option value="permits">Permits and inspections</forge-option>
      <forge-option value="utilities">Utility billing</forge-option>
      <forge-option value="courts">Courts</forge-option>
    </forge-select>
    <!--
      One set per state, on purpose. A chip inherits its type, disabled and
      dense state from its parent set when it connects, so a mixed set collapses
      to whatever the set declares. The set is the right place to declare them.
    -->
    <div class="chip-sets">
      <forge-chip-set id="showcase-chip-set-filter" type="filter" aria-label="Status filters">
        <forge-chip id="showcase-chip-selected" value="open" selected>Open</forge-chip>
        <forge-chip value="overdue">Overdue</forge-chip>
      </forge-chip-set>
      <forge-chip-set id="showcase-chip-set-input" type="input" aria-label="Applied filters">
        <forge-chip id="showcase-chip-removable" value="mine" remove-button-label="Remove the assigned to me filter"
          >Assigned to me</forge-chip
        >
      </forge-chip-set>
      <forge-chip-set id="showcase-chip-set-disabled" type="action" disabled aria-label="Unavailable filters">
        <forge-chip id="showcase-chip-disabled" value="archived">Archived</forge-chip>
      </forge-chip-set>
    </div>
  `;

  get #status(): TemplateResult {
    return html`
      ${repeat(
        THEME_SHOWCASE_STATUSES,
        status => status.theme,
        status => html`
          <forge-inline-message class="status" data-status=${status.theme} theme=${status.theme}>
            <forge-icon slot="icon" name=${status.icon}></forge-icon>
            <span slot="title">${status.title}</span>
            <span>${status.message}</span>
          </forge-inline-message>
        `
      )}
    `;
  }

  get #surfaces(): TemplateResult {
    // Built from the inside out so each level ends up as a child of the level
    // above it, which is what puts two adjacent steps of the ramp in contact.
    return THEME_SHOWCASE_SURFACES.reduceRight<TemplateResult>(
      (nested, token) => html`
        <div class="surface" data-surface=${token}>
          <span class="surface-token">${token}</span>
          ${nested}
        </div>
      `,
      html``
    );
  }

  get #typography(): TemplateResult {
    return html`
      ${repeat(
        THEME_SHOWCASE_TEXT_EMPHASIS,
        entry => entry.level,
        entry => html`
          <p class="text-sample" data-emphasis=${entry.level}>
            <span class="text-sample-token">${entry.token}</span>
            <span class="text-sample-copy">${entry.sample}</span>
          </p>
        `
      )}
    `;
  }

  get #progress(): TemplateResult {
    return html`
      <div class="progress-linear">
        <span class="progress-label" id="showcase-linear-label">Uploading 6 of 10 documents</span>
        <forge-linear-progress
          id="showcase-linear-progress"
          determinate
          .progress=${0.6}
          aria-labelledby="showcase-linear-label"></forge-linear-progress>
      </div>
      <div class="progress-circular">
        <forge-circular-progress
          id="showcase-circular-progress"
          determinate
          track
          .progress=${0.75}
          aria-label="Records processed"></forge-circular-progress>
        <span class="progress-label">75% processed</span>
      </div>
    `;
  }
}

import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { MultiSelectHeaderComponent } from './multi-select-header';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ButtonComponent } from '@tylertech/forge';

interface MultiSelectHeaderFixtureConfig {
  text?: string;
  noBorder?: boolean;
  selectAllButtonText?: string;
}

class MultiSelectHeaderHarness {
  constructor(public el: MultiSelectHeaderComponent) {}

  public get toolbarElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('forge-toolbar') as HTMLElement;
  }

  public get displayText(): string {
    const span = this.el.shadowRoot!.querySelector('span.selected-text');
    return span?.textContent?.trim() || '';
  }

  public get startSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="start"]') as HTMLSlotElement;
  }

  public get actionsSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="actions"]') as HTMLSlotElement;
  }

  public get selectAllButton(): ButtonComponent {
    return this.el.shadowRoot!.querySelector('#select-all-button') as ButtonComponent;
  }

  public get selectAllButtonTextSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="select-all-button-text"]') as HTMLSlotElement;
  }
}

describe('MultiSelectHeaderComponent', () => {
  it('should render', async () => {
    const harness = await createFixture();

    expect(harness.el).to.be.instanceOf(MultiSelectHeaderComponent);
    expect(harness.el.shadowRoot).to.be.ok;
    expect(harness.toolbarElement).to.be.ok;
  });

  it('should have expected default state', async () => {
    const harness = await createFixture();

    expect(harness.el.text).to.equal('');
    expect(harness.el.noBorder).to.be.true;
    expect(harness.displayText).to.equal('');
  });

  describe('text property', () => {
    it('should display custom text', async () => {
      const harness = await createFixture({ text: '3 items selected' });

      expect(harness.el.text).to.equal('3 items selected');
      expect(harness.displayText).to.equal('3 items selected');
    });

    it('should display different text formats', async () => {
      const harness = await createFixture({ text: '5 rows selected for processing' });

      expect(harness.el.text).to.equal('5 rows selected for processing');
      expect(harness.displayText).to.equal('5 rows selected for processing');
    });

    it('should display empty text when not provided', async () => {
      const harness = await createFixture();

      expect(harness.el.text).to.equal('');
      expect(harness.displayText).to.equal('');
    });

    it('should update display when text property changes', async () => {
      const harness = await createFixture({ text: '2 items selected' });

      expect(harness.displayText).to.equal('2 items selected');

      harness.el.text = '5 items selected';
      await harness.el.updateComplete;

      expect(harness.displayText).to.equal('5 items selected');
    });
  });

  describe('noBorder property', () => {
    it('should set no-border on toolbar when noBorder is true', async () => {
      const harness = await createFixture({ noBorder: true });

      expect(harness.el.noBorder).to.be.true;
      expect(harness.toolbarElement.hasAttribute('no-border')).to.be.true;
    });

    it('should not set no-border on toolbar when noBorder is false', async () => {
      const harness = await createFixture({ noBorder: false });

      expect(harness.el.noBorder).to.be.false;
      expect(harness.toolbarElement.hasAttribute('no-border')).to.be.false;
    });

    it('should update toolbar when noBorder changes', async () => {
      const harness = await createFixture({ noBorder: false });

      expect(harness.toolbarElement.hasAttribute('no-border')).to.be.false;

      harness.el.noBorder = true;
      await harness.el.updateComplete;

      expect(harness.toolbarElement.hasAttribute('no-border')).to.be.true;
    });
  });

  describe('slots', () => {
    it('should have start slot available', async () => {
      const harness = await createFixture();

      expect(harness.startSlot).to.be.ok;
      expect(harness.startSlot.name).to.equal('start');
    });

    it('should have actions slot available', async () => {
      const harness = await createFixture();

      expect(harness.actionsSlot).to.be.ok;
      expect(harness.actionsSlot.name).to.equal('actions');
    });

    it('should display custom start content when provided', async () => {
      const el = await fixture<MultiSelectHeaderComponent>(html`
        <forge-multi-select-header text="2 items selected">
          <div slot="start" class="custom-content">Custom Header</div>
        </forge-multi-select-header>
      `);

      const customContent = el.querySelector('.custom-content');
      expect(customContent).to.be.ok;
      expect(customContent?.textContent).to.equal('Custom Header');
    });

    it('should display action buttons when provided', async () => {
      const el = await fixture<MultiSelectHeaderComponent>(html`
        <forge-multi-select-header text="2 items selected">
          <div slot="actions">
            <button class="test-button">Test Action</button>
          </div>
        </forge-multi-select-header>
      `);

      const actionButton = el.querySelector('.test-button');
      expect(actionButton).to.be.ok;
      expect(actionButton?.textContent).to.equal('Test Action');
    });

    it('content should project into the select-all-button-text slot', async () => {
      const harness = await createFixture();
      expect(harness.selectAllButtonTextSlot.assignedNodes().length).to.greaterThanOrEqual(1);
    });
  });
});

async function createFixture({
  text,
  noBorder,
  selectAllButtonText = 'Select all'
}: MultiSelectHeaderFixtureConfig = {}): Promise<MultiSelectHeaderHarness> {
  const el = await fixture<MultiSelectHeaderComponent>(html`
    <forge-multi-select-header .text=${text ?? ''} .noBorder=${noBorder ?? true}>
      <div slot="select-all-button-text" id="select-all-button-text">${ifDefined(selectAllButtonText)}</div>
    </forge-multi-select-header>
  `);
  return new MultiSelectHeaderHarness(el);
}

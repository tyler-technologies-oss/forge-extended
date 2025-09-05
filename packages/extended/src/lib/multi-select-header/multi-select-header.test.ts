import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { MultiSelectHeaderComponent } from './multi-select-header';

import './';

interface MultiSelectHeaderFixtureConfig {
  selectedCount?: number;
  selectedText?: string;
  noBorder?: boolean;
}

class MultiSelectHeaderHarness {
  constructor(public el: MultiSelectHeaderComponent) {}

  public get toolbarElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('forge-toolbar') as HTMLElement;
  }

  public get selectedCountText(): string {
    const span = this.el.shadowRoot!.querySelector('span.selected-text');
    return span?.textContent?.trim() || '';
  }

  public get startSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="start"]') as HTMLSlotElement;
  }

  public get actionsSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="actions"]') as HTMLSlotElement;
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

    expect(harness.el.selectedCount).to.equal(0);
    expect(harness.el.selectedText).to.equal('of items selected');
    expect(harness.el.noBorder).to.be.true;
    expect(harness.selectedCountText).to.equal('0 of items selected');
  });

  describe('selectedCount property', () => {
    it('should display count with default text for selectedCount = 1', async () => {
      const harness = await createFixture({ selectedCount: 1 });

      expect(harness.el.selectedCount).to.equal(1);
      expect(harness.selectedCountText).to.equal('1 of items selected');
    });

    it('should display count with default text for selectedCount > 1', async () => {
      const harness = await createFixture({ selectedCount: 5 });

      expect(harness.el.selectedCount).to.equal(5);
      expect(harness.selectedCountText).to.equal('5 of items selected');
    });

    it('should display count with default text for selectedCount = 0', async () => {
      const harness = await createFixture({ selectedCount: 0 });

      expect(harness.el.selectedCount).to.equal(0);
      expect(harness.selectedCountText).to.equal('0 of items selected');
    });

    it('should update text when selectedCount changes', async () => {
      const harness = await createFixture({ selectedCount: 3 });

      expect(harness.selectedCountText).to.equal('3 of items selected');

      harness.el.selectedCount = 1;
      await harness.el.updateComplete;

      expect(harness.selectedCountText).to.equal('1 of items selected');
    });
  });

  describe('selectedText property', () => {
    it('should use custom selectedText when provided', async () => {
      const harness = await createFixture({
        selectedCount: 3,
        selectedText: 'rows selected for processing'
      });

      expect(harness.el.selectedText).to.equal('rows selected for processing');
      expect(harness.selectedCountText).to.equal('3 rows selected for processing');
    });

    it('should display empty text when selectedText is empty', async () => {
      const harness = await createFixture({
        selectedCount: 2,
        selectedText: ''
      });

      expect(harness.selectedCountText).to.equal('2 ');
    });

    it('should update text when selectedText changes', async () => {
      const harness = await createFixture({ selectedCount: 4 });

      expect(harness.selectedCountText).to.equal('4 of items selected');

      harness.el.selectedText = 'custom items selected';
      await harness.el.updateComplete;

      expect(harness.selectedCountText).to.equal('4 custom items selected');
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
        <forge-multi-select-header selected-count="2">
          <div slot="start" class="custom-content">Custom Header</div>
        </forge-multi-select-header>
      `);

      const customContent = el.querySelector('.custom-content');
      expect(customContent).to.be.ok;
      expect(customContent?.textContent).to.equal('Custom Header');
    });

    it('should display action buttons when provided', async () => {
      const el = await fixture<MultiSelectHeaderComponent>(html`
        <forge-multi-select-header selected-count="2">
          <div slot="actions">
            <button class="test-button">Test Action</button>
          </div>
        </forge-multi-select-header>
      `);

      const actionButton = el.querySelector('.test-button');
      expect(actionButton).to.be.ok;
      expect(actionButton?.textContent).to.equal('Test Action');
    });
  });
});

async function createFixture({
  selectedCount,
  selectedText,
  noBorder
}: MultiSelectHeaderFixtureConfig = {}): Promise<MultiSelectHeaderHarness> {
  const el = await fixture<MultiSelectHeaderComponent>(html`
    <forge-multi-select-header
      .selectedCount=${selectedCount ?? 0}
      .selectedText=${selectedText ?? 'of items selected'}
      .noBorder=${noBorder ?? true}>
    </forge-multi-select-header>
  `);
  return new MultiSelectHeaderHarness(el);
}

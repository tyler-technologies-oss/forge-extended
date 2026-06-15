import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import type { RichTextEditorComponent } from './rich-text-editor';
import type { RichTextContextComponent } from './rich-text-context';
import type { RichTextContentComponent } from './rich-text-content';
import './rich-text-editor';
import './features/rte-bold';

async function waitForEditor(el: RichTextEditorComponent): Promise<RichTextContextComponent> {
  await new Promise(resolve => setTimeout(resolve, 100));
  const context = el.shadowRoot!.querySelector('forge-rich-text-context') as RichTextContextComponent;
  await context?.updateComplete;
  return context;
}

describe('RTE Content Validation', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor>
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.shadowRoot).not.to.be.null;
  });

  it('should have maxLength property with default value of 0', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor>
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.maxLength).to.equal(0);
  });

  it('should set maxLength property', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor max-length="100">
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.maxLength).to.equal(100);
  });

  it('should have showCharacterCount property with default value of false', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor>
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.showCharacterCount).to.be.false;
  });

  it('should set showCharacterCount property', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor show-character-count>
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.showCharacterCount).to.be.true;
  });

  it('should have showWordCount property with default value of false', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor>
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.showWordCount).to.be.false;
  });

  it('should set showWordCount property', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor show-word-count>
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.showWordCount).to.be.true;
  });

  it('should have errorMessage property with default empty string', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor>
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.errorMessage).to.equal('');
  });

  it('should set errorMessage property', async () => {
    const el = await fixture<RichTextEditorComponent>(html`
      <forge-rich-text-editor error-message="Custom error">
        <forge-rte-bold></forge-rte-bold>
      </forge-rich-text-editor>
    `);

    expect(el.errorMessage).to.equal('Custom error');
  });

  describe('Character Count Display', () => {
    it('should not display character count by default', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl).to.be.null;
    });

    it('should display character count when enabled', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor show-character-count>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl).not.to.be.null;
      expect(countsEl?.textContent).to.include('0 characters');
    });

    it('should display character count with max length', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor show-character-count max-length="100">
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl).not.to.be.null;
      expect(countsEl?.textContent).to.include('0 / 100 characters');
    });

    it('should update character count when typing', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor show-character-count>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      await sendKeys({ type: 'Hello world' });
      await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl?.textContent).to.include('11 characters');
    });
  });

  describe('Word Count Display', () => {
    it('should not display word count by default', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl).to.be.null;
    });

    it('should display word count when enabled', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor show-word-count>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl).not.to.be.null;
      expect(countsEl?.textContent).to.include('0 words');
    });

    it('should update word count when typing', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor show-word-count>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      await sendKeys({ type: 'Hello world test' });
      await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl?.textContent).to.include('3 words');
    });

    it('should display both character and word count', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor show-character-count show-word-count>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl).not.to.be.null;
      expect(countsEl?.textContent).to.include('0 characters');
      expect(countsEl?.textContent).to.include('0 words');
      expect(countsEl?.textContent).to.include('•');
    });
  });

  describe('Max Length Validation', () => {
    it('should not show error when content is under max length', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor max-length="100">
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      await sendKeys({ type: 'Hello' });
      await waitForEditor(el);

      const errorEl = context?.shadowRoot?.querySelector('.editor-error');
      expect(errorEl).to.be.null;
    });

    it('should show error when content exceeds max length', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor max-length="5">
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      await sendKeys({ type: 'Hello world' });
      await waitForEditor(el);

      const errorEl = context?.shadowRoot?.querySelector('.editor-error');
      expect(errorEl).not.to.be.null;
      expect(errorEl?.textContent).to.include('exceeds maximum length');
    });

    it('should display custom error message when provided', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor max-length="5" error-message="Too long!">
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      await sendKeys({ type: 'Hello world' });
      await waitForEditor(el);

      const errorEl = context?.shadowRoot?.querySelector('.editor-error');
      expect(errorEl).not.to.be.null;
      expect(errorEl?.textContent).to.equal('Too long!');
    });

    it('should fire validation event when content exceeds max length', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor max-length="5">
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      let validationFired = false;
      let validationDetail: { isValid: boolean; errors: string[] } | null = null;

      el.addEventListener('validation', ((evt: CustomEvent) => {
        validationFired = true;
        validationDetail = evt.detail;
      }) as EventListener);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      await sendKeys({ type: 'Hello world' });
      const context = await waitForEditor(el);

      expect(validationFired).to.be.true;
      expect(validationDetail?.isValid).to.be.false;
      expect(validationDetail?.errors).to.have.lengthOf(1);
      expect(validationDetail?.errors[0]).to.include('exceeds maximum length');
    });

    it('should fire validation event when content becomes valid again', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor max-length="10" content="<p>Hello world</p>">
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      let validationFired = false;
      let validationDetail: { isValid: boolean; errors: string[] } | null = null;

      el.addEventListener('validation', ((evt: CustomEvent) => {
        validationFired = true;
        validationDetail = evt.detail;
      }) as EventListener);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      // Select all and delete to make content valid
      await sendKeys({ down: 'Control' });
      await sendKeys({ press: 'a' });
      await sendKeys({ up: 'Control' });
      await sendKeys({ press: 'Backspace' });
      await sendKeys({ type: 'Hi' });
      const context = await waitForEditor(el);

      expect(validationFired).to.be.true;
      expect(validationDetail?.isValid).to.be.true;
      expect(validationDetail?.errors).to.have.lengthOf(0);
    });
  });

  describe('Error State Accessibility', () => {
    it('should have role="alert" on error message', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor max-length="5">
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      await sendKeys({ type: 'Hello world' });
      await waitForEditor(el);

      const errorEl = context?.shadowRoot?.querySelector('.editor-error');
      expect(errorEl?.getAttribute('role')).to.equal('alert');
    });

    it('should have aria-live on error message', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor max-length="5">
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const content = context.querySelector('forge-rich-text-content') as RichTextContentComponent;
      const editorEl = content?.shadowRoot?.querySelector('.ProseMirror') as HTMLElement;
      editorEl?.focus();

      await sendKeys({ type: 'Hello world' });
      await waitForEditor(el);

      const errorEl = context?.shadowRoot?.querySelector('.editor-error');
      expect(errorEl?.getAttribute('aria-live')).to.equal('polite');
    });

    it('should have aria-live on character count', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor show-character-count>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl?.getAttribute('aria-live')).to.equal('polite');
    });

    it('should have aria-atomic on character count', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor show-character-count>
          <forge-rte-bold></forge-rte-bold>
        </forge-rich-text-editor>
      `);

      const context = await waitForEditor(el);

      const countsEl = context?.shadowRoot?.querySelector('.editor-counts');
      expect(countsEl?.getAttribute('aria-atomic')).to.equal('true');
    });
  });
});

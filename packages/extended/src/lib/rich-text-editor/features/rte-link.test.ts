import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import type { Editor } from '@tiptap/core';
import { RichTextEditorComponent } from '../rich-text-editor';
import { RichTextFeatureLinkComponent } from './rte-link';

import '../rich-text-editor';
import './rte-link';

describe('RTE Link Feature', () => {
  it('should contain shadow root', async () => {
    const harness = await createFixture();

    expect(harness.linkFeature.shadowRoot).to.be.ok;
  });

  it('should have expected default label', async () => {
    const harness = await createFixture();

    expect(harness.linkFeature.label).to.equal('Link');
  });

  it('should set custom label', async () => {
    const harness = await createFixture({ label: 'Insert Link' });

    expect(harness.linkFeature.label).to.equal('Insert Link');
    expect(harness.button().getAttribute('aria-label')).to.equal('Insert Link');
  });

  it('should render link button', async () => {
    const harness = await createFixture();

    expect(harness.button()).to.exist;
  });

  it('should configure link extension', async () => {
    const harness = await createFixture();

    expect(harness.linkFeature.extensions).to.have.lengthOf(1);
    expect(harness.linkFeature.extensions[0].name).to.equal('link');
  });

  it('should render popover element', async () => {
    const harness = await createFixture();

    expect(harness.popover()).to.exist;
  });

  it('should render text field in popover', async () => {
    const harness = await createFixture();

    const textField = harness.linkFeature.shadowRoot!.querySelector('forge-text-field');
    expect(textField).to.exist;
  });

  it('should disable button when editor is disabled', async () => {
    const harness = await createFixture({ disabled: true });

    expect(harness.button().hasAttribute('disabled')).to.be.true;
  });

  it('should disable button when editor is readonly', async () => {
    const harness = await createFixture({ readonly: true });

    expect(harness.button().hasAttribute('disabled')).to.be.true;
  });

  it('should show active state when cursor is in link', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content with a link
    editor.commands.setContent('<p><a href="https://example.com">test link</a></p>');
    // Position cursor inside the link
    editor.commands.setTextSelection(5);
    await harness.waitForUpdate();

    expect(harness.button().hasAttribute('pressed')).to.be.true;
  });

  it('should not show active state when cursor is not in link', async () => {
    const harness = await createFixture();

    expect(harness.button().hasAttribute('pressed')).to.be.false;
  });

  it('should not show active state in plain text', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content without link
    editor.commands.setContent('<p>plain text</p>');
    editor.commands.setTextSelection(5);
    await harness.waitForUpdate();

    expect(harness.button().hasAttribute('pressed')).to.be.false;
  });

  it('should handle popover close event', async () => {
    const harness = await createFixture();
    const popover = harness.popover();

    // Simulate popover close event
    const toggleEvent = new CustomEvent('forge-popover-toggle', {
      detail: { newState: 'closed' },
      bubbles: true
    });
    popover.dispatchEvent(toggleEvent);
    await harness.waitForUpdate();

    // Verify popover anchor is cleared (popover should be closed)
    expect(popover.open).to.be.false;
  });

  it('should create link from selected text', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content and select text
    editor.commands.setContent('<p>test text</p>');
    editor.commands.setTextSelection({ from: 1, to: 10 });
    await harness.waitForUpdate();

    // Apply link using TipTap command directly (simulating full flow)
    editor.chain().focus().setLink({ href: 'https://example.com' }).run();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('<a');
    expect(output).to.include('href="https://example.com"');
    expect(output).to.include('test text');
  });

  it('should handle empty link href', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content with selected text
    editor.commands.setContent('<p>test text</p>');
    editor.commands.setTextSelection({ from: 1, to: 10 });
    await harness.waitForUpdate();

    // Try to set link with empty href - TipTap still creates the link element
    editor.chain().focus().setLink({ href: '' }).run();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    // Empty href creates a link with empty href attribute
    expect(output).to.include('href=""');
  });

  it('should remove link when unset', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content with a link
    editor.commands.setContent('<p><a href="https://example.com">test link</a></p>');
    editor.commands.setTextSelection(5);
    await harness.waitForUpdate();

    // Verify link exists
    expect(harness.button().hasAttribute('pressed')).to.be.true;

    // Remove link
    editor.chain().focus().unsetLink().run();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).not.to.include('<a');
    expect(output).to.include('test link');
  });

  it('should preserve text when removing link', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    const linkText = 'preserved text';
    editor.commands.setContent(`<p><a href="https://example.com">${linkText}</a></p>`);
    editor.commands.setTextSelection(5);
    await harness.waitForUpdate();

    // Remove link
    editor.chain().focus().unsetLink().run();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include(linkText);
    expect(output).not.to.include('<a');
  });

  it('should handle multiple links in document', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content with multiple links
    editor.commands.setContent(
      '<p><a href="https://example.com">link1</a> and <a href="https://test.com">link2</a></p>'
    );
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('href="https://example.com"');
    expect(output).to.include('href="https://test.com"');
  });

  it('should update existing link href', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content with a link (including the attributes TipTap adds)
    editor.commands.setContent(
      '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://example.com">test link</a></p>'
    );
    // Select the entire link content
    editor.commands.setTextSelection({ from: 1, to: 10 });
    await harness.waitForUpdate();

    // Update link href
    editor.chain().focus().setLink({ href: 'https://newurl.com' }).run();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('href="https://newurl.com"');
    expect(output).not.to.include('href="https://example.com"');
    expect(output).to.include('test link');
  });

  it('should handle link with target attribute', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content and select text
    editor.commands.setContent('<p>test text</p>');
    editor.commands.setTextSelection({ from: 1, to: 10 });
    await harness.waitForUpdate();

    // Apply link with target - TipTap Link extension adds target="_blank" by default
    editor.chain().focus().setLink({ href: 'https://example.com', target: '_blank' }).run();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('href="https://example.com"');
    expect(output).to.include('target="_blank"');
  });
});

interface LinkFixtureOptions {
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
}

interface LinkFixture {
  el: RichTextEditorComponent;
  linkFeature: RichTextFeatureLinkComponent;
  button: () => HTMLElement;
  popover: () => HTMLElement;
  getInput: () => HTMLInputElement;
  getApplyButton: () => HTMLElement | null;
  getRemoveButton: () => HTMLElement | null;
  getCancelButton: () => HTMLElement | null;
  getErrorMessage: () => HTMLElement | null;
  clickButton: () => Promise<void>;
  getEditor: () => Promise<Editor>;
  waitForUpdate: () => Promise<void>;
}

async function createFixture(options: LinkFixtureOptions = {}): Promise<LinkFixture> {
  const el = await fixture<RichTextEditorComponent>(html`
    <forge-rich-text-editor ?disabled=${options.disabled} ?readonly=${options.readonly}>
      <forge-rte-link label=${options.label || 'Link'}></forge-rte-link>
    </forge-rich-text-editor>
  `);

  const linkFeature = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
  const contextComponent = el.shadowRoot!.querySelector('forge-rich-text-context')!;

  // Wait for editor to initialize
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    el,
    linkFeature,
    button: () =>
      linkFeature.shadowRoot!.querySelector('forge-rte-tool-button')!.shadowRoot!.querySelector('forge-icon-button')!,
    popover: () => linkFeature.shadowRoot!.querySelector('forge-popover')!,
    getInput: () => linkFeature.shadowRoot!.querySelector('input')!,
    getApplyButton: () => {
      const buttons = Array.from(linkFeature.shadowRoot!.querySelectorAll('forge-button'));
      return buttons.find(btn => btn.textContent?.includes('Apply') || btn.textContent?.includes('Update')) || null;
    },
    getRemoveButton: () => {
      const buttons = Array.from(linkFeature.shadowRoot!.querySelectorAll('forge-button'));
      return buttons.find(btn => btn.textContent?.includes('Remove')) || null;
    },
    getCancelButton: () => {
      const buttons = Array.from(linkFeature.shadowRoot!.querySelectorAll('forge-button'));
      return buttons.find(btn => btn.textContent?.includes('Cancel')) || null;
    },
    getErrorMessage: () => linkFeature.shadowRoot!.querySelector('.error-message'),
    async clickButton() {
      this.button().click();
      await this.waitForUpdate();
    },
    async getEditor(): Promise<Editor> {
      // Access the editor from the context component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const context = (contextComponent as any).editorContext;
      return context.editor;
    },
    async waitForUpdate() {
      await el.updateComplete;
      // Manually trigger re-render on feature to update active state
      linkFeature.requestUpdate();
      await linkFeature.updateComplete;
      // Give TipTap time to process
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  };
}

describe('RTE Link - Keyboard navigation', () => {
  it('should apply link when Enter is pressed in input field', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content and select it
    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    // Click link button to open popover
    await harness.clickButton();
    await harness.waitForUpdate();

    // Get input field and set URL
    const input = harness.getInput();
    expect(input).to.be.ok;

    input.value = 'https://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    // Simulate Enter key
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true
    });
    input.dispatchEvent(enterEvent);
    await harness.waitForUpdate();

    // Verify link was applied
    const output = editor.getHTML();
    expect(output).to.include('href="https://example.com"');
    expect(output).to.include('test text');

    // Verify popover closed (check the open property, not attribute)
    await new Promise(resolve => setTimeout(resolve, 100));
    const popover = harness.popover();
    expect(popover.open).to.be.false;
  });

  it('should close popover when Escape is pressed in input field', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content and select it
    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    // Click link button to open popover
    await harness.clickButton();
    await harness.waitForUpdate();

    // Get input field
    const input = harness.getInput();
    input.value = 'https://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    // Simulate Escape key
    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      cancelable: true
    });
    input.dispatchEvent(escapeEvent);
    await harness.waitForUpdate();

    // Verify link was NOT applied
    const output = editor.getHTML();
    expect(output).not.to.include('href="https://example.com"');

    // Verify popover closed (check the open property, not attribute)
    await new Promise(resolve => setTimeout(resolve, 100));
    const popover = harness.popover();
    expect(popover.open).to.be.false;
  });

  it('should remove link when Enter is pressed with empty URL', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content with a link
    editor.commands.setContent('<p><a href="https://example.com">test text</a></p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    // Click link button to open popover
    await harness.clickButton();
    await harness.waitForUpdate();

    // Get input field and clear it
    const input = harness.getInput();
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    // Simulate Enter key
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true
    });
    input.dispatchEvent(enterEvent);
    await harness.waitForUpdate();

    // Verify link was removed
    const output = editor.getHTML();
    expect(output).not.to.include('<a href=');
    expect(output).to.include('test text');
  });

  it('should pre-fill input with existing link URL', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    // Set content with a link
    editor.commands.setContent('<p><a href="https://existing.com">test text</a></p>');
    // Position cursor within the link
    editor.commands.focus();
    editor.commands.setTextSelection(3);
    await harness.waitForUpdate();

    // Click link button to open popover
    await harness.clickButton();
    await harness.waitForUpdate();

    // Verify input is pre-filled
    const input = harness.getInput();
    expect(input.value).to.equal('https://existing.com');
  });
});

describe('RTE Link - Validation', () => {
  it('should validate URLs by default', async () => {
    const harness = await createFixture();

    expect(harness.linkFeature.validateUrls).to.be.true;
  });

  it('should show error for invalid URL', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'not a valid url';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const error = harness.getErrorMessage();
    expect(error).to.exist;
    expect(error?.textContent).to.include('valid URL');
  });

  it('should accept valid URL with https protocol', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'https://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const error = harness.getErrorMessage();
    expect(error).to.not.exist;
  });

  it('should accept valid URL with http protocol', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'http://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const error = harness.getErrorMessage();
    expect(error).to.not.exist;
  });

  it('should accept URL without protocol', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const error = harness.getErrorMessage();
    expect(error).to.not.exist;
  });

  it('should accept URL with path', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'https://example.com/path/to/page';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const error = harness.getErrorMessage();
    expect(error).to.not.exist;
  });

  it('should accept URL with port', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'https://example.com:8080/path';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const error = harness.getErrorMessage();
    expect(error).to.not.exist;
  });

  it('should accept empty URL for link removal', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p><a href="https://example.com">test text</a></p>');
    editor.commands.setTextSelection(3);
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const error = harness.getErrorMessage();
    expect(error).to.not.exist;
  });

  it('should disable apply button when validation error exists', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'invalid url';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const applyButton = harness.getApplyButton();
    expect(applyButton?.hasAttribute('disabled')).to.be.true;
  });

  it('should not prevent Enter when validation error exists', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'invalid url';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
    input.dispatchEvent(enterEvent);
    await harness.waitForUpdate();

    // Verify link was NOT applied
    const output = editor.getHTML();
    expect(output).not.to.include('href="invalid url"');
  });

  it('should add ARIA attributes for validation error', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'invalid';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    expect(input.getAttribute('aria-invalid')).to.equal('true');
    expect(input.getAttribute('aria-describedby')).to.equal('link-error');
  });
});

describe('RTE Link - Auto Protocol', () => {
  it('should auto-add https protocol by default', async () => {
    const harness = await createFixture();

    expect(harness.linkFeature.autoProtocol).to.be.true;
  });

  it('should add https:// to URL without protocol when applied', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const applyButton = harness.getApplyButton();
    applyButton?.click();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('href="https://example.com"');
  });

  it('should not modify URL that already has protocol', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'http://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const applyButton = harness.getApplyButton();
    applyButton?.click();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('href="http://example.com"');
    expect(output).not.to.include('https://http://');
  });
});

describe('RTE Link - Enhanced UI', () => {
  it('should render Apply button', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const applyButton = harness.getApplyButton();
    expect(applyButton).to.exist;
    expect(applyButton?.textContent).to.include('Apply');
  });

  it('should render Update button when editing existing link', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p><a href="https://example.com">test text</a></p>');
    editor.commands.setTextSelection(3);
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const applyButton = harness.getApplyButton();
    expect(applyButton).to.exist;
    expect(applyButton?.textContent).to.include('Update');
  });

  it('should render Remove Link button when editing existing link', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p><a href="https://example.com">test text</a></p>');
    editor.commands.setTextSelection(3);
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const removeButton = harness.getRemoveButton();
    expect(removeButton).to.exist;
    expect(removeButton?.textContent).to.include('Remove');
  });

  it('should not render Remove Link button for new links', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const removeButton = harness.getRemoveButton();
    expect(removeButton).to.not.exist;
  });

  it('should render Cancel button', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const cancelButton = harness.getCancelButton();
    expect(cancelButton).to.exist;
    expect(cancelButton?.textContent).to.include('Cancel');
  });

  it('should apply link when Apply button is clicked', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'https://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const applyButton = harness.getApplyButton();
    applyButton?.click();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('href="https://example.com"');
  });

  it('should remove link when Remove Link button is clicked', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p><a href="https://example.com">test text</a></p>');
    editor.commands.setTextSelection(3);
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const removeButton = harness.getRemoveButton();
    removeButton?.click();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).not.to.include('<a');
    expect(output).to.include('test text');
  });

  it('should close popover when Cancel button is clicked', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'https://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const cancelButton = harness.getCancelButton();
    cancelButton?.click();
    await harness.waitForUpdate();

    // Verify link was NOT applied
    const output = editor.getHTML();
    expect(output).not.to.include('href="https://example.com"');

    // Verify popover is closed
    const popover = harness.popover();
    expect(popover.open).to.be.false;
  });

  it('should set input type to url', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    expect(input.type).to.equal('url');
  });

  it('should have appropriate placeholder text', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    expect(input.placeholder).to.equal('https://example.com');
  });
});

describe('RTE Link - Security Attributes', () => {
  it('should configure link extension with security attributes', async () => {
    const harness = await createFixture();

    expect(harness.linkFeature.extensions).to.have.lengthOf(1);
    const linkExt = harness.linkFeature.extensions[0];
    expect(linkExt.name).to.equal('link');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((linkExt.options as any).HTMLAttributes.target).to.equal('_blank');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((linkExt.options as any).HTMLAttributes.rel).to.equal('noopener noreferrer nofollow');
  });

  it('should apply target="_blank" to created links', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'https://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const applyButton = harness.getApplyButton();
    applyButton?.click();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('target="_blank"');
  });

  it('should apply rel="noopener noreferrer nofollow" to created links', async () => {
    const harness = await createFixture();
    const editor = await harness.getEditor();

    editor.commands.setContent('<p>test text</p>');
    editor.commands.selectAll();
    await harness.waitForUpdate();

    await harness.clickButton();
    await harness.waitForUpdate();

    const input = harness.getInput();
    input.value = 'https://example.com';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await harness.waitForUpdate();

    const applyButton = harness.getApplyButton();
    applyButton?.click();
    await harness.waitForUpdate();

    const output = editor.getHTML();
    expect(output).to.include('rel="noopener noreferrer nofollow"');
  });

  it('should configure openOnClick to false', async () => {
    const harness = await createFixture();

    const linkExt = harness.linkFeature.extensions[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((linkExt.options as any).openOnClick).to.be.false;
  });
});

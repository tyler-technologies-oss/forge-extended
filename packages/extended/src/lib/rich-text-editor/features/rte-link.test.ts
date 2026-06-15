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
    },
    getInput: () => linkFeature.shadowRoot!.querySelector('input')!
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

import { html } from 'lit';
import { fixture, expect, elementUpdated } from '@open-wc/testing';
import type { RichTextEditorComponent } from './rich-text-editor';
import './rich-text-editor';
import './features/rte-standard-tools';

describe('RTE Screen Reader Support', () => {
  describe('Live Region', () => {
    it('should contain ARIA live region with proper attributes', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      expect(contentComponent).to.exist;

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion).to.exist;
      expect(liveRegion?.getAttribute('aria-live')).to.equal('polite');
      expect(liveRegion?.getAttribute('aria-atomic')).to.equal('true');
    });

    it('should have screen reader only class', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.classList.contains('sr-only')).to.be.true;
    });

    it('should be initially empty', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent?.trim()).to.equal('');
    });
  });

  describe('Text Formatting Announcements', () => {
    it('should announce when bold is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const boldFeature = el.querySelector('forge-rte-bold');
      const button = boldFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content') as any;
      await contentComponent?.updateComplete;

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Bold applied');
    });

    it('should announce when bold is removed', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p><strong>Test</strong></p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const boldFeature = el.querySelector('forge-rte-bold');
      const button = boldFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Bold removed');
    });

    it('should announce when italic is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const italicFeature = el.querySelector('forge-rte-italic');
      const button = italicFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Italic applied');
    });

    it('should announce when underline is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const underlineFeature = el.querySelector('forge-rte-underline');
      const button = underlineFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Underline applied');
    });

    it('should announce when strikethrough is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const strikeFeature = el.querySelector('forge-rte-strike');
      const button = strikeFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Strikethrough applied');
    });

    it('should announce when code is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const codeFeature = el.querySelector('forge-rte-code');
      const button = codeFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Code applied');
    });
  });

  describe('Heading Announcements', () => {
    it('should announce when heading 1 is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const headingFeature = el.querySelector('forge-rte-heading');
      const buttons = headingFeature?.shadowRoot?.querySelectorAll('forge-rte-tool-button');
      const h1Button = buttons?.[0]?.shadowRoot?.querySelector('button');
      h1Button?.click();

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Heading 1');
    });

    it('should announce when heading is removed', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<h1>Test heading</h1>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const headingFeature = el.querySelector('forge-rte-heading');
      const buttons = headingFeature?.shadowRoot?.querySelectorAll('forge-rte-tool-button');
      const h1Button = buttons?.[0]?.shadowRoot?.querySelector('button');
      h1Button?.click();

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Paragraph style');
    });
  });

  describe('List Announcements', () => {
    it('should announce when bullet list is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const bulletListFeature = el.querySelector('forge-rte-bullet-list');
      const button = bulletListFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      await elementUpdated(contentComponent!);

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Bullet list');
    });

    it('should announce when numbered list is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const orderedListFeature = el.querySelector('forge-rte-ordered-list');
      const button = orderedListFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      await elementUpdated(contentComponent!);

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Numbered list');
    });

    it('should announce when list is removed', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<ul><li>Test item</li></ul>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const bulletListFeature = el.querySelector('forge-rte-bullet-list');
      const button = bulletListFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      await elementUpdated(contentComponent!);

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('List removed');
    });
  });

  describe('Alignment Announcements', () => {
    it('should announce when center alignment is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const alignFeature = el.querySelector('forge-rte-align');
      const buttons = alignFeature?.shadowRoot?.querySelectorAll('forge-rte-tool-button');
      const centerButton = buttons?.[1]?.shadowRoot?.querySelector('button');
      centerButton?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      await elementUpdated(contentComponent!);

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Center aligned');
    });

    it('should announce when right alignment is applied', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const alignFeature = el.querySelector('forge-rte-align');
      const buttons = alignFeature?.shadowRoot?.querySelectorAll('forge-rte-tool-button');
      const rightButton = buttons?.[2]?.shadowRoot?.querySelector('button');
      rightButton?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      await elementUpdated(contentComponent!);

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Right aligned');
    });
  });

  describe('Undo/Redo Announcements', () => {
    it('should announce when undo is performed', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();
      context.editorContext.editor?.chain().focus().toggleBold().run();

      await new Promise(resolve => setTimeout(resolve, 100));

      const undoRedoFeature = el.querySelector('forge-rte-undo-redo');
      const buttons = undoRedoFeature?.shadowRoot?.querySelectorAll('forge-icon-button');
      const undoButton = buttons?.[0]?.shadowRoot?.querySelector('button');
      undoButton?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      await elementUpdated(contentComponent!);

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Undo');
    });

    it('should announce when redo is performed', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();
      context.editorContext.editor?.chain().focus().toggleBold().run();
      await new Promise(resolve => setTimeout(resolve, 100));
      context.editorContext.editor?.chain().undo().run();
      await new Promise(resolve => setTimeout(resolve, 100));

      const undoRedoFeature = el.querySelector('forge-rte-undo-redo');
      const buttons = undoRedoFeature?.shadowRoot?.querySelectorAll('forge-icon-button');
      const redoButton = buttons?.[1]?.shadowRoot?.querySelector('button');
      redoButton?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      await elementUpdated(contentComponent!);

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Redo');
    });
  });

  describe('Editor State Announcements', () => {
    it('should announce when editor becomes disabled', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      el.disabled = true;
      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Editor disabled');
    });

    it('should announce when editor becomes enabled', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor disabled>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      el.disabled = false;
      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Editor enabled');
    });

    it('should announce when editor becomes read-only', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      el.readOnly = true;
      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Editor read-only');
    });

    it('should announce when editor becomes editable from read-only', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor readonly>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      el.readOnly = false;
      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 250));

      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Editor editable');
    });
  });

  describe('Announcement Cleanup', () => {
    it('should clear announcement after timeout', async () => {
      const el = await fixture<RichTextEditorComponent>(html`
        <forge-rich-text-editor>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>
      `);

      await elementUpdated(el);
      await new Promise(resolve => setTimeout(resolve, 200));

      const context = el.shadowRoot?.querySelector('forge-rich-text-context') as any;
      context.editorContext.editor?.commands.setContent('<p>Test content</p>');
      context.editorContext.editor?.chain().focus().setTextSelection({ from: 1, to: 5 }).run();

      const boldFeature = el.querySelector('forge-rte-bold');
      const button = boldFeature?.shadowRoot
        ?.querySelector('forge-rte-tool-button')
        ?.shadowRoot?.querySelector('button');
      button?.click();

      await new Promise(resolve => setTimeout(resolve, 250));
      const contentComponent = el.shadowRoot?.querySelector('forge-rich-text-content');
      await elementUpdated(contentComponent!);

      const liveRegion = contentComponent?.shadowRoot?.querySelector('[role="status"]');
      expect(liveRegion?.textContent).to.equal('Bold applied');

      // Wait for cleanup timeout (1000ms)
      await new Promise(resolve => setTimeout(resolve, 1100));
      await elementUpdated(contentComponent!);

      expect(liveRegion?.textContent?.trim()).to.equal('');
    });
  });
});

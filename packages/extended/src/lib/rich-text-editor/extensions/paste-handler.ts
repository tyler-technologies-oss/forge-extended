import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Slice, Fragment, Node as ProseMirrorNode } from '@tiptap/pm/model';

export interface PasteHandlerOptions {
  /**
   * Whether to allow pasted content to retain formatting.
   * When false, all pasted content is treated as plain text.
   */
  readonly allowPasteFormatting: boolean;

  /**
   * Whether to allow images to be pasted into the editor.
   * When false, image elements are stripped from pasted content.
   */
  readonly allowPasteImages: boolean;
}

/**
 * Extension that provides enhanced paste handling with sanitization and formatting options.
 *
 * Features:
 * - Strip dangerous HTML (scripts, iframes, etc.)
 * - Control whether formatting is preserved or stripped
 * - Control whether images are allowed
 * - Keyboard shortcut (Ctrl/Cmd+Shift+V) for plain text paste
 */
export const PasteHandler = Extension.create<PasteHandlerOptions>({
  name: 'pasteHandler',

  addOptions() {
    return {
      allowPasteFormatting: true,
      allowPasteImages: false
    };
  },

  addKeyboardShortcuts() {
    return {
      // Ctrl+Shift+V / Cmd+Shift+V for plain text paste
      'Mod-Shift-v': () => {
        const { view } = this.editor;

        // Read clipboard — rebuild transaction from current view.state inside .then()
        // to avoid using stale selection positions captured before the async gap.
        navigator.clipboard
          .readText()
          .then(text => {
            const { state } = view;
            const { from, to } = state.selection;
            const ccExt = this.editor.extensionManager.extensions.find(e => e.name === 'characterCount');
            const maxLength = ccExt?.options?.limit as number | undefined;
            if (maxLength) {
              const currentChars = state.doc.textContent.length - (to - from);
              const available = maxLength - currentChars;
              if (available <= 0) {
                return;
              }
              text = text.slice(0, available);
            }
            const tr = state.tr.replaceWith(from, to, state.schema.text(text));
            view.dispatch(tr);
          })
          .catch(err => {
            console.warn('Failed to read clipboard for plain text paste:', err);
          });

        return true;
      }
    };
  },

  addProseMirrorPlugins() {
    const options = this.options;

    return [
      new Plugin({
        key: new PluginKey('pasteHandler'),
        props: {
          // Handle paste events
          transformPastedHTML: (html: string) => {
            // SECURITY: Limit paste size to prevent DoS attacks
            const MAX_PASTE_SIZE = 1_000_000; // 1MB limit

            if (html.length > MAX_PASTE_SIZE) {
              const sizeMB = (html.length / 1024 / 1024).toFixed(2);
              console.warn(`[RTE Security] Pasted content too large (${sizeMB}MB), truncating to 1MB`);
              html = html.substring(0, MAX_PASTE_SIZE);
            }

            // If formatting not allowed, strip all HTML tags
            if (!options.allowPasteFormatting) {
              const doc = new DOMParser().parseFromString(html, 'text/html');
              return doc.body.textContent || '';
            }

            // Sanitize HTML to remove dangerous content
            return sanitizeHTML(html, options.allowPasteImages);
          },

          // Handle pasted slices (for advanced sanitization)
          transformPasted: (slice: Slice) => {
            // If images not allowed, strip them from the slice
            if (!options.allowPasteImages) {
              return new Slice(stripImagesFromFragment(slice.content), slice.openStart, slice.openEnd);
            }

            return slice;
          }
        }
      })
    ];
  }
});

/**
 * Sanitizes pasted HTML content by removing dangerous elements and attributes.
 *
 * Removes:
 * - Scripts and event handlers
 * - Iframes and embeds
 * - Inline styles (except semantic formatting)
 * - Data attributes
 * - Form elements
 *
 * @param html The HTML content to sanitize
 * @param allowImages Whether to preserve img elements
 * @returns Sanitized HTML
 */
function sanitizeHTML(html: string, allowImages: boolean): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const temp = doc.body;

  // Remove dangerous elements
  const dangerousSelectors = [
    'script',
    'iframe',
    'embed',
    'object',
    'link',
    'style',
    'form',
    'input',
    'button',
    'textarea',
    'select',
    'svg', // SVG can contain scripts and event handlers
    'math', // MathML can execute scripts
    'audio', // Can load remote resources
    'video', // Can load remote resources
    'base' // Can hijack relative URLs
  ];

  if (!allowImages) {
    dangerousSelectors.push('img');
  }

  dangerousSelectors.forEach(selector => {
    temp.querySelectorAll(selector).forEach(el => el.remove());
  });

  // Remove dangerous attributes from all elements
  const allElements = temp.querySelectorAll('*');
  allElements.forEach(el => {
    // Remove event handler attributes
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });

    // Remove data attributes
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('data-')) {
        el.removeAttribute(attr.name);
      }
    });

    // Remove inline styles (Word/Google Docs add tons of these)
    el.removeAttribute('style');
    el.removeAttribute('class');
    el.removeAttribute('id');

    // Remove other potentially dangerous attributes
    el.removeAttribute('contenteditable');
    el.removeAttribute('spellcheck');
    el.removeAttribute('tabindex');
  });

  return temp.innerHTML;
}

/**
 * Recursively strips image nodes from a ProseMirror fragment.
 *
 * @param fragment The fragment to process
 * @returns A new fragment with images removed
 */
function stripImagesFromFragment(fragment: Fragment): Fragment {
  const nodes: ProseMirrorNode[] = [];

  fragment.forEach((node: ProseMirrorNode) => {
    // Skip image nodes
    if (node.type.name === 'image') {
      return;
    }

    // Recursively process child nodes
    if (node.content.size > 0) {
      const newContent = stripImagesFromFragment(node.content);
      nodes.push(node.copy(newContent));
    } else {
      nodes.push(node);
    }
  });

  return Fragment.fromArray(nodes);
}

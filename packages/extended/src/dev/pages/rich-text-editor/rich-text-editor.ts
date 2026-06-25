import '$dev/shared';
import './rich-text-editor.scss';
import '$lib/rich-text-editor';
import '$lib/rich-text-editor/features/rte-standard-tools';
import '$lib/rich-text-editor/features/rte-code';
import '$lib/rich-text-editor/features/rte-link';
import '$lib/rich-text-editor/rich-text-renderer';
import { type RichTextEditorComponent } from '$lib/rich-text-editor';
import { type RichTextRendererComponent } from '$lib/rich-text-editor/rich-text-renderer';

const richTextEditor = document.querySelector('forge-rich-text-editor') as RichTextEditorComponent;
richTextEditor.addEventListener('change', (evt: CustomEvent) => {
  console.log('Rich Text Editor Change Event:', evt.detail);
});

const richTextRenderer = document.querySelector('forge-rich-text-renderer') as RichTextRendererComponent;
richTextRenderer.content = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 1, textAlign: 'left' },
      content: [{ type: 'text', text: 'Heading 1' }]
    },
    {
      type: 'heading',
      attrs: { level: 2, textAlign: 'left' },
      content: [{ type: 'text', text: 'Heading 2' }]
    },
    {
      type: 'heading',
      attrs: { level: 3, textAlign: 'left' },
      content: [{ type: 'text', text: 'Heading 3' }]
    },
    {
      type: 'paragraph',
      attrs: { textAlign: 'left' },
      content: [
        { type: 'text', marks: [{ type: 'bold' }], text: 'Bold' },
        { type: 'text', text: ', ' },
        { type: 'text', marks: [{ type: 'italic' }], text: 'Italic' },
        { type: 'text', text: ', ' },
        { type: 'text', marks: [{ type: 'underline' }], text: 'Underline' },
        { type: 'text', text: ', ' },
        { type: 'text', marks: [{ type: 'strike' }], text: 'Strikethrough' },
        { type: 'text', text: ', and ' },
        { type: 'text', marks: [{ type: 'code' }], text: 'inline code' }
      ]
    },
    {
      type: 'paragraph',
      attrs: { textAlign: 'left' },
      content: [
        { type: 'text', text: 'Visit the ' },
        {
          type: 'text',
          marks: [{ type: 'link', attrs: { href: 'https://tylertech.com', target: '_blank', rel: 'noopener noreferrer nofollow' } }],
          text: 'Tyler Technologies website'
        },
        { type: 'text', text: ' to learn more.' }
      ]
    },
    {
      type: 'paragraph',
      attrs: { textAlign: 'center' },
      content: [{ type: 'text', text: 'Center-aligned text' }]
    },
    {
      type: 'paragraph',
      attrs: { textAlign: 'right' },
      content: [{ type: 'text', text: 'Right-aligned text' }]
    },
    {
      type: 'bulletList',
      content: [
        { type: 'listItem', content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Bullet item one' }] }] },
        { type: 'listItem', content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Bullet item two' }] }] },
        { type: 'listItem', content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Bullet item three' }] }] }
      ]
    },
    {
      type: 'orderedList',
      attrs: { start: 1 },
      content: [
        { type: 'listItem', content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Ordered item one' }] }] },
        { type: 'listItem', content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Ordered item two' }] }] },
        { type: 'listItem', content: [{ type: 'paragraph', attrs: { textAlign: 'left' }, content: [{ type: 'text', text: 'Ordered item three' }] }] }
      ]
    }
  ]
} as unknown as RichTextRendererComponent['content'];

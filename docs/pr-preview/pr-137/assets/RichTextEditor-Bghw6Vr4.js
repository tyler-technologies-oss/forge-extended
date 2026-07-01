import{j as e,M as s,T as o,C as d}from"./blocks-CqRQ2BIM.js";import{useMDXComponents as i}from"./index-De36GQbW.js";import{C as l}from"./CustomArgTypes-B_Bl1cWR.js";import{R as c,D as a}from"./RichTextEditor.stories-CTEjWh8A.js";import"./iframe-DY84GSRf.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-Cpp5rkec.js";import"./constants-D98kDqAv.js";import"./with-default-aria-Tl2r-4IA.js";import"./state-qT09zmhL.js";import"./when-3fO0zp9C.js";import"./ref-ENFoMw9u.js";import"./async-directive-Bh2jcCLL.js";import"./directive-CJw_OlP2.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./index-Dy3cNjOb.js";import"./icon-button-CKHcbntS.js";import"./base-button-adapter-Ca8PAt1F.js";import"./focus-indicator-B4Vch2QM.js";import"./icon-DCc3zBHq.js";import"./index-Bm3-KZRL.js";import"./divider-aQaorLQe.js";import"./if-defined-BUgS19Uf.js";import"./position-utils-BmD1PIUA.js";import"./index-CufxL9Nd.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(o,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-rich-text-editor>"})," component provides a powerful and accessible rich text editing experience powered by ",e.jsx(n.a,{href:"https://tiptap.dev/",rel:"nofollow",children:"TipTap"}),". It offers a flexible, component-based architecture where editing features are added as child components, allowing you to compose exactly the functionality your application needs."]}),`
`,e.jsx(n.p,{children:"The editor supports both standalone usage (with toolbar inline) and composed usage (with toolbar separated from content), making it adaptable to various UI layouts."}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["The rich text editor is part of the ",e.jsx(n.code,{children:"@tylertech/forge-extended"})," package:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge-extended
# or
pnpm add @tylertech/forge-extended
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Peer Dependencies:"})}),`
`,e.jsxs(n.p,{children:["The editor requires ",e.jsx(n.code,{children:"@tylertech/forge"})," as a peer dependency:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge
# or
pnpm add @tylertech/forge
`})}),`
`,e.jsx(n.h3,{id:"basic-setup",children:"Basic Setup"}),`
`,e.jsx(n.p,{children:"Import the components you need in your application:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Import the main editor component
import '@tylertech/forge-extended/rich-text-editor';

// Import the standard toolbar features
import '@tylertech/forge-extended/rich-text-editor/features/rte-standard-tools';

// Optional: Import additional features
import '@tylertech/forge-extended/rich-text-editor/features/rte-code';
import '@tylertech/forge-extended/rich-text-editor/features/rte-link';
`})}),`
`,e.jsx(n.h3,{id:"your-first-editor",children:"Your First Editor"}),`
`,e.jsx(n.p,{children:"Create a basic rich text editor with standard formatting tools:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor>
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.p,{children:"That's it! The editor is now ready to use with headings, bold, italic, underline, strikethrough, lists, and text alignment."}),`
`,e.jsx(n.h3,{id:"listening-to-changes",children:"Listening to Changes"}),`
`,e.jsxs(n.p,{children:["The editor emits a ",e.jsx(n.code,{children:"change"})," event whenever content is modified:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const editor = document.querySelector('forge-rich-text-editor');

editor.addEventListener('change', event => {
  const htmlContent = event.detail;
  console.log('Content changed:', htmlContent);

  // Save to your backend, update state, etc.
  saveContent(htmlContent);
});
`})}),`
`,e.jsx(n.h3,{id:"getting-content",children:"Getting Content"}),`
`,e.jsx(n.p,{children:"Retrieve content in different formats:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const editor = document.querySelector('forge-rich-text-editor');

// Get HTML output
const htmlContent = editor.toHTML();
console.log('HTML:', htmlContent);

// Get JSON output (ProseMirror document structure)
const jsonContent = editor.toJSON();
console.log('JSON:', jsonContent);

// Get Markdown output
const markdownContent = editor.toMarkdown();
console.log('Markdown:', markdownContent);
`})}),`
`,e.jsx(n.h3,{id:"setting-initial-content",children:"Setting Initial Content"}),`
`,e.jsxs(n.p,{children:["Provide initial content via the ",e.jsx(n.code,{children:"content"})," property:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor content="<h1>Welcome</h1><p>Start editing here...</p>">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.p,{children:"Or programmatically:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const editor = document.querySelector('forge-rich-text-editor');
editor.content = '<p>New content here</p>';
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsx(n.p,{children:"The rich text editor follows a compositional pattern where you add feature components as children. Each feature component provides specific editing capabilities and registers itself with the editor."}),`
`,e.jsx(n.h3,{id:"available-features",children:"Available Features"}),`
`,e.jsxs(n.h4,{id:"standard-tools-forge-rte-standard-tools",children:["Standard Tools (",e.jsx(n.code,{children:"<forge-rte-standard-tools>"}),")"]}),`
`,e.jsx(n.p,{children:"The standard tools component provides common formatting features:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bold"}),": Apply bold formatting to selected text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Italic"}),": Apply italic formatting to selected text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Underline"}),": Apply underline formatting to selected text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Strikethrough"}),": Apply strikethrough formatting to selected text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bulleted List"}),": Create unordered lists"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Numbered List"}),": Create ordered lists"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Headings"}),": Format text as heading levels 1, 2, or 3"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text Alignment"}),": Align text left, center, right, or justify"]}),`
`]}),`
`,e.jsx(n.p,{children:"The standard tools component exposes each feature through properties that allow you to customize labels for accessibility:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rte-standard-tools
  bold-label="Make text bold"
  h1-label="Large heading"
  h2-label="Medium heading"
  h3-label="Small heading"
  align-left-label="Align left"
  align-center-label="Align center"
  align-right-label="Align right"
  align-justify-label="Justify text">
</forge-rte-standard-tools>
`})}),`
`,e.jsx(n.h4,{id:"additional-features",children:"Additional Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Code"})," (",e.jsx(n.code,{children:"<forge-rte-code>"}),"): Inline code formatting with monospace styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link"})," (",e.jsx(n.code,{children:"<forge-rte-link>"}),"): Insert and edit hyperlinks with URL validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Divider"})," (",e.jsx(n.code,{children:"<forge-rte-feature-divider>"}),"): Visual separator between feature groups"]}),`
`]}),`
`,e.jsx(n.h3,{id:"adding-additional-features",children:"Adding Additional Features"}),`
`,e.jsx(n.p,{children:"To add code and link features beyond the standard tools:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor>
  <forge-rte-standard-tools></forge-rte-standard-tools>
  <forge-rte-feature-divider></forge-rte-feature-divider>
  <forge-rte-code></forge-rte-code>
  <forge-rte-link></forge-rte-link>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.p,{children:"Don't forget to import these components:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@tylertech/forge-extended/rich-text-editor/features/rte-code';
import '@tylertech/forge-extended/rich-text-editor/features/rte-link';
`})}),`
`,e.jsx(n.h3,{id:"feature-configuration",children:"Feature Configuration"}),`
`,e.jsx(n.h4,{id:"link-feature-options",children:"Link Feature Options"}),`
`,e.jsx(n.p,{children:"The link feature supports URL validation and automatic protocol addition:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rte-link validate-urls auto-protocol> </forge-rte-link>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validate-urls"})," - Validates URL format and shows errors for invalid URLs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto-protocol"})," - Automatically adds ",e.jsx(n.code,{children:"https://"})," to URLs without a protocol"]}),`
`]}),`
`,e.jsx(n.h4,{id:"standard-tools-customization",children:"Standard Tools Customization"}),`
`,e.jsx(n.p,{children:"Customize accessible labels for toolbar buttons:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rte-standard-tools
  bold-label="Make text bold"
  italic-label="Make text italic"
  h1-label="Large heading"
  h2-label="Medium heading"
  h3-label="Small heading">
</forge-rte-standard-tools>
`})}),`
`,e.jsx(n.h3,{id:"headings-feature",children:"Headings Feature"}),`
`,e.jsx(n.p,{children:"The rich text editor supports three levels of headings (H1, H2, H3) through the standard tools component. Each heading level has:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A dedicated button with a unique icon"}),`
`,e.jsx(n.li,{children:"Active state indication when the cursor is in a heading"}),`
`,e.jsx(n.li,{children:"Customizable accessible labels"}),`
`,e.jsx(n.li,{children:"Toggle behavior (clicking the active heading button converts back to paragraph)"}),`
`]}),`
`,e.jsx(n.p,{children:"Headings follow proper semantic HTML structure and can be styled consistently with your application's typography system."}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.h3,{id:"toolbar-customization",children:"Toolbar Customization"}),`
`,e.jsx(n.p,{children:"Build your own custom toolbar by selecting only the features you need:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor>
  <!-- Only headings and text formatting -->
  <forge-rte-heading></forge-rte-heading>
  <forge-rte-feature-divider></forge-rte-feature-divider>
  <forge-rte-bold></forge-rte-bold>
  <forge-rte-italic></forge-rte-italic>
  <forge-rte-underline></forge-rte-underline>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.h3,{id:"label-customization",children:"Label Customization"}),`
`,e.jsx(n.p,{children:"All toolbar buttons support custom labels for accessibility and internationalization:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rte-standard-tools
  bold-label="Gras"
  italic-label="Italique"
  underline-label="Souligné"
  h1-label="Titre 1"
  h2-label="Titre 2"
  h3-label="Titre 3">
</forge-rte-standard-tools>
`})}),`
`,e.jsx(n.p,{children:"Individual feature components also support label customization:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rte-bold label="Make bold"></forge-rte-bold> <forge-rte-link label="Add hyperlink"></forge-rte-link>
`})}),`
`,e.jsx(n.h3,{id:"styling-and-theming",children:"Styling and Theming"}),`
`,e.jsx(n.p,{children:"The editor uses Forge design tokens throughout, automatically adapting to your application's theme:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* The editor automatically inherits from your Forge theme */
:root {
  --forge-theme-primary: #your-brand-color;
  --forge-theme-surface: #your-surface-color;
  /* ... other theme tokens ... */
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"What's themed:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Toolbar background and borders"}),`
`,e.jsx(n.li,{children:"Button states (hover, active, disabled)"}),`
`,e.jsx(n.li,{children:"Content area typography and spacing"}),`
`,e.jsx(n.li,{children:"Focus indicators"}),`
`,e.jsx(n.li,{children:"Error messages and validation UI"}),`
`]}),`
`,e.jsx(n.p,{children:"The editor fully supports:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ Light and dark themes"}),`
`,e.jsx(n.li,{children:"✅ High contrast mode"}),`
`,e.jsx(n.li,{children:"✅ Custom theme tokens"}),`
`,e.jsx(n.li,{children:"✅ RTL layouts (via logical properties)"}),`
`]}),`
`,e.jsx(n.h3,{id:"composed-layout",children:"Composed Layout"}),`
`,e.jsxs(n.p,{children:["For advanced layouts where you want to separate the toolbar from the content area, use the ",e.jsx(n.code,{children:"<forge-rich-text-context>"})," component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-context>
  <div class="toolbar-area">
    <forge-rte-standard-tools></forge-rte-standard-tools>
    <forge-rte-feature-divider></forge-rte-feature-divider>
    <forge-rte-code></forge-rte-code>
    <forge-rte-link></forge-rte-link>
  </div>

  <div class="content-area">
    <forge-rich-text-content></forge-rich-text-content>
  </div>
</forge-rich-text-context>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Use cases for composed layout:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fixed/sticky toolbars"}),`
`,e.jsx(n.li,{children:"Side-by-side toolbar and content"}),`
`,e.jsx(n.li,{children:"Floating toolbar palettes"}),`
`,e.jsx(n.li,{children:"Multi-column layouts"}),`
`,e.jsx(n.li,{children:"Custom toolbar positioning"}),`
`]}),`
`,e.jsx(n.p,{children:"Don't forget to import the context component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@tylertech/forge-extended/rich-text-editor/rich-text-context';
import '@tylertech/forge-extended/rich-text-editor/rich-text-content';
`})}),`
`,e.jsx(n.h2,{id:"integration-examples",children:"Integration Examples"}),`
`,e.jsx(n.h3,{id:"form-integration",children:"Form Integration"}),`
`,e.jsx(n.p,{children:"Integrate the editor into forms and extract content on submission:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form id="myForm">
  <label for="title">Title</label>
  <input type="text" id="title" name="title" required />

  <label for="editor">Content</label>
  <forge-rich-text-editor id="editor" max-length="5000" show-character-count>
    <forge-rte-standard-tools></forge-rte-standard-tools>
  </forge-rich-text-editor>

  <button type="submit">Save</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', e => {
    e.preventDefault();

    const editor = document.getElementById('editor');
    const formData = {
      title: document.getElementById('title').value,
      content: editor.toHTML(),
      contentJSON: editor.toJSON()
    };

    // Send to your backend
    saveToBackend(formData);
  });
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"content-validation",children:"Content Validation"}),`
`,e.jsx(n.p,{children:"Add character limits and validation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor
  max-length="1000"
  error-message="Content must not exceed 1,000 characters"
  show-character-count
  show-word-count>
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>

<script>
  const editor = document.querySelector('forge-rich-text-editor');

  editor.addEventListener('validation', event => {
    const { isValid, errors } = event.detail;

    if (!isValid) {
      console.log('Validation failed:', errors);
      // Show error UI, disable submit button, etc.
    }
  });
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"disabled-and-read-only-states",children:"Disabled and Read-Only States"}),`
`,e.jsx(n.p,{children:"Control editor state based on user permissions or form state:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Disabled: No interaction allowed -->
<forge-rich-text-editor disabled>
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>

<!-- Read-only: Can view and copy, but not edit -->
<forge-rich-text-editor read-only>
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Toggle states dynamically
const editor = document.querySelector('forge-rich-text-editor');

editor.disabled = true; // Disable editing
editor.readOnly = true; // Make read-only
`})}),`
`,e.jsx(n.h3,{id:"paste-handling",children:"Paste Handling"}),`
`,e.jsx(n.p,{children:"Control how pasted content is handled:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Strip all formatting from pasted content -->
<forge-rich-text-editor allow-paste-formatting="false">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>

<!-- Allow formatting but block images -->
<forge-rich-text-editor allow-paste-formatting="true" allow-paste-images="false">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard shortcut:"})," Users can always paste as plain text using ",e.jsx(n.code,{children:"Ctrl+Shift+V"})," (Windows/Linux) or ",e.jsx(n.code,{children:"Cmd+Shift+V"})," (Mac), regardless of the ",e.jsx(n.code,{children:"allow-paste-formatting"})," setting."]}),`
`,e.jsx(n.h3,{id:"display-only-content",children:"Display-Only Content"}),`
`,e.jsx(n.p,{children:"Use the renderer component to display saved content without editing capabilities:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-renderer content="<h1>Article Title</h1><p>Article content...</p>"> </forge-rich-text-renderer>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@tylertech/forge-extended/rich-text-editor/rich-text-renderer';

// Set content programmatically
const renderer = document.querySelector('forge-rich-text-renderer');
renderer.content = savedContent;
`})}),`
`,e.jsx(n.h3,{id:"framework-integration",children:"Framework Integration"}),`
`,e.jsx(n.h4,{id:"angular",children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@tylertech/forge-extended/rich-text-editor';
import '@tylertech/forge-extended/rich-text-editor/features/rte-standard-tools';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor [content]="initialContent" [maxLength]="maxLength" (change)="onContentChange($event)">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`@Component({
  /* ... */
})
export class MyComponent {
  initialContent = '<p>Start here...</p>';
  maxLength = 5000;

  onContentChange(event: CustomEvent) {
    const htmlContent = event.detail;
    // Handle change
  }
}
`})}),`
`,e.jsx(n.h4,{id:"react",children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@tylertech/forge-extended/rich-text-editor';
import '@tylertech/forge-extended/rich-text-editor/features/rte-standard-tools';
import { useRef } from 'react';

function MyEditor() {
  const editorRef = useRef(null);

  const handleChange = (e) => {
    const htmlContent = e.detail;
    // Handle change
  };

  const handleSubmit = () => {
    const editor = editorRef.current;
    const content = editor.toHTML();
    // Submit content
  };

  return (
    <>
      <forge-rich-text-editor
        ref={editorRef}
        content="<p>Start here...</p>"
        max-length={5000}
        onChange={handleChange}>
        <forge-rte-standard-tools />
      </forge-rich-text-editor>
      <button onClick={handleSubmit}>Save</button>
    </>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"events-reference",children:"Events Reference"}),`
`,e.jsx(n.p,{children:"The editor emits several events for different scenarios:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const editor = document.querySelector('forge-rich-text-editor');

// Content changed
editor.addEventListener('change', event => {
  const htmlContent = event.detail;
  console.log('Content changed:', htmlContent);
});

// Validation state changed
editor.addEventListener('validation', event => {
  const { isValid, errors } = event.detail;
  if (!isValid) {
    console.log('Validation errors:', errors);
  }
});

// Editor initialized successfully
editor.addEventListener('initialized', () => {
  console.log('Editor ready');
});

// Editor initialization failed
editor.addEventListener('initialization-error', event => {
  const error = event.detail;
  console.error('Failed to initialize:', error);
});

// Runtime error occurred
editor.addEventListener('error', event => {
  const error = event.detail;
  console.error('Editor error:', error);
});
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,e.jsx(n.p,{children:"The editor is optimized for documents up to 10,000 words and handles large content efficiently:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Large Documents:"})," Tested with 10,000+ word documents, loads in under 2 seconds"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Smooth Typing:"})," No lag during rapid typing (100+ updates per second)"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Memory Efficient:"})," No memory leaks during repeated mount/unmount cycles"]}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Fast Output:"})," JSON/HTML generation completes in under 50ms"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tips for optimal performance:"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use ",e.jsx(n.code,{children:"toJSON()"})," for storage"]})," - More compact than HTML, faster to parse"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avoid frequent content updates"})," - Let users edit naturally, don't sync on every keystroke"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use character limits"})," - Prevent extremely large documents that may impact UX"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Debounce autosave"})," - Save changes every few seconds, not on every keystroke"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Good: Debounced autosave
let saveTimer;
editor.addEventListener('change', () => {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveContent(editor.toJSON());
  }, 2000); // Save 2 seconds after user stops typing
});
`})}),`
`,e.jsx(n.h3,{id:"accessibility-best-practices",children:"Accessibility Best Practices"}),`
`,e.jsx(n.p,{children:"The editor is WCAG 2.1 Level AA compliant out of the box. To maintain accessibility:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Provide Context:"})," Add a label or description explaining the editor's purpose"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validate Accessibly:"})," Use the built-in validation system with clear error messages"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test with Keyboard:"})," Ensure all functionality is accessible without a mouse"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test with Screen Readers:"})," Verify announcements work correctly (NVDA, JAWS, VoiceOver)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't Override Focus Indicators:"})," Keep the default focus styling visible"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Communicate State Changes:"})," Use the validation event to inform users of state changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Set Character Limits:"})," Help users understand content constraints before they exceed them"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Good: Clear labeling and validation -->
<div>
  <label for="editor"> Article Content (required, max 5000 characters) </label>
  <forge-rich-text-editor
    id="editor"
    max-length="5000"
    show-character-count
    error-message="Content exceeds maximum length">
    <forge-rte-standard-tools></forge-rte-standard-tools>
  </forge-rich-text-editor>
</div>
`})}),`
`,e.jsx(n.h3,{id:"security-considerations",children:"Security Considerations"}),`
`,e.jsx(n.p,{children:"The editor includes security features to protect against XSS and other vulnerabilities:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Paste Sanitization:"})," Pasted HTML is automatically sanitized to remove:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Scripts and event handlers"}),`
`,e.jsx(n.li,{children:"Iframes, embeds, and objects"}),`
`,e.jsx(n.li,{children:"Form elements"}),`
`,e.jsx(n.li,{children:"Dangerous attributes (onclick, onerror, etc.)"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Link Security:"})," Links automatically include security attributes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'target="_blank"'})," - Opens in new tab"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'rel="noopener noreferrer nofollow"'})," - Security and SEO protection"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Content Sanitization:"})," All user input is processed through TipTap's schema, which only allows whitelisted elements and attributes"]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Best practices:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Always sanitize content on the server side too
app.post('/save-content', (req, res) => {
  const content = sanitizeHTML(req.body.content); // Server-side validation
  saveToDatabase(content);
});
`})}),`
`,e.jsx(n.h3,{id:"content-management",children:"Content Management"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Storing content:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Recommended: Store as JSON (more efficient)
const json = editor.toJSON();
await saveToDatabase({
  content: json,
  contentType: 'json'
});

// Alternative: Store as HTML (more portable)
const html = editor.toHTML();
await saveToDatabase({
  content: html,
  contentType: 'html'
});
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Loading content:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Loading JSON content
const savedContent = await loadFromDatabase();
if (savedContent.contentType === 'json') {
  editor.content = generateHTML(savedContent.content, extensions);
} else {
  editor.content = savedContent.content;
}
`})}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"common-issues",children:"Common Issues"}),`
`,e.jsx(n.h4,{id:"editor-doesnt-appear-or-is-not-styled",children:"Editor doesn't appear or is not styled"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem:"})," The editor renders but looks unstyled or broken."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Ensure Forge CSS is loaded in your application:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="node_modules/@tylertech/forge/dist/forge.css" />
`})}),`
`,e.jsx(n.p,{children:"Or import it in your JavaScript/TypeScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@tylertech/forge/dist/forge.css';
`})}),`
`,e.jsx(n.h4,{id:"content-changes-not-detected",children:"Content changes not detected"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem:"})," The ",e.jsx(n.code,{children:"change"})," event doesn't fire when content is updated."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Make sure you're listening to the correct event and the editor is properly initialized:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const editor = document.querySelector('forge-rich-text-editor');

// Wait for initialization
editor.addEventListener('initialized', () => {
  console.log('Editor ready');

  editor.addEventListener('change', event => {
    console.log('Content changed:', event.detail);
  });
});
`})}),`
`,e.jsx(n.h4,{id:"toolbar-buttons-dont-show-active-state",children:"Toolbar buttons don't show active state"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem:"})," Bold, italic, or other format buttons don't highlight when the cursor is in formatted text."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," This usually happens if features aren't properly registered. Ensure you've imported the feature components:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@tylertech/forge-extended/rich-text-editor/features/rte-standard-tools';
`})}),`
`,e.jsx(n.p,{children:"And that they're included in the HTML:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor>
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.h4,{id:"pasted-content-loses-formatting",children:"Pasted content loses formatting"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem:"})," When pasting from Word or other sources, formatting is stripped."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Check the ",e.jsx(n.code,{children:"allow-paste-formatting"})," property:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor allow-paste-formatting="true">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.p,{children:"Note: Some complex formatting (like Word's advanced styles) may still be simplified to maintain consistent output."}),`
`,e.jsx(n.h4,{id:"link-popover-doesnt-open",children:"Link popover doesn't open"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem:"})," Clicking the link button doesn't open the URL input popover."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Ensure you've imported the link feature component and Forge popover:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@tylertech/forge-extended/rich-text-editor/features/rte-link';
import '@tylertech/forge/popover'; // Required dependency
`})}),`
`,e.jsx(n.h4,{id:"content-gets-cut-off-at-character-limit",children:"Content gets cut off at character limit"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem:"})," Users can't tell they've reached the character limit."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Enable character count display and provide clear error messages:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor max-length="1000" show-character-count error-message="Content cannot exceed 1,000 characters">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.h3,{id:"debugging-tips",children:"Debugging Tips"}),`
`,e.jsx(n.p,{children:"Enable error logging during development:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rich-text-editor suppress-errors="false">
  <forge-rte-standard-tools></forge-rte-standard-tools>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.p,{children:"Check editor initialization state:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const editor = document.querySelector('forge-rich-text-editor');

console.log('Initialized:', editor.isInitialized);
console.log('Init Error:', editor.initializationError);
`})}),`
`,e.jsx(n.p,{children:"Inspect editor content state:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`console.log('Current HTML:', editor.toHTML());
console.log('Current JSON:', editor.toJSON());
`})}),`
`,e.jsx(n.h3,{id:"getting-help",children:"Getting Help"}),`
`,e.jsx(n.p,{children:"If you encounter issues not covered here:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Check the Storybook examples"})," - See working implementations of all features"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Review the API documentation"})," - Verify you're using properties correctly"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Check browser console"})," - Look for error messages or warnings"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test in isolation"})," - Create a minimal reproduction to isolate the issue"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Report issues"})," - File bugs with reproductions on the project repository"]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The rich text editor is designed to meet WCAG 2.1 Level AA compliance with comprehensive keyboard navigation, screen reader support, and proper ARIA semantics."}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,e.jsx(n.p,{children:"All editor functionality is accessible via keyboard without requiring a mouse. The editor supports standard Tab navigation through toolbar buttons and intuitive keyboard shortcuts for formatting."}),`
`,e.jsx(n.h4,{id:"navigation-shortcuts",children:"Navigation Shortcuts"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Shortcut"}),e.jsx(n.th,{children:"Action"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Tab"})}),e.jsx(n.td,{children:"Move to next toolbar button or content area"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Shift+Tab"})}),e.jsx(n.td,{children:"Move to previous element"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})]}),e.jsx(n.td,{children:"Activate focused toolbar button"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Escape"})}),e.jsx(n.td,{children:"Close link popover"})]})]})]}),`
`,e.jsx(n.h4,{id:"text-formatting-shortcuts",children:"Text Formatting Shortcuts"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Windows/Linux"}),e.jsx(n.th,{children:"macOS"}),e.jsx(n.th,{children:"Action"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+B"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+B"})}),e.jsx(n.td,{children:"Toggle bold"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+I"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+I"})}),e.jsx(n.td,{children:"Toggle italic"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+U"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+U"})}),e.jsx(n.td,{children:"Toggle underline"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+Shift+X"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+Shift+X"})}),e.jsx(n.td,{children:"Toggle strikethrough"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+E"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+E"})}),e.jsx(n.td,{children:"Toggle code formatting"})]})]})]}),`
`,e.jsx(n.h4,{id:"heading-shortcuts",children:"Heading Shortcuts"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Windows/Linux"}),e.jsx(n.th,{children:"macOS"}),e.jsx(n.th,{children:"Action"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+Alt+1"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+Alt+1"})}),e.jsx(n.td,{children:"Apply Heading 1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+Alt+2"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+Alt+2"})}),e.jsx(n.td,{children:"Apply Heading 2"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+Alt+3"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+Alt+3"})}),e.jsx(n.td,{children:"Apply Heading 3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+Alt+0"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+Alt+0"})}),e.jsx(n.td,{children:"Convert to paragraph"})]})]})]}),`
`,e.jsx(n.h4,{id:"list-shortcuts",children:"List Shortcuts"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Windows/Linux"}),e.jsx(n.th,{children:"macOS"}),e.jsx(n.th,{children:"Action"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+Shift+8"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+Shift+8"})}),e.jsx(n.td,{children:"Toggle bullet list"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+Shift+7"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+Shift+7"})}),e.jsx(n.td,{children:"Toggle numbered list"})]})]})]}),`
`,e.jsx(n.h4,{id:"history-shortcuts",children:"History Shortcuts"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Windows/Linux"}),e.jsx(n.th,{children:"macOS"}),e.jsx(n.th,{children:"Action"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Ctrl+Z"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Cmd+Z"})}),e.jsx(n.td,{children:"Undo"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Ctrl+Shift+Z"})," or ",e.jsx(n.code,{children:"Ctrl+Y"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Cmd+Shift+Z"})," or ",e.jsx(n.code,{children:"Cmd+Y"})]}),e.jsx(n.td,{children:"Redo"})]})]})]}),`
`,e.jsx(n.h2,{id:"security",children:"Security"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"⚠️ IMPORTANT:"})," The rich text editor implements multiple layers of security to prevent XSS and injection attacks. However, ",e.jsx(n.strong,{children:"always validate and sanitize content on the server-side"})," before storing or serving it to other users."]}),`
`]}),`
`,e.jsx(n.h3,{id:"security-features",children:"Security Features"}),`
`,e.jsx(n.p,{children:"The editor provides comprehensive protection against common web security vulnerabilities:"}),`
`,e.jsx(n.h4,{id:"xss-prevention",children:"XSS Prevention"}),`
`,e.jsx(n.p,{children:"All content is sanitized to prevent cross-site scripting attacks:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Output Sanitization"}),": ",e.jsx(n.code,{children:"toHTML()"})," escapes HTML entities and removes dangerous elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input Validation"}),": Content passed via ",e.jsx(n.code,{children:".content"})," property is validated and sanitized"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Protocol Filtering"}),": Links are restricted to ",e.jsx(n.code,{children:"http:"})," and ",e.jsx(n.code,{children:"https:"})," protocols only"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ✅ Safe - Output is automatically sanitized
const html = editor.toHTML();
// Input: <script>alert(1)<\/script>
// Output: &lt;script&gt;alert(1)&lt;/script&gt;
`})}),`
`,e.jsx(n.h4,{id:"link-security",children:"Link Security"}),`
`,e.jsx(n.p,{children:"Links are validated to block dangerous protocols:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ✅ Allowed protocols
https://example.com
http://example.com/path

// ❌ Blocked protocols
javascript:alert(1)          // Blocked
data:text/html,<script>...   // Blocked
vbscript:alert(1)            // Blocked
file:///etc/passwd           // Blocked
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- ✅ Recommended: Enable URL validation (default) -->
<forge-rich-text-editor>
  <forge-rte-link validate-urls="true"></forge-rte-link>
</forge-rich-text-editor>

<!-- ⚠️ Not recommended: Disabling validation allows dangerous protocols -->
<forge-rich-text-editor>
  <forge-rte-link validate-urls="false"></forge-rte-link>
</forge-rich-text-editor>
`})}),`
`,e.jsx(n.h4,{id:"dos-prevention",children:"DoS Prevention"}),`
`,e.jsx(n.p,{children:"The editor enforces limits to prevent denial-of-service attacks:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Depth Limit"}),": JSON structures limited to 50 nesting levels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Node Count"}),": Maximum 5,000 nodes in content structure"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Character Limit"}),": Configurable via ",e.jsx(n.code,{children:"max-length"})," property"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ❌ Blocked - Too deeply nested (51+ levels)
// Throws: "Maximum nesting depth exceeded"

// ❌ Blocked - Too many nodes (5001+)
// Throws: "Maximum node count exceeded"
`})}),`
`,e.jsx(n.h3,{id:"safe-usage-patterns",children:"Safe Usage Patterns"}),`
`,e.jsx(n.h4,{id:"-trusted-content-internal-users",children:"✅ Trusted Content (Internal Users)"}),`
`,e.jsx(n.p,{children:"For content created by authenticated users in your application:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const editor = document.querySelector('forge-rich-text-editor');

// Content is automatically sanitized
editor.content = userContent;

// Output is safe to render
const html = editor.toHTML();
`})}),`
`,e.jsx(n.h4,{id:"-untrusted-content-external-sources",children:"✅ Untrusted Content (External Sources)"}),`
`,e.jsx(n.p,{children:"For content from external or public sources, use the read-only renderer:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Use renderer for display-only content
<forge-rich-text-renderer .content=\${externalContent}>
</forge-rich-text-renderer>

// Renderer automatically sanitizes input
// Consider additional server-side validation
`})}),`
`,e.jsx(n.h4,{id:"️-server-side-validation-required",children:"⚠️ Server-Side Validation Required"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Always validate on the server before storing or displaying to other users:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Client-side (this component)
const html = editor.toHTML();

// Server-side (your backend)
app.post('/api/content', (req, res) => {
  const content = req.body.content;

  // Validate and sanitize server-side
  const sanitized = serverSideSanitize(content);

  // Store sanitized content
  db.save(sanitized);
});
`})}),`
`,e.jsx(n.h3,{id:"security-best-practices",children:"Security Best Practices"}),`
`,e.jsx(n.p,{children:"When using the rich text editor:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Always Enable URL Validation"}),": Keep ",e.jsx(n.code,{children:'validate-urls="true"'})," (default) for link features"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Set Character Limits"}),": Use ",e.jsx(n.code,{children:"max-length"})," to prevent excessively large content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validate Server-Side"}),": Never trust client-side validation alone"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use CSP Headers"}),": Implement Content Security Policy headers in your application"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Monitor Errors"}),": Listen to error events for security-related issues"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep Updated"}),": Regularly update to get security patches"]}),`
`]}),`
`,e.jsx(n.h3,{id:"content-security-policy",children:"Content Security Policy"}),`
`,e.jsx(n.p,{children:"The editor works with strict Content Security Policy headers. Recommended CSP configuration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-http",children:`Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
`})}),`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:"'unsafe-inline'"})," is required for styles due to TipTap's inline styling. All component scripts are CSP-compliant."]}),`
`,e.jsx(n.h3,{id:"additional-security-resources",children:"Additional Security Resources"}),`
`,e.jsx(n.p,{children:"For detailed security information, see:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"../SECURITY.md",children:"SECURITY.md"})," - Complete security guide"]}),`
`,e.jsx(n.li,{children:"Security testing examples"}),`
`,e.jsx(n.li,{children:"Attack scenarios and mitigations"}),`
`,e.jsx(n.li,{children:"Responsible disclosure process"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["If you discover a security vulnerability, please email ",e.jsx(n.a,{href:"mailto:security@tylertech.com",children:"security@tylertech.com"})," instead of opening a public issue."]})}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,e.jsx(n.p,{children:"The editor provides live announcements for all formatting actions and state changes to keep screen reader users informed of their actions."}),`
`,e.jsx(n.h4,{id:"formatting-announcements",children:"Formatting Announcements"}),`
`,e.jsx(n.p,{children:"When users apply formatting through toolbar buttons or keyboard shortcuts, the editor announces:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text Formatting"}),': "Bold applied", "Italic removed", "Underline applied", etc.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Headings"}),': "Heading 1 applied", "Heading 2 applied", "Paragraph style applied"']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lists"}),': "Bullet list applied", "Numbered list applied", "List removed"']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alignment"}),': "Left aligned", "Center aligned", "Right aligned", "Justified"']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Code"}),': "Code formatting applied", "Code formatting removed"']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Links"}),': "Link added", "Link removed"']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"History"}),': "Undo", "Redo"']}),`
`]}),`
`,e.jsx(n.h4,{id:"state-announcements",children:"State Announcements"}),`
`,e.jsx(n.p,{children:"The editor announces important state changes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled State"}),': "Editor disabled" when the editor becomes disabled']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enabled State"}),': "Editor enabled" when the editor is re-enabled']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Read-Only State"}),': "Editor is read-only" when set to readonly mode']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Editable State"}),': "Editor is editable" when readonly mode is removed']}),`
`]}),`
`,e.jsxs(n.p,{children:["Announcements use ARIA live regions with ",e.jsx(n.code,{children:'aria-live="polite"'})," to avoid interrupting screen reader output, and clear automatically after 1 second to prevent clutter."]}),`
`,e.jsx(n.h3,{id:"aria-attributes",children:"ARIA Attributes"}),`
`,e.jsx(n.p,{children:"The editor implements comprehensive ARIA semantics for assistive technology:"}),`
`,e.jsx(n.h4,{id:"toolbar",children:"Toolbar"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="toolbar"'})," with ",e.jsx(n.code,{children:'aria-label="Rich text editor toolbar"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-orientation="horizontal"'})," for horizontal button layout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"})," references the content area ID"]}),`
`]}),`
`,e.jsx(n.h4,{id:"toolbar-buttons",children:"Toolbar Buttons"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Descriptive ",e.jsx(n.code,{children:"aria-label"})," attributes for each button (customizable via component properties)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-pressed="true"'})," when formatting is active at cursor position"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-keyshortcuts"}),' attributes documenting keyboard shortcuts (e.g., "Control+B" for bold)']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"})," references the content area ID"]}),`
`]}),`
`,e.jsx(n.h4,{id:"content-area",children:"Content Area"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="textbox"'})," with ",e.jsx(n.code,{children:'aria-multiline="true"'})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'aria-label="Editor content"'})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-readonly"})," when in readonly mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-disabled"})," when disabled"]}),`
`,e.jsxs(n.li,{children:["Generated unique ID referenced by toolbar's ",e.jsx(n.code,{children:"aria-controls"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"link-popover",children:"Link Popover"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Focuses input field automatically when opened"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"})," key applies the link"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," key cancels and closes popover"]}),`
`,e.jsx(n.li,{children:"Pre-fills with existing link URL when editing"}),`
`]}),`
`,e.jsx(n.h3,{id:"focus-management",children:"Focus Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clear, visible focus indicators on all interactive elements (provided by Forge components)"}),`
`,e.jsx(n.li,{children:"Logical focus order: toolbar buttons → content area"}),`
`,e.jsx(n.li,{children:"Focus returns to editor after toolbar actions"}),`
`,e.jsx(n.li,{children:"No keyboard traps - users can always Tab out of the editor"}),`
`,e.jsx(n.li,{children:"Popover input receives automatic focus when opened"}),`
`,e.jsx(n.li,{children:"Input text auto-selects for easy editing"}),`
`]}),`
`,e.jsx(n.h3,{id:"semantic-html",children:"Semantic HTML"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Headings use proper semantic HTML (",e.jsx(n.code,{children:"<h1>"}),", ",e.jsx(n.code,{children:"<h2>"}),", ",e.jsx(n.code,{children:"<h3>"}),") for screen reader navigation"]}),`
`,e.jsxs(n.li,{children:["Lists use semantic ",e.jsx(n.code,{children:"<ul>"})," and ",e.jsx(n.code,{children:"<ol>"})," elements"]}),`
`,e.jsxs(n.li,{children:["Links use semantic ",e.jsx(n.code,{children:"<a>"})," elements with proper href attributes"]}),`
`,e.jsx(n.li,{children:"Content structure is meaningful without CSS"}),`
`]}),`
`,e.jsx(n.h3,{id:"customization-for-accessibility",children:"Customization for Accessibility"}),`
`,e.jsx(n.p,{children:"All button labels can be customized to match your application's language or terminology:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-rte-standard-tools
  bold-label="Make text bold"
  italic-label="Make text italic"
  underline-label="Underline text"
  h1-label="Large heading"
  h2-label="Medium heading"
  h3-label="Small heading"
  align-left-label="Align text left"
  align-center-label="Center text"
  align-right-label="Align text right"
  align-justify-label="Justify text">
</forge-rte-standard-tools>
`})}),`
`,e.jsx(n.h3,{id:"accessibility-best-practices-1",children:"Accessibility Best Practices"}),`
`,e.jsx(n.p,{children:"When using the rich text editor in your application:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Provide Clear Context"}),": Use labels or instructions to describe the editor's purpose"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error Handling"}),": Provide accessible error messages for validation failures"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required Fields"}),": Use proper ",e.jsx(n.code,{children:"aria-required"})," or required indicators on the containing form element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Character Limits"}),": Announce character limits and remaining characters to screen reader users"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled State"}),": Ensure there's a clear reason communicated when the editor is disabled"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Indicators"}),": Don't override or hide the default focus indicators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Testing"}),": Test with actual screen readers (NVDA, JAWS, VoiceOver) and keyboard-only navigation"]}),`
`]})]})}function U(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{U as default};

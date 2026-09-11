import{j as e,M as i,T as d,C as o}from"./blocks-iUvzgMYI.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as h}from"./CustomArgTypes-Dt0sMaRi.js";import{T as c,D as l}from"./ThemeEditor.stories-0qVtwEEf.js";import"./iframe-BF-eadiO.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-96PQ-4uL.js";import"./custom-element-C71I-6m3.js";import"./utils-BfbFTmRC.js";import"./state-BYN9LTwN.js";import"./when-3fO0zp9C.js";import"./directive-CJw_OlP2.js";import"./style-map-B2hCpMWn.js";import"./with-default-aria-C9Cpz9fo.js";import"./constants-BoaaRiLs.js";import"./expansion-panel-CaoiQczf.js";import"./with-form-associated-CkHm9qDz.js";import"./base-button-adapter-DoZYG0eo.js";import"./focus-indicator-D-YpIZ-n.js";import"./index-YppsFCU_.js";import"./index-lWkxKqp0.js";import"./icon-CQn9_tFD.js";import"./index-a6v9myBv.js";import"./index-CV3Mr06h.js";import"./index-AMey4hNZ.js";import"./divider-B_sPebie.js";import"./index-2SJSMgh3.js";import"./select-CFm3uOAn.js";import"./field-D_6MK8sU.js";import"./list-dropdown-aware-core-DnBWHYp6.js";import"./linear-progress-constants-BB5TDrBM.js";import"./list-BB3ktmOI.js";import"./popover-CcQ25Hi3.js";import"./with-longpress-listener-BYdzOJl2.js";import"./dismissible-stack-DjoGjvdr.js";import"./skeleton-constants-BjWOtiy4.js";import"./circular-progress-k2fV9Fmz.js";import"./scaffold-Cq-PXPlN.js";import"./toolbar-XCuAAbPt.js";import"./icon-button-DqObqSUj.js";import"./index-Bf9budZ-.js";import"./index-BXjDdWpl.js";import"./index-jioUm_zW.js";import"./index-DfifUHIy.js";import"./tooltip-DjNUajub.js";import"./index-Cu3I02Pi.js";import"./index-B73ODGDC.js";function n(r){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(d,{}),`
`,e.jsxs(t.p,{children:["A complete authoring surface for a Tyler Forge™ theme. It edits all 101 ",e.jsx(t.code,{children:"--forge-theme-*"}),` design tokens,
derives a full palette from a handful of seed colors, reports the worst `,e.jsx(t.code,{children:"on-*"}),` contrast ratios, imports and
exports the theme, and can apply the theme to the live page so a customer can see it on the real product.`]}),`
`,e.jsx(t.p,{children:`The component owns no persistence. It edits a theme object and emits it; the host application decides where
that theme is stored and how it is delivered.`}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-theme-editor>
  <span slot="title">Brand theme</span>
</forge-theme-editor>
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const editor = document.querySelector('forge-theme-editor');

editor.loadTheme(await fetchSavedTheme());
editor.addEventListener('forge-theme-editor-change', ({ detail }) => save(detail.theme));
`})}),`
`,e.jsx(t.h3,{id:"views",children:"Views"}),`
`,e.jsxs(t.p,{children:["The views are in authoring order, and the editor opens on ",e.jsx(t.strong,{children:"Palette"}),` — seed a palette
first, then fine-tune individual tokens, then check contrast, then take the theme away
with you.`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Palette"})," — pick the nine seed colors and the editor derives the container ramps, the readable ",e.jsx(t.code,{children:"on-"}),`
inks, and the surface, text and outline scales. `,e.jsx(t.code,{children:"Surface"}),` chooses light or dark, and it is the palette
that owns that choice (see `,e.jsx(t.a,{href:"#light-and-dark",children:"Light and dark"}),"). ",e.jsx(t.code,{children:"Target contrast"}),` is the WCAG ratio
derived inks aim for; turning off `,e.jsx(t.code,{children:"Pure black/white accent inks"}),` derives tinted inks instead of the pure
black and white that Forge's own tokens use. `,e.jsx(t.code,{children:"Target contrast"}),` offers the three ratios WCAG 2 actually
defines (3:1, 4.5:1, 7:1) rather than a free-form number.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tokens"}),` — every token, grouped into cards (brand, primary, secondary, tertiary, surface, text,
success, error, warning, info, outline). Each group header carries a swatch of the color it is about, and
each row a color swatch and a text field. The filter narrows to matching token
names or group labels, and matched groups expand automatically. Each row has its own revert button, and
`,e.jsx(t.code,{children:"Revert all"})," clears every override at once. A ",e.jsx(t.code,{children:"Global knobs"})," panel exposes ",e.jsx(t.code,{children:"--forge-shape-factor"}),`,
a spacing multiplier, and the typography font family and size.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Contrast"})," — Forge pairs every surface token with an ",e.jsx(t.code,{children:"on-"}),` token, and that is the color it draws text
and icons in on top of that surface. Each row `,e.jsx(t.strong,{children:"renders the pair for real"}),` next to its ratio, so an
illegible combination is visible rather than inferred from a number. Body text needs 4.5:1 and large text
3:1 for WCAG 2 AA. Some targets are physically unreachable — nothing contrasts 7:1 with a mid-lightness
orange — so the report shows the shortfall rather than pretending it passed.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Import & export"})," — export as JSON, as Sass built on Forge's own ",e.jsx(t.code,{children:"theme.provide()"}),` mixin, or as a plain
`,e.jsx(t.code,{children:":root"})," CSS block. Import accepts pasted JSON or a dropped file. Unknown token names are ",e.jsx(t.strong,{children:`rejected and
reported`})," rather than imported, because an invalid name emits a ",e.jsx(t.code,{children:"--forge-theme-*"}),` property that nothing
reads.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"light-and-dark",children:"Light and dark"}),`
`,e.jsxs(t.p,{children:["A theme is ",e.jsx(t.strong,{children:"two independent designs"}),`, not one design with a switch. An accent that
reads well on white is usually wrong on near-black, so the editor keeps a separate
variant per polarity — its own token overrides and its own seed colors:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`theme.polarity; // 'light' | 'dark' — which variant is being authored
theme.variants.light; // { tokens, seeds }
theme.variants.dark; // { tokens, seeds }
`})}),`
`,e.jsxs(t.p,{children:["Editing ",e.jsx(t.code,{children:"primary"}),` in light does not touch dark, and switching back finds your light
work exactly as you left it. `,e.jsx(t.code,{children:"Surface"})," on the ",e.jsx(t.strong,{children:"Palette"}),` view switches variants; it
derives nothing on its own. A variant you have never touched is seeded from that
polarity's stock Forge colors, so starting a dark theme starts from Forge's dark
palette rather than from light accents on a dark surface.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"mode"})," is a separate question — what to ",e.jsx(t.em,{children:"emit"}),", not what to design:"]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:e.jsx(t.code,{children:"mode"})}),e.jsx(t.th,{children:"Emits"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"patch"})}),e.jsx(t.td,{children:"only the tokens you changed, so the host app's theme shows through"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"replace"})}),e.jsx(t.td,{children:"the stock set for the active polarity, then your changes on top"})]})]})]}),`
`,e.jsxs(t.p,{children:["Generating a palette sets ",e.jsx(t.code,{children:"mode"})," to ",e.jsx(t.code,{children:"replace"}),`, because 101 tokens is a whole theme
rather than a patch. Exported JSON always carries `,e.jsx(t.strong,{children:"both"}),` variants, so one file is
the complete light-and-dark design.`]}),`
`,e.jsx(t.h3,{id:"staying-readable-while-previewing",children:"Staying readable while previewing"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"immuneToPreview"}),` (on by default) keeps the editor's own chrome on the host
application's theme while a page-wide preview is applied.`]}),`
`,e.jsxs(t.p,{children:[`Without it the tool inherits the theme being authored — fine until you author
something low-contrast, at which point you cannot see well enough to fix it. The
component samples the page's own tokens before injecting the override and re-declares
them on itself; an inline `,e.jsx(t.code,{children:"!important"})," declaration outranks the preview's ",e.jsx(t.code,{children:"!important"}),`
rule on `,e.jsx(t.code,{children:":root"}),"/",e.jsx(t.code,{children:"body"}),` for this element and its subtree. Set
`,e.jsx(t.code,{children:'immune-to-preview="false"'})," to have the editor restyle along with the page."]}),`
`,e.jsx(t.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsx(t.p,{children:`The token list tiles into as many columns as the container allows, because a token value is
a hex code rather than prose. Three custom properties tune it:`}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Custom property"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Purpose"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-cell-min"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"232px"})}),e.jsx(t.td,{children:"Minimum width of a token cell before it wraps."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-max-height"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"80dvh"})}),e.jsx(t.td,{children:"Height the editor scrolls within."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-swatch-size"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"28px"})}),e.jsx(t.td,{children:"Size of the color swatch button."})]})]})]}),`
`,e.jsx(t.p,{children:"The header and the tab bar stay put while the active view scrolls."}),`
`,e.jsx(t.h3,{id:"the-live-preview",children:"The live preview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Preview on page"}),` applies the theme to the whole document, and the button, a banner, and the reflected
`,e.jsx(t.code,{children:"preview"}),` attribute all make the live state obvious. Toggling it off removes the injected stylesheet and the
application returns to its own theme.`]}),`
`,e.jsxs(t.p,{children:[`The preview has to be written as real CSS, because there is no Forge machinery that turns a theme object into
custom properties: Forge emits the light set from `,e.jsx(t.code,{children:"forge.css"})," as ",e.jsx(t.code,{children:":root { @include theme.properties; }"}),`, and
the dark set ships only as the `,e.jsx(t.code,{children:"theme-dark.theme-properties"}),` mixin, which host applications attach to a
selector themselves.`]}),`
`,e.jsxs(t.p,{children:["That is also why the preview declares its tokens on a list of selectors with ",e.jsx(t.code,{children:"!important"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`:root,
body,
.dark-theme,
.light-theme,
.app-theme-dark,
.app-theme-light,
[data-forge-theme='dark'],
[data-forge-theme='light'] {
  --forge-theme-primary: #b3001b !important;
}
`})}),`
`,e.jsxs(t.p,{children:["Host applications conventionally declare the dark set on a class on ",e.jsx(t.code,{children:"<body>"}),`, and a custom property declared
on `,e.jsx(t.code,{children:"<body>"})," beats one inherited from ",e.jsx(t.code,{children:":root"}),". Declaring at ",e.jsx(t.code,{children:":root"}),` alone therefore loses on any page already
in dark mode. Declaring on the conventional carriers as well, with `,e.jsx(t.code,{children:"!important"}),`, beats any non-important
author rule on the same element regardless of specificity, and interoperates with both the class convention
and `,e.jsx(t.code,{children:"forge-theme-toggle"}),"'s ",e.jsx(t.code,{children:"data-forge-theme"})," attribute. Set ",e.jsx(t.code,{children:"previewSelectors"}),` to target a different carrier
instead.`]}),`
`,e.jsxs(t.p,{children:["Custom properties inherit through shadow boundaries, so overriding them on ",e.jsx(t.code,{children:"<body>"}),` reaches inside every
Forge web component's shadow root too.`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h3,{id:"properties",children:"Properties"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"theme"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ForgeTheme"})}),e.jsx(t.td,{children:"an untouched theme"}),e.jsx(t.td,{children:"The theme being edited. Set as a property, not an attribute."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"preview"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})}),e.jsx(t.td,{children:"Whether the theme is applied to the live document. Reflected."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"previewSelectors"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string[]"})}),e.jsx(t.td,{children:"the conventional theme carriers"}),e.jsx(t.td,{children:"The selectors the live preview declares its tokens on."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"immuneToPreview"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"true"})}),e.jsx(t.td,{children:"Keeps the editor on the host app's theme while previewing."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"exportFormat"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'json' | 'scss' | 'css'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'json'"})}),e.jsx(t.td,{children:"The export format shown on the import and export view."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"theme.polarity"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'light' | 'dark'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'light'"})}),e.jsx(t.td,{children:"Which variant is being authored."})]})]})]}),`
`,e.jsx(t.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"getTheme()"})}),e.jsx(t.td,{children:"Returns the theme being edited."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"loadTheme(theme)"})}),e.jsx(t.td,{children:"Replaces the theme, filling in anything the value omits."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"applyPreview()"})}),e.jsx(t.td,{children:"Applies the theme to the live document."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"removePreview()"})}),e.jsx(t.td,{children:"Removes the theme from the live document."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"getPreviewCss()"})}),e.jsx(t.td,{children:"Returns the CSS the preview injects, whether or not the preview is applied."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"exportTheme(format?)"})}),e.jsx(t.td,{children:"Emits the theme as JSON, Sass or CSS."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"importTheme(text)"})}),e.jsx(t.td,{children:"Imports theme JSON and returns the warnings raised."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"generatePalette(seeds?)"})}),e.jsx(t.td,{children:"Derives the full token set from seed colors."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"setToken(token, value)"})}),e.jsx(t.td,{children:"Sets one token, or clears it when the value is empty."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"resetToken(token)"})}),e.jsx(t.td,{children:"Reverts one token to the Forge default for the theme's mode."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"resetAllTokens()"})}),e.jsx(t.td,{children:"Reverts every token."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"getContrastReport()"})}),e.jsxs(t.td,{children:["Returns every ",e.jsx(t.code,{children:"on-*"})," pair and its contrast ratio, worst first."]})]})]})]}),`
`,e.jsx(t.h3,{id:"events",children:"Events"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Detail"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"forge-theme-editor-change"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"{ theme: ForgeTheme, token: string | null }"})}),e.jsxs(t.td,{children:["Fired when the theme is edited. ",e.jsx(t.code,{children:"token"})," names the edited token, or is ",e.jsx(t.code,{children:"null"})," when the whole theme changed."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"forge-theme-editor-preview"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"{ preview: boolean, css: string }"})}),e.jsxs(t.td,{children:["Fired when the live preview is toggled. ",e.jsx(t.code,{children:"css"})," is the injected stylesheet, or empty when the preview was removed."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"forge-theme-editor-import"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"{ theme: ForgeTheme, warnings: string[] }"})}),e.jsx(t.td,{children:"Fired when a theme is imported."})]})]})]}),`
`,e.jsx(t.p,{children:"All three events bubble, are composed and are cancelable."}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`Every color swatch and text field is labelled with the token it edits, and every revert button carries an
`,e.jsx(t.code,{children:"aria-label"})," naming its token."]}),`
`,e.jsxs(t.li,{children:["The preview button reports its state with ",e.jsx(t.code,{children:"aria-pressed"}),`, and the live preview is also announced by a
banner inside the editor.`]}),`
`,e.jsxs(t.li,{children:["Each view is a labelled ",e.jsx(t.code,{children:"region"}),"."]}),`
`,e.jsx(t.li,{children:`The contrast view exists so that an authored theme can be checked against WCAG 2 AA before it ships. A
theme that fails there will be illegible for some users no matter how the editor is operated.`}),`
`]})]})}function ie(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{ie as default};

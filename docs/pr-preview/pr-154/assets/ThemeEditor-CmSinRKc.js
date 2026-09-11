import{j as e,M as i,T as d,C as o}from"./blocks-D8sjK2pi.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import{C as h}from"./CustomArgTypes-s46zcFsp.js";import{T as c,D as l}from"./ThemeEditor.stories-D_RMHrNK.js";import"./iframe-BMggY0Eq.js";import"./index-BFVZ7Xg9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DryriS_G.js";import"./custom-element-FMdYT5yi.js";import"./utils-Ci8BKDzo.js";import"./state-Dyl8P-GI.js";import"./when-3fO0zp9C.js";import"./directive-CJw_OlP2.js";import"./with-default-aria-NpWy7zUu.js";import"./constants-o7gsy-Mc.js";import"./expansion-panel-Bo47bqqc.js";import"./with-form-associated-wJwmldXl.js";import"./base-button-adapter-CeJFAvB2.js";import"./focus-indicator-CZ8Q_jHJ.js";import"./index-ChjM4iTk.js";import"./index-B1v7lt4m.js";import"./icon-B7BdjdS-.js";import"./index-BPljhD80.js";import"./index-DQHA1GbE.js";import"./index-BYJyseoH.js";import"./divider-BLlYHK1i.js";import"./index-BQbVJpGX.js";import"./select-CCapt4Qk.js";import"./field-CY6YMjTl.js";import"./list-dropdown-aware-core-Df_Yx7SR.js";import"./linear-progress-constants-sP7-VXBx.js";import"./list-D06jlVyk.js";import"./popover-Dv1Ura9R.js";import"./with-longpress-listener-Dn5IepJm.js";import"./dismissible-stack-Bly2SCxr.js";import"./skeleton-constants-DLEQlIIU.js";import"./circular-progress-BbGahz8R.js";import"./scaffold-DdcCtsHe.js";import"./toolbar-CNb_cDVA.js";import"./icon-button-TlXi4X8k.js";import"./index-DJgm2yXY.js";import"./index-CcueWhpz.js";import"./index-BBAqRjuy.js";import"./index-5wD8nJ0C.js";import"./tooltip-BKYddWnJ.js";import"./index-BmpyAemi.js";import"./index-DLamJMGI.js";function n(r){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
black and white that Forge's own tokens use.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tokens"}),` — every token, grouped (brand, primary, secondary, tertiary, surface, text, success, error,
warning, info, outline), each with a color swatch and a text field. The filter narrows to matching token
names or group labels, and matched groups expand automatically. Each row has its own revert button, and
`,e.jsx(t.code,{children:"Revert all"})," clears every override at once. A ",e.jsx(t.code,{children:"Global knobs"})," panel exposes ",e.jsx(t.code,{children:"--forge-shape-factor"}),`,
a spacing multiplier, and the typography font family and size.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Contrast"})," — every ",e.jsx(t.code,{children:"on-*"}),` token measured against the background token it names, worst first. Body text
needs 4.5:1 and large text 3:1 for WCAG 2 AA. Some targets are physically unreachable — nothing contrasts
7:1 with a mid-lightness orange — so the report shows the shortfall rather than pretending it passed.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Import & export"})," — export as JSON, as Sass built on Forge's own ",e.jsx(t.code,{children:"theme.provide()"}),` mixin, or as a plain
`,e.jsx(t.code,{children:":root"})," CSS block. Import accepts pasted JSON or a dropped file. Unknown token names are ",e.jsx(t.strong,{children:`rejected and
reported`})," rather than imported, because an invalid name emits a ",e.jsx(t.code,{children:"--forge-theme-*"}),` property that nothing
reads.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"light-and-dark",children:"Light and dark"}),`
`,e.jsxs(t.p,{children:["Polarity belongs to the ",e.jsx(t.strong,{children:"palette"}),`, not to the emit mode. It decides how the surface, container, text and
outline ramps are derived, and a palette derived for one polarity is not meaningful under the other — so it
sits next to the seed colors, on `,e.jsx(t.code,{children:"theme.generator.mode"}),`, rather than being a side effect of what gets
emitted.`]}),`
`,e.jsxs(t.p,{children:[`Switching it re-derives immediately. Seeds still sitting on the outgoing polarity's stock values are
swapped for the incoming polarity's, because Forge's own light and dark accents differ: keeping the light
`,e.jsx(t.code,{children:"primary"})," (",e.jsx(t.code,{children:"#3f51b5"}),`) on a near-black surface would fail contrast on sight. Seeds you actually chose are
left alone.`]}),`
`,e.jsxs(t.p,{children:["Because generating produces all 101 tokens, it also sets ",e.jsx(t.code,{children:"mode"}),` to that polarity — a generated palette is a
whole theme, not a patch on the host application's own.`]}),`
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
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"theme"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ForgeTheme"})}),e.jsx(t.td,{children:"an untouched theme"}),e.jsx(t.td,{children:"The theme being edited. Set as a property, not an attribute."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"preview"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})}),e.jsx(t.td,{children:"Whether the theme is applied to the live document. Reflected."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"previewSelectors"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string[]"})}),e.jsx(t.td,{children:"the conventional theme carriers"}),e.jsx(t.td,{children:"The selectors the live preview declares its tokens on."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"exportFormat"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'json' | 'scss' | 'css'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'json'"})}),e.jsx(t.td,{children:"The export format shown on the import and export view."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"theme.generator.mode"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'light' | 'dark'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'light'"})}),e.jsx(t.td,{children:"The palette polarity the ramps are derived for."})]})]})]}),`
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
`]})]})}function se(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{se as default};

import{j as e,M as i,T as o,C as h}from"./blocks-a_dBOZNQ.js";import{useMDXComponents as s}from"./index-De36GQbW.js";import"./index-BFVZ7Xg9.js";import{T as d,D as a}from"./ThemeEditor.stories-BBERQMUR.js";import"./iframe-D_NpdGMW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CyYN7QVE.js";import"./utils-Duph8ic8.js";import"./state-C9-AOl8Q.js";import"./when-3fO0zp9C.js";import"./directive-CJw_OlP2.js";import"./style-map-Bge-VfZu.js";import"./with-default-aria-QQHkHnUD.js";import"./constants-B5g2L9LN.js";import"./checkbox-41bi7fhv.js";import"./with-form-associated-Cw-EPjlx.js";import"./base-button-adapter-BO3BfEkZ.js";import"./focus-indicator-DP9wjAbI.js";import"./field-DcSzRj8X.js";import"./button-constants-0Bfcv2FI.js";import"./button-toggle-group-constants-Bo49vgYl.js";import"./icon-button-4GgzV-1p.js";import"./icon-Dd_9Vvpg.js";import"./index-cQL53Ya2.js";import"./index-CvHOwGKz.js";import"./circular-progress-CfgYXd9J.js";import"./index-DZYfwwJc.js";import"./index-D1Q40_o8.js";import"./index-K_l4cuxA.js";import"./index-0009A16o.js";import"./linear-progress-constants-C0luehvm.js";import"./index-Csjgs8G6.js";import"./select-DqnMJWbk.js";import"./list-dropdown-aware-core-BD33dnOX.js";import"./list-GS8h1t_U.js";import"./popover-Xht5KpYt.js";import"./with-longpress-listener-dfgopyNX.js";import"./dismissible-stack-BlfoJVVW.js";import"./skeleton-constants-BxIJ0k3n.js";import"./divider-DQDisoZe.js";import"./scaffold-B4n7LoDj.js";import"./toolbar-B4ibBQfC.js";import"./index-BVIHw5f8.js";import"./tooltip-9D2XTgYD.js";import"./index-CYHX8xAo.js";import"./index-SWvG2m8w.js";import"./index-q9xROInv.js";import"./index-Cz18WJIT.js";import"./index-CpNfU7l5.js";import"./index-DCI5EXVu.js";import"./index-BQJ5BcfM.js";function n(r){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(o,{}),`
`,e.jsxs(t.p,{children:["A complete authoring surface for a Tyler Forge™ theme. It edits all 101 ",e.jsx(t.code,{children:"--forge-theme-*"}),` design tokens,
derives a full palette from a handful of seed colors, reports the worst `,e.jsx(t.code,{children:"on-*"}),` contrast ratios, imports and
exports the theme, and can apply the theme to the live page so a customer can see it on the real product.`]}),`
`,e.jsx(t.p,{children:`The component owns no persistence. It edits a theme object and emits it; the host application decides where
that theme is stored and how it is delivered.`}),`
`,e.jsx(h,{of:a}),`
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
`,e.jsx(t.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsx(t.p,{children:`The token list tiles into as many columns as the container allows, because a token value is
a hex code rather than prose. Three custom properties tune it:`}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Custom property"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Purpose"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-cell-min"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"232px"})}),e.jsx(t.td,{children:"Minimum width of a token cell before it wraps."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-max-height"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"80dvh"})}),e.jsx(t.td,{children:"Height the editor scrolls within."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-swatch-size"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"28px"})}),e.jsx(t.td,{children:"Size of the color swatch button."})]})]})]}),`
`,e.jsx(t.p,{children:"The header and the tab bar stay put while the active view scrolls."}),`
`,e.jsx(t.h3,{id:"seeing-a-theme",children:"Seeing a theme"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Preview theme"})," opens a dialog holding ",e.jsx(t.code,{children:"forge-theme-showcase"}),` — real Forge
components in real states: buttons including disabled, a field that is actually
invalid, checked and indeterminate checkboxes, chips, the four status ramps, five
nested surface levels, the three text emphasis levels and progress.`]}),`
`,e.jsxs(t.p,{children:[`The theme is declared as custom properties on a wrapper inside the dialog, so it
reaches the showcase and stops there. `,e.jsx(t.strong,{children:"The editor never writes to the document."})]}),`
`,e.jsxs(t.p,{children:["That wrapper also carries ",e.jsx(t.code,{children:"forge-popover-host"}),`, which is load-bearing rather than
decorative. Forge portals overlays — select dropdowns, menus, tooltips — to the
nearest ancestor matching `,e.jsx(t.code,{children:":is(forge-dialog,forge-popover,[forge-popover-host])"}),`,
falling back to `,e.jsx(t.code,{children:"document.body"}),`. Without the attribute that ancestor is the dialog
itself, so opening a select appended its dropdown as a `,e.jsx(t.em,{children:"sibling"}),` of the themed
wrapper, outside the scope, and it rendered in the stock light theme. Anything that
scopes a Forge theme to a subtree rather than to `,e.jsx(t.code,{children:":root"})," has to account for this."]}),`
`,e.jsx(t.p,{children:`That is deliberate. The editor's job ends at producing a theme; applying one is the
host application's job, and in the intended flow the theme is saved and the branding
API applies it. A component that also restyled the live page would be doing someone
else's work, and would need an escape hatch to stop the tool it lives in from being
restyled by whatever half-finished theme is on screen.`}),`
`,e.jsxs(t.p,{children:[`The showcase itself is deliberately dumb: no properties, no theming logic. It renders
components and inherits whatever custom properties an ancestor declares, which makes
it reusable as a specimen anywhere — give it a wrapper with `,e.jsx(t.code,{children:"--forge-theme-*"}),` set and
it shows that theme.`]}),`
`,e.jsx(t.h3,{id:"saving-a-theme",children:"Saving a theme"}),`
`,e.jsx(t.p,{children:`There is no save button; persistence belongs to the host. Two ways to get the theme
out:`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`// Every edit, as it happens.
editor.addEventListener('forge-theme-editor-change', ({ detail }) => save(detail.theme));

// Or on demand.
const theme = editor.getTheme();
const json = editor.exportTheme('json');
`})}),`
`,e.jsxs(t.p,{children:[`Exported JSON carries both variants, the polarity, the emit mode, the knobs and the
generator options — everything needed to reopen the theme later or to hand it to
something that applies it. `,e.jsx(t.code,{children:"exportTheme('scss')"}),` emits Sass built on Forge's own
`,e.jsx(t.code,{children:"theme.provide()"})," mixin and ",e.jsx(t.code,{children:"exportTheme('css')"})," a plain ",e.jsx(t.code,{children:":root"}),` block, for pasting
into an application directly.`]}),`
`,e.jsx(t.h4,{id:"use-relative-css",children:"Use relative CSS"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Use relative CSS"}),` checkbox on the import and export view, or the
`,e.jsx(t.code,{children:"relativeColors"}),` property, switches the CSS and Sass exports over to expressing every
derived ramp as a
`,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#relative_colors",rel:"nofollow",children:"CSS relative color"}),`
of the token it came from, rather than freezing it at export time. Off by default, so
the exports are literal values unless you ask otherwise; toggle it to compare.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`--forge-theme-primary: #b8f21a;
--forge-theme-primary-container: oklch(
  from var(--forge-theme-primary) calc(l + -0.3973) calc(c * 0.6079) calc(h + 5.304)
);
`})}),`
`,e.jsxs(t.p,{children:["Change ",e.jsx(t.code,{children:"--forge-theme-primary"}),` in an application and every primary container follows.
`,e.jsx(t.strong,{children:"40 of the 101 tokens"}),` derive this way: all 28 accent containers, the 8-step surface
ramp and the 4 outline steps.`]}),`
`,e.jsxs(t.p,{children:["It applies to the Sass export too — ",e.jsx(t.code,{children:"theme.provide()"}),` interpolates the value verbatim,
so an expression passes straight through. JSON is unaffected, and the checkbox is
disabled for it: JSON carries the theme itself, so there is nothing to express
relatively.`]}),`
`,e.jsxs(t.p,{children:[`The coefficients are measured from the colors the generator produced, so a formula
evaluates to exactly what the preview showed and then keeps tracking. Three forms are
tried, most relative first — chroma and hue both relative to the base, then chroma
fixed, then chroma and hue both fixed with only lightness tracking. That last one
exists because Forge's own surfaces are pure greys: a neutral base has no chroma to
scale and no meaningful hue to offset from, but a surface ramp is a lightness ramp,
which is the part worth keeping. `,e.jsx(t.strong,{children:`A formula is only emitted if evaluating it
reproduces the value`}),`; otherwise the token falls back to a literal, so the export can
never disagree with the preview.`]}),`
`,e.jsxs(t.p,{children:[`The remaining 61 tokens are literal because they are not transforms of anything: the
43 `,e.jsx(t.code,{children:"on-"})," inks are the result of an iterative contrast search, the 8 ",e.jsx(t.code,{children:"text-"}),` steps are
pure black or white at a fixed alpha, and the rest are the seeds themselves plus
`,e.jsx(t.code,{children:"surface-bright-shadow"}),", which is a ",e.jsx(t.code,{children:"box-shadow"}),"."]}),`
`,e.jsxs(t.p,{children:[`Needs Chrome 119+, Safari 16.4+ or Firefox 128+. Older engines drop the declaration
and fall back to the value Forge compiles into its own `,e.jsx(t.code,{children:"var()"}),` references, which is a
`,e.jsx(t.strong,{children:"quiet"}),` failure — use the plain CSS export if that matters. The emitted stylesheet
carries that caveat in a comment.`]}),`
`,e.jsxs(t.p,{children:["One thing worth knowing for whoever applies these: ",e.jsx(t.strong,{children:`Forge has no machinery that
turns a theme object into custom properties.`})," ",e.jsx(t.code,{children:"forge-theme-toggle"}),` only sets
`,e.jsx(t.code,{children:"data-forge-theme"})," on ",e.jsx(t.code,{children:"<html>"}),` and relies on the host application having written a
rule for it — that attribute appears nowhere in Forge core. Applying a theme means
emitting real CSS, and Forge ships its light set as `,e.jsx(t.code,{children:":root { … }"}),` but its dark set
only as a Sass mixin that host applications attach to a class. A custom property
declared on `,e.jsx(t.code,{children:"<body>"})," beats one inherited from ",e.jsx(t.code,{children:":root"}),`, so an override that only
targets `,e.jsx(t.code,{children:":root"})," loses on a page already in dark mode."]}),`
`,e.jsx(t.h3,{id:"properties",children:"Properties"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"theme"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ForgeTheme"})}),e.jsx(t.td,{children:"an untouched theme"}),e.jsx(t.td,{children:"The theme being edited. Set as a property, not an attribute."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"exportFormat"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'json' | 'scss' | 'css'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'json'"})}),e.jsx(t.td,{children:"The export format shown on the import and export view."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"relativeColors"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})}),e.jsx(t.td,{children:"Express derived ramps as CSS relative colors when exporting."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"theme.polarity"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'light' | 'dark'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'light'"})}),e.jsx(t.td,{children:"Which variant is being authored."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"theme.mode"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'patch' | 'replace'"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'patch'"})}),e.jsx(t.td,{children:"Whether to emit only your changes or a complete theme."})]})]})]}),`
`,e.jsx(t.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"getTheme()"})}),e.jsx(t.td,{children:"Returns the theme being edited."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"loadTheme(theme)"})}),e.jsx(t.td,{children:"Replaces the theme, filling in anything the value omits."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"exportTheme(format?)"})}),e.jsxs(t.td,{children:["Emits the theme as JSON, Sass or CSS, honouring ",e.jsx(t.code,{children:"relativeColors"}),"."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"importTheme(text)"})}),e.jsx(t.td,{children:"Imports theme JSON and returns the warnings raised."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"generatePalette(seeds?)"})}),e.jsx(t.td,{children:"Derives the full token set from seed colors."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"setToken(token, value)"})}),e.jsx(t.td,{children:"Sets one token, or clears it when the value is empty."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"resetToken(token)"})}),e.jsx(t.td,{children:"Reverts one token to the Forge default for the polarity."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"resetAllTokens()"})}),e.jsx(t.td,{children:"Reverts every token in the active variant."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"getContrastReport()"})}),e.jsxs(t.td,{children:["Returns every ",e.jsx(t.code,{children:"on-*"})," pair and its ratio, worst first."]})]})]})]}),`
`,e.jsx(t.h3,{id:"events",children:"Events"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Detail"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"forge-theme-editor-change"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"{ theme: ForgeTheme, token: string | null }"})}),e.jsxs(t.td,{children:["Fired when the theme is edited. ",e.jsx(t.code,{children:"token"})," names the edited token, or is ",e.jsx(t.code,{children:"null"})," when the whole theme changed."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"forge-theme-editor-import"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"{ theme: ForgeTheme, warnings: string[] }"})}),e.jsx(t.td,{children:"Fired when a theme is imported."})]})]})]}),`
`,e.jsx(t.p,{children:"Both events bubble, are composed and are cancelable."}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`Every color swatch and text field is labelled with the token it edits, and every revert button carries an
`,e.jsx(t.code,{children:"aria-label"})," naming its token."]}),`
`,e.jsxs(t.li,{children:["Each view is a labelled ",e.jsx(t.code,{children:"region"}),", and the preview dialog is labelled and described."]}),`
`,e.jsx(t.li,{children:`The contrast view exists so that an authored theme can be checked against WCAG 2 AA before it ships. A
theme that fails there will be illegible for some users no matter how the editor is operated.`}),`
`]})]})}function he(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{he as default};
